import Link from "next/link";

import { personalData } from "@/utils/data/personal-data";

async function getBlogs() {
  const username = personalData.devUsername || "eabhakenny17";
  const res = await fetch(`https://dev.to/api/articles?username=${username}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  const data = await res.json();
  return Array.isArray(data) ? data.filter((blog) => blog?.cover_image) : [];
}

function BlogCard({ blog }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#7f5d55] bg-[#4e342f] text-[#f8f3ee] shadow-lg transition-all duration-500 hover:border-[#c98d83]">
      <div className="h-44 overflow-hidden lg:h-52">
        <img
          src={blog.cover_image}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between text-sm text-[#e7b6ae]">
          <span>{new Date(blog.published_at).toLocaleDateString()}</span>
          <span>{blog.reading_time_minutes} min read</span>
        </div>
        <Link href={blog.url} target="_blank" rel="noreferrer" className="text-lg font-medium text-[#f8f3ee] transition-colors hover:text-[#c78172]">
          {blog.title}
        </Link>
        <p className="text-sm text-[#f3ece8] line-clamp-3">{blog.description}</p>
      </div>
    </article>
  );
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="my-5 flex items-center justify-center lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-20 bg-[#5a3d38]" />
          <span className="w-fit rounded-md bg-[#5a3d38] p-2 px-5 text-2xl text-[#f8f3ee]">
            All Blog
          </span>
          <span className="h-[2px] w-20 bg-[#5a3d38]" />
        </div>
      </div>

      {blogs.length === 0 ? (
        <div className="rounded-lg border border-dashed border-[#7f5d55] bg-[#3d2d2a] p-8 text-center text-[#f1e8e3]">
          No blog posts are available right now.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={`${blog.slug}-${index}`} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}