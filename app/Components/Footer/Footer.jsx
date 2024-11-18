'use client';
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div className="flex h-[80vh] w-full px-[2%]">
      <section className="flex h-full w-full bg-black rounded-lg flex-col md:flex-row lg:flex-row p-6 px-10">
        {/* Left Section */}
        <div className="flex flex-1 flex-col justify-center md:justify-end lg:justify-end uppercase py-10">
          <ul className="text-md text-zinc-300 space-y-2">
            <li className="flex items-center space-x-2">
              <a href="#services" className="text-white text-lg ">
                Company
              </a>
            </li>

            <li className="flex items-center space-x-2 ">
              <span className=" text-orange-600">•</span>
              <a href="#services" className="text-gray-400 text-sm hover:underline">
                Careers
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500">•</span>
              <a href="#contact" className="text-gray-400 text-sm hover:underline">
                About us
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500">•</span>
              <a href="#privacy" className=" text-gray-400 text-sm hover:underline">
                What we do
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 items-end justify-end text-white text-[40px] md:text-[100px] lg:text-[150px] xl:text-[220px] leading-[1]">
          Microsoft
        </div>
      </section>
    </div>
  );
}

export default Footer;
