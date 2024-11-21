'use client';
import CanvasComponent from '@/app/Components/3D/Canvas';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import Mainanimation from '@/app/Components/maintextanimation/Mainanimation';
import Headeranimation from '@/app/Components/HeaderTextanimation/Headeranimation';
import AdvancedText from '@/app/Components/ThreeTextAnimation/AdvancedText';

function SmallScreen() {
  return (
    <main className="relative bg-zinc-950  h-full uppercase px-[5%]   ">
      <Headeranimation
        className=" text-lg   text-white  flex items-center justify-center w-full h-[50vh] lowercase"
        text="Surface"
      />

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

      <Headeranimation
        className=" text-xl   text-white  flex items-center justify-center w-full h-[50vh] lowercase"
        text="available"
      />
    </main>
  );
}

export default SmallScreen;
