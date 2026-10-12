"use client";
// @flow strict
import Link from "next/link";
import { useState } from "react";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="flex flex-wrap items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-xl font-bold">
            Éabha Kenny
          </Link>
        </div> 

        <button
          type="button"
          className="rounded-md p-2 text-white hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-violet-500 md:hidden"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-2xl" aria-hidden="true">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>

        <ul
          className={`${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} mt-4 flex w-full flex-col items-start overflow-hidden text-sm transition-all duration-300 md:mt-0 md:max-h-none md:w-auto md:flex-row md:space-x-1 md:overflow-visible md:opacity-100`}
          id="navbar-menu"
        >
          <li>
            <Link onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#technical-experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">TECHNICAL EXPERIENCE</div></Link>
          </li>
          <li>
            <Link onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#nontechexperience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">NON-TECHNICAL EXPERIENCE</div></Link>
          </li>
          <li>
            <Link onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;