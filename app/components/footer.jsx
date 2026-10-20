// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { IoLogoGithub, IoMdCall } from "react-icons/io";

function Footer() {
  return (
    <div className="relative border-t bg-[#4a302d] border-[#8a645c] text-[#f8f3ee]">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-[#e7b6ae] to-transparent"></div>
        </div>
        <div className="flex items-right gap-5">
          <Link
            target="_blank"
            href="https://github.com/said7388/developer-portfolio"
            className="flex items-center gap-2 uppercase hover:text-[#e7b6ae] text-xs"
          >
            Template from Abu Said on GitHub
          </Link>
        </div>
      </div>
    </div >
  );
};

export default Footer;