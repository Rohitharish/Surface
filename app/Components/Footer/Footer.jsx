'use client';
import React from 'react';
import TextAnimation from '../Textanimation/Textanimation';
import Link from 'next/link';

function Footer() {
  return (
    <div className="h-[80vh] w-full p-[2%]">
      <section className=" h-full w-full bg-black rounded-lg flex flex-col md:flex-row lg:flex-row">
        <div className="flex items-end h-full w-full uppercase p-[4%]">
          <ul className="text-md text-zinc-300">
            <li className="">
              <Link href="#about" className=" text-white text-lg ">
                Company
              </Link>
            </li>
            <li className="">
              <a href="#services" className="">
                Careers
              </a>
            </li>
            <li className="">
              <a href="#contact" className="">
                About us
              </a>
            </li>
            <li className="">
              <a href="#privacy" className="">
                What we do
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-start justify-start lg:items-end lg:justify-end">
          <TextAnimation
            className="  text-white text-6xl md:text-[200px] lg:text-[200px]  "
            text="Microsoft"
          />
        </div>
      </section>
    </div>
  );
}

export default Footer;
