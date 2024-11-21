'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Headeranimation from '@/app/Components/HeaderTextanimation/Headeranimation';
import TextAnimation from '@/app/Components/Textanimation/Textanimation';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const ContainerRef = useRef(null);
  const ImageRef = useRef(null);

  useEffect(() => {
    const Image = ImageRef.current;

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
    <div className="flex relative flex-col items-center justify-center h-full px-[2%] pt-[10%]">
      <div className="flex w-full items-start ">
        <Headeranimation
          className="text-6xl md:text-9xl lg:text-[200px] text-black relative w-full"
          text="Gesture"
        />
      </div>

      <div className=" grid grid-cols-12 gap-4 h-full">
        <div
          ref={ContainerRef}
          className="col-span-12 lg:col-span-5 justify-center rounded-lg h-[40vh] lg:h-[90vh] overflow-hidden  bg-red-400"
        >
          <img
            ref={ImageRef}
            src="/Anc.png"
            alt="Gesture Image"
            // width={1000}
            // height={1000}
            className="object-cover w-full h-[120vh]"
          />
        </div>
        {/* second section */}
        <div className="col-span-12 lg:col-span-7 bg-black rounded-lg h-full">
          <section className="flex h-[60vh] lg:h-full w-full flex-col">
            <div className="flex h-full  w-full justify-end  ">
              <TextAnimation
                className="text-2xl md:text-2xl lg:text-xl  relative p-4 text-white"
                text="01"
              />
            </div>
            <div className="flex  h-full  w-full items-center justify-center ">
              <TextAnimation
                className="text-4xl md:text-4xl lg:text-6xl text-white relative"
                text="Control"
              />
            </div>
            <div className="flex h-full w-full  lg:w-1/2 items-end justify-start p-4 ">
              <TextAnimation
                className="text-xs text-gray-400 relative  "
                text="Effortlessly switch between your favorite playlists or take calls with intuitive touch controls"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Services;
