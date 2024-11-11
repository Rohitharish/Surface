'use client';
import React from 'react';
import Headeranimation from '../HeaderTextanimation/Headeranimation';
import Link from 'next/link';

function Beoplay() {
  return (
    <div className="flex flex-col relative h-[60vh] lg:h-[120vh] w-full items-center justify-center  space-y-20 ">
      <div className=" items-center justify-center">
        <Headeranimation
          className="text-6xl md:text-9xl lg:text-[200px] text-black relative "
          text="Surface"
        />
      </div>
      <Link href="/pages/ViewIn3d">
        <button className="flex h-[50px] w-[200px] bg-slate-300 text-black uppercase rounded-full items-center justify-center text-xs space-x-5">
          <span>view in 3d</span>
          <div className="h-2 w-2 rounded-full bg-blue-600"></div>
        </button>
      </Link>
    </div>
  );
}

export default Beoplay;
