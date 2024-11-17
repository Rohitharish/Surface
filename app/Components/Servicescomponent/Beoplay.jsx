'use client';
import React from 'react';
import Link from 'next/link';
import Surface from '../HeaderTextanimation/Surface';
import SpecialTextanimation from '../SpecialText/SpecialTextanimation';

function Beoplay() {
  return (
    <div className="flex flex-col relative h-[60vh] lg:h-[120vh] w-full items-center justify-center  ">
      <div className=" flex flex-row items-center justify-center">
        <Surface
          className="text-4xl md:text-9xl lg:text-[200px] text-black relative "
          text="Micros"
        />
        <Link href="/pages/ViewIn3d">
          <div className=" h-[100px] w-[100px] md:h-[200px] md:w-[200px]  lg:h-[200px] lg:w-[200px] rounded-full bg-black hover:bg-orange-600 flex items-center justify-center duration-300 ease-in-out">
            <span className="flex items-center justify-center text-xs text-white uppercase ">
              view in 3d <div className="h-2 w-2 bg-orange-600  rounded-lg  m-1"></div>
            </span>
          </div>
        </Link>
        <Surface className="text-4xl md:text-9xl lg:text-[200px] text-black relative " text="ft" />
      </div>
      <div className=" ">
        <SpecialTextanimation
          text="view in 3d for an immersive experience"
          specialWords={['3d', 'immersive', 'experience']}
          className="w-full  leading-tight text-sm lg:text-base "
        />
      </div>
    </div>
  );
}

export default Beoplay;
