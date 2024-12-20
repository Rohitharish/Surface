'use client';
import CanvasComponent from '@/app/Components/3D/Canvas';
import gsap from 'gsap';
import React, { useEffect, useRef, useState, Suspense } from 'react';
import Mainanimation from '@/app/Components/maintextanimation/Mainanimation';
import Headeranimation from '@/app/Components/HeaderTextanimation/Headeranimation';
import AdvancedText from '@/app/Components/ThreeTextAnimation/AdvancedText';
import SpecialTextanimation from '../SpecialText/SpecialTextanimation';

function LargeScreen() {
  const backgroundref = useRef(null);

  useEffect(() => {
    const master = gsap.timeline();
    const setInitialStates = () => {};

    const finalanimations = () => {
      const tl = gsap.timeline();
      return tl;
    };

    master.add(setInitialStates).add(finalanimations);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <main ref={backgroundref} className="relative bg-zinc-950 w-full h-[600vh]  ">
      <div className=" text-6xl md:text-6xl lg:text-[300px] text-white absolute flex flex-col items-center justify-center w-full h-[100vh] ">
        <span className=" text-xl  text-orange-600  flex items-center justify-center w-full   ">
          Introducing
        </span>
        surface
      </div>

      <div className=" text-xl     bg-white absolute bottom-0 flex items-center justify-center w-full h-[110vh]   ">
        <SpecialTextanimation
          text="The sound of innovation."
          AdvancedWords={['innovation']}
          className="w-full leading-tight  text-2xl p-[5%]"
        />
      </div>

      {/* Section of product animation and details */}
      <div className="absolute flex items-center flex-row-reverse top-[35%] left-[10%]  text-white space-x-2 md:visible lg:visible">
        <AdvancedText
          text="Powered by Microsoft"
          AdvancedWords={['Microsoft']}
          className="w-full leading-tight lowercase text-3xl"
        />
      </div>
      <div className="absolute flex items-center flex-row-reverse top-[50%] right-[20%] z-[100] text-white space-x-2">
        <AdvancedText
          text="Bluetooth action playback"
          AdvancedWords={['Bluetooth']}
          className="w-full text-3xl leading-tight lowercase"
        />
      </div>
      <div className="absolute flex items-center flex-row-reverse top-[62%] left-[5%] z-[100] text-white ">
        <AdvancedText
          text="ultra -comfortable ear pads"
          AdvancedWords={['ultra']}
          className="w-full text-3xl leading-tight lowercase"
        />
      </div>
      <div className="absolute flex items-center flex-row-reverse top-[79%] left-[5%] z-[100] text-white space-x-2">
        <AdvancedText
          text="13 levels of active noise cancellation"
          AdvancedWords={['13', 'levels']}
          className="w-full text-3xl leading-tight lowercase"
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CanvasComponent />
      </Suspense>
    </main>
  );
}

export default LargeScreen;
