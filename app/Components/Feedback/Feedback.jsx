'use client';
import React from 'react';
import TextAnimation from '../Textanimation/Textanimation';

function Feedback() {
  return (
    <div className="flex flex-col h-screen w-full font-[helvetica] uppercase leading-[1] items-center justify-center px-[5%]">
      <section className="flex border-t-2 h-full w-full items-center">
        <TextAnimation
          className="text-sm  text-black w-full md:w:1/2 lg:w-1/4 leading-tight "
          text="Sometimes with Next.js, components relying on window or the DOM may not work due to"
        />
      </section>
      <section className="flex border-t-2  h-full w-full items-center">
        <TextAnimation
          className="text-sm  text-black w-full md:w:1/2 lg:w-1/4 leading-tight "
          text="Sometimes with Next.js, components relying on window or the DOM may not work due to"
        />
      </section>
      <section className="flex border-t-2  h-full w-full items-center">
        <TextAnimation
          className="text-sm  text-black w-full md:w:1/2 lg:w-1/4  leading-tight"
          text="Sometimes with Next.js, components relying on window or the DOM may not work due to"
        />
      </section>
    </div>
  );
}

export default Feedback;
