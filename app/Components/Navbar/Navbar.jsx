import Link from 'next/link';
import animationData from '../../../public/anim3.json';
import React from 'react';
import Lottie from 'react-lottie';
import Menu from '../Menu/Menu';

const Navbar = () => {
  return (
    <>
      <nav className="flex absolute z-50 w-full justify-between items-center px-8 py-[35px] ">
        <Link href="/" className="text-white font-bold text-4xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="microsoft-windows"
            className="w-8 h-8 text-white"
          >
            <path
              d="M7 7V1.125L0 2v5zM8 7h8V0L8 1zM8 8v6l8 1V8zM7 8H0v5l7 .875z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>

        <div className="flex space-x-4  mr-[6%] ">
          <Link
            href="/"
            className=" hidden md:flex lg:flex  items-center justify-center   text-black bg-white  rounded-lg w-full   flex-row px-6 py-2  "
          >
            Connect
            <Lottie
              options={{ animationData: animationData, loop: true, autoplay: true, speed: 6 }}
              height={20}
              width={20}
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
