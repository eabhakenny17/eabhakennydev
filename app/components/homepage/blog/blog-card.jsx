// @flow strict
{/*import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog, priority = false }) {

  return (
    <div className="border border-[#7f5d55] hover:border-[#c98d83] transition-all duration-500 bg-[#4e342f] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
          alt=""
          priority={priority}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#e7b6ae] text-sm">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            }
          </div>
        </div>
        <Link target='_blank' href={blog.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-[#f8f3ee] sm:text-xl font-medium hover:text-[#c78172]'>
            {blog.title}
          </p>
        </Link>
        <p className='mb-2 text-sm text-[#e7b6ae]'>
          {`${blog.reading_time_minutes} Min Read`}
        </p>
        <p className='text-sm lg:text-base text-[#f3ece8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p>*/}
        {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-[#e7b6ae] text-[#2b1d1a] px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
      {/*</div>
    </div>
  );
};

export default BlogCard;*/}