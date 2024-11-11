import Link from 'next/link';
import animationData from '../../../public/anim3.json';
import React from 'react';
import Lottie from 'react-lottie';
import Menu from '../Menu/Menu';

const Navbar = () => {
  return (
    <>
      <nav className="flex absolute z-50 w-full justify-between items-center px-8 py-[35px] ">
        <Link href="/" className="text-white font-bold text-4xl ">
          Microsoft
        </Link>

        <div className="flex space-x-4  mr-[6%] ">
          <Link
            href="/"
            className=" hidden md:flex lg:flex  items-center justify-center   text-black bg-white  rounded-lg w-full   flex-row px-6 py-2 "
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
