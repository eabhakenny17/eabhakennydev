import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);

const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${escapeHtml(userMessage).replace(/\n/g, '<br>')}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

async function sendEmail({ name, email, message }) {
  const mailOptions = {
    from: `Portfolio <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `New Message From ${name}`,
    text: `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${message}`,
    html: generateEmailTemplate(name, email, message),
    replyTo: email,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message } = payload;

    if (!process.env.EMAIL_ADDRESS || !process.env.GMAIL_PASSKEY) {
      return NextResponse.json({
        success: false,
        message: 'Email service is not configured.',
      }, { status: 500 });
    }

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim() ||
      name.length > 100 ||
      email.length > 100 ||
      message.length > 500
    ) {
      return NextResponse.json({
        success: false,
        message: 'Please provide a name, valid email, and message within the allowed lengths.',
      }, { status: 400 });
    }

    await sendEmail({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('Contact email error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Failed to send email. Please try again later.',
    }, { status: 500 });
  }
};