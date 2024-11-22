'use client';
import CanvasComponent from '@/app/Components/3D/Canvas';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

import AdvancedText from '@/app/Components/ThreeTextAnimation/AdvancedText';
import SpecialTextanimation from '../SpecialText/SpecialTextanimation';

function SmallScreen() {
  return (
    <main className="relative bg-zinc-950  h-full  px-[5%]   ">
      <div className="  text-4xl text-white  flex flex-col items-center justify-center w-full h-[30vh] ">
        <span className=" text-xs  text-orange-600  flex items-center justify-center w-full   ">
          Introducing
        </span>
        surface
      </div>
      {/* Section of product animation and details */}
      <div className=" flex h-full w-full items-center flex-col    text-white my-10 ">
        <img className=" h-full w-full object-cover rounded-lg" src="/HP1.png" alt="" />
        <AdvancedText
          text="Powered by Microsoft"
          AdvancedWords={['Microsoft']}
          className="w-full leading-tight lowercase py-2"
        />
      </div>
      <div className=" flex h-full w-full items-center flex-col    z-[100] text-white my-10 ">
        <img className="h-full w-full  object-cover rounded-lg" src="/HP2.png " alt="" />
        <AdvancedText
          text="Bluetooth action playback"
          AdvancedWords={['Bluetooth']}
          className="w-full text-3xl leading-tight lowercase py-2"
        />
      </div>
      <div className=" flex h-full w-full items-center flex-col    z-[100] text-white my-10 ">
        <img className=" h-full w-full  object-cover rounded-lg" src="/HP3.png" alt="" />
        <AdvancedText
          text="ultra -comfortable ear pads"
          AdvancedWords={['ultra']}
          className="w-full text-3xl leading-tight lowercase py-2"
        />
      </div>
      <div className=" flex h-full w-full items-center flex-col   l z-[100] text-white my-10 ">
        <img className=" h-full w-full object-cover rounded-lg" src="/HP4.png" alt="" />
        <AdvancedText
          text="13 levels of active noise cancellation"
          AdvancedWords={['13', 'levels']}
          className="w-full h-full text-3xl leading-tight lowercase py-2"
        />
      </div>
      <div className="flex items-center justify-center  h-[50vh] w-full">
        <SpecialTextanimation
          text="The sound of innovation."
          AdvancedWords={['innovation']}
          className=" leading-tight  text-xl  "
        />
      </div>
    </main>
  );
}

export default SmallScreen;
