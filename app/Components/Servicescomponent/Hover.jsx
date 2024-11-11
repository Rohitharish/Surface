'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Headeranimation from '@/app/Components/HeaderTextanimation/Headeranimation';
import TextAnimation from '../Textanimation/Textanimation';

gsap.registerPlugin(ScrollTrigger);

function Hover() {
  const ContainerRef = useRef(null);
  const ImageRef = useRef(null);
  const Image2Ref = useRef(null);

  useEffect(() => {
    const Image = ImageRef.current;
    const Image2 = Image2Ref.current;

    const master = gsap.timeline();

    const setInitialPosition = () => {
      gsap.set(Image, { yPercent: 0 });
    };

    const createAnimation = () => {
      const tl = gsap.timeline();

      tl.to(
        Image,

        {
          scrollTrigger: {
            trigger: ContainerRef.current,
            start: 'top 100%',
            end: 'bottom -50%',
            scrub: 2,

          },
          yPercent: -20,
          ease: 'power2.out',
        },
      );
      tl.to(
        Image2,

        {
          scrollTrigger: {
            trigger: ContainerRef.current,
            start: 'top 100%',
            end: 'bottom -50%',
            scrub: 2,
       
          },
          yPercent: -20,
          ease: 'power2.out',
        },
        '<',
      );

      return tl;
    };

    master.add(setInitialPosition).add(createAnimation);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <div className="flex relative flex-col items-center justify-center h-full px-[3%] bg-black">
      <div className="flex w-full items-start py-[2%]">
        <Headeranimation
          className="text-6xl md:text-9xl lg:text-[200px] text-white relative w-full"
          text="hover"
        />
      </div>

      <div className=" grid grid-cols-12 gap-4 h-full">
        <div
          ref={ContainerRef}
          className="col-span-12 lg:col-span-7 justify-center rounded-lg h-[40vh] lg:h-[120vh] overflow-hidden  bg-red-400"
        >
          <img
            ref={ImageRef}
            src="/headset2.png"
            alt="Gesture Image"
            // width={1000}
            // height={1000}
            className="object-cover w-full h-[150vh]"
          />
        </div>
        {/* second section */}
        <div className="col-span-12 lg:col-span-5 bg-black rounded-lg h-[50vh] lg:h-[90vh] overflow-hidden">
          <img
            ref={Image2Ref}
            src="/headset1.png"
            alt="Gesture Image"
            // width={1000}
            // height={1000}
            className="object-cover w-full h-[150vh]"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-start py-[1%] ">
        <TextAnimation
          className="text-base text-white relative h-full w-full lg:w-1/2"
          text=" intuitive touch controls"
        />
      </div>
      <div className="w-full flex items-center justify-end py-[15%] lg:py-[20%] ">
        <TextAnimation
          className="text-sm lg:text-base text-zinc-600 relative h-full w-full lg:w-1/2"
          text="Whether you're listening via Bluetooth, USB-C, or a 3.5mm audio jack, Beoplay HX offers seamless compatibility with all your devices. Multipoint connectivity allows you to pair with two devices simultaneously, so you can easily switch between your phone and laptop without missing a beat."
        />
      </div>
    </div>
  );
}

export default Hover;
