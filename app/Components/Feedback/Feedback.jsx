'use client';
import React from 'react';
import TextAnimation from '../Textanimation/Textanimation';
import SpecialTextanimation from '../SpecialText/SpecialTextanimation';

function Feedback() {
  return (
    <div className="flex flex-col h-screen w-full  leading-[1] items-center justify-center px-[5%]">
      <section className="flex border-t-2 h-full w-full items-center">
        <SpecialTextanimation
          text="Sound Quality Feedback : I’ve been using the Surface Headphones for a few weeks now, and I’m blown away by the sound quality!"
          specialWords={['Sound', 'Quality', 'Feedback']}
          className=" w-full md:w-[50%] lg:w-[30%]  leading-tight"
        />
      </section>
      <section className="flex border-t-2  h-full w-full items-center">
        <SpecialTextanimation
          text="Battery Connectivity Feedback : These headphones are amazing for their battery life. I can go through multiple workdays without needing to recharge."
          specialWords={['Battery', 'Connectivity', 'Feedback']}
          className=" w-full md:w-[50%] lg:w-[30%]  leading-tight"
        />
      </section>
      <section className="flex border-t-2  h-full w-full items-center">
        <SpecialTextanimation
          text="Comfort Design Feedback : The Surface Headphones are incredibly comfortable! I was a bit concerned about wearing them for long periods, but they’re lightweight."
          specialWords={['Comfort', 'Design', 'Feedback']}
          className=" w-full md:w-[50%] lg:w-[30%]  leading-tight"
        />
      </section>
    </div>
  );
}

export default Feedback;
