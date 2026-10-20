// @flow strict

import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-[#f8f3ee]">404</h1>
      <p className="mt-4 text-lg text-[#f1e8e3]">Page Not Found</p>
      <p className="mt-2 text-[#d8bbb0]">Sorry, the page you are looking for does not exist.</p>
      <Link className="mt-5 flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#e7b6ae] to-[#8d5d50] px-3 md:px-8 py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-[#2b1d1a] no-underline transition-all duration-200 ease-out hover:text-[#2b1d1a] hover:no-underline md:font-semibold"
        role="button" 
        href="/"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default page;