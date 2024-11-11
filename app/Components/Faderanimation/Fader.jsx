'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Fader() {
  const containerRef = useRef(null);
  const sentence1Ref = useRef(null);
  const icon1Ref = useRef(null);
  const sentence2Ref = useRef(null);
  const icon2Ref = useRef(null);
  const sentence3Ref = useRef(null);
  const icon3Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sentence1 = sentence1Ref.current;
    const icon1 = icon1Ref.current;
    const sentence2 = sentence2Ref.current;
    const icon2 = icon2Ref.current;
    const sentence3 = sentence3Ref.current;
    const icon3 = icon3Ref.current;

    const master = gsap.timeline();

    const setInitialStates = () => {
      gsap.set([sentence1, sentence1, sentence3], {
        xPercent: 0,
      });

      gsap.set([icon1, icon2, icon3], {
        xPercent: 200,
      });
    };

    const sentenceafteranimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: '+=100%',
          end: '+=900%',
          scrub: true,
        },
      });

      tl.to(icon1, {
        xPercent: -100,
        duration: 4,
      });

      tl.to(icon1, {
        xPercent: 200,
        ease: 'bounce.out',
        duration: 2,
      });

      tl.to(
        sentence1,
        {
          xPercent: 100,
          duration: 4,
        },
        '<',
      );
      tl.to(sentence1, {
        xPercent: 0,
        duration: 4,
        delay: 4,
      });

      tl.to(icon2, {
        xPercent: -100,
        duration: 4,
      });

      tl.to(icon2, {
        xPercent: 200,
        ease: 'bounce.out',
        duration: 2,
      });

      tl.to(
        sentence2,
        {
          xPercent: 100,
          duration: 4,
        },
        '<',
      );
      tl.to(sentence2, {
        xPercent: 0,
        duration: 4,
        delay: 4,
      });

      tl.to(icon3, {
        xPercent: -100,
        duration: 4,
      });

      tl.to(icon3, {
        xPercent: 200,
        ease: 'bounce.out',
        duration: 2,
      });

      tl.to(
        sentence3,
        {
          xPercent: 100,
          duration: 4,
        },
        '<',
      );
      tl.to(sentence3, {
        xPercent: 0,
        duration: 4,
        delay: 4,
      });

      return tl;
    };

    master.add(setInitialStates).add(sentenceafteranimation);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className=" relative
      h-[1000vh] flex flex-col  w-full    "
    >
      {/* first line animation */}
      <div className=" sticky top-0 z-50    w-full h-[100vh] flex  flex-row   ">
        <div className=" relative   my-60 flex   w-[200px] h-[100px] border-r-2  overflow-hidden">
          <div
            ref={icon1Ref}
            className="text-white block translate-x-[200%] bluring  rounded-full h-[100px] w-[100px]  relative"
          ></div>
        </div>
        <div className=" relative my-60 flex items-start justify-start  w-[600px] h-[100px] border-l-2  overflow-hidden">
          <span
            ref={sentence1Ref}
            className="text-white block text-2xl  md:text-8xl  lg:text-8xl -translate-x-full relative"
          >
            Experience
          </span>
        </div>
      </div>
      {/* first line animation */}
      {/* second line animation */}
      <div className=" sticky top-0 z-50    w-full h-[100vh] flex flex-row  ">
        <div className=" relative  items-start justify-start my-60 flex   w-[200px] h-[100px]   overflow-hidden">
          <div
            ref={icon2Ref}
            className="text-white block translate-x-[200%] bluring  rounded-full h-[100px] w-[100px]  relative"
          ></div>
        </div>
        <div className=" relative my-60 flex items-start justify-start  w-[600px] h-[100px]   overflow-hidden">
          <span
            ref={sentence2Ref}
            className="text-white block  text-2xl  md:text-8xl  lg:text-8xl -translate-x-full relative"
          >
            Contribut
          </span>
        </div>
      </div>
      {/* second line animation */}
      {/* third line animation */}
      <div className=" sticky top-0 z-50    w-full h-[100vh] flex flex-row  ">
        <div className=" relative  items-start justify-start my-60 flex   w-[200px] h-[100px]   overflow-hidden">
          <div
            ref={icon3Ref}
            className="text-white block translate-x-[200%] bluring  rounded-full h-[100px] w-[100px]  relative"
          ></div>
        </div>
        <div className=" relative my-60 flex items-start justify-start  w-[600px] h-[100px]   overflow-hidden">
          <span
            ref={sentence3Ref}
            className="text-white block  text-2xl  md:text-8xl  lg:text-8xl -translate-x-full relative"
          >
            Experience
          </span>
        </div>
      </div>
      {/*Third line animation */}
    </main>
  );
}

export default Fader;
