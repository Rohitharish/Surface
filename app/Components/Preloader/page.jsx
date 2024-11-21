'use client';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import animationData from '../../../public/Loader.json';
import SpecialTextanimation from '../SpecialText/SpecialTextanimation';
import Lottie from 'react-lottie';

function Preloader() {
  const preloaderBackgroundRef = useRef(null);
  const preloaderTextref = useRef(null);
  const Imageref = useRef(null);
  const Imagewref = useRef(null);
  const Navanimationref = useRef(null);

  useEffect(() => {
    const preloaderBackground = preloaderBackgroundRef.current;
    const preloaderText = preloaderTextref.current;
    const Image = Imageref.current;
    const Imagewrapper = Imagewref.current;
    const Navanimation = Navanimationref.current;

    const master = gsap.timeline();

    const setInitialStates = () => {
      gsap.set(preloaderText, {
        yPercent: 0,
      });

      gsap.set(preloaderBackground, {
        yPercent: 0,
      });

      gsap.set(Image, {
        scale: 1,
      });

      gsap.set(Imagewrapper, {
        borderRadius: '0px',
        scaleY: 1,
        scaleX: 1,
      });
      gsap.set(Navanimation, { yPercent: -100, opacity: 0 });
    };

    const preloaderAnimation = () => {
      const tl = gsap.timeline();

      tl.to(preloaderText, {
        yPercent: -100,
        delay: 1,
      });

      tl.to(preloaderBackground, {
        yPercent: -100,
        ease: 'power3.inOut',
        duration: 2,
      });

      return tl;
    };

    const ImageAnimation = () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.inOut',
          duration: 2,
        },
      });

      tl.to(
        Imagewrapper,
        {
          scaleY: 0.94,
          scaleX: 0.98,
          borderRadius: 10,
        },
        '<',
      );

      tl.to(
        Image,
        {
          scale: 1.2,
        },
        '<',
      );

      return tl;
    };

    const Navanimationfinal = () => {
      const tl = gsap.timeline();

      tl.to(Navanimation, {
        yPercent: 0,
        opacity: 1,
        ease: 'power3.inOut',
        duration: 2,
      });
      return tl;
    };

    master
      .add(setInitialStates)
      .add(preloaderAnimation())
      .add(Navanimationfinal)
      .add(ImageAnimation(), '-=1.2');

    return () => {
      master.kill();
    };
  }, []);

  return (
    <div className="relative flex flex-col top-0 w-full bg-transparent">
      <div
        ref={preloaderBackgroundRef}
        className="flex flex-col items-center justify-center h-[100vh] w-full fixed bg-black z-[100]"
      >
        <Lottie
          options={{ animationData: animationData, loop: true, autoplay: true }}
          height={50}
          width={50}
          speed={0.005}
        />
        <span className="text-white text-xs">Microsoft</span>
      </div>
      <div className="relative h-full w-full overflow-x-hidden">
        <Navbar />

        <section
          ref={Imagewref}
          className="h-[60vh] md:h-[100vh] lg:h-[100vh] w-full overflow-hidden"
        >
          <img
            ref={Imageref}
            src="/MainImg.png"
            className="object-cover h-full md:h-[110vh]  lg:h-[110vh] w-full "
            // controls
            // autoPlay={true}
            // muted
          />
        </section>
      </div>

      {/* Right-aligned section */}
      <section className="flex flex-col  w-full space-y-2   items-end px-[2%] ">
        <h3 className="text-md font-500 w-full md:w-1/2 lg:w-[40%] ">007-008</h3>

        <SpecialTextanimation
          text="Surface Headphones by Microsoft offer a solid audio experience with a focus on comfort and functionality. offer a refined solution for those who want to stay immersed in their audio world while staying connected."
          specialWords={['Microsoft', '&', 'Surface']}
          className=" w-full lg:w-[40%] leading-tight"
        />
      </section>
    </div>
  );
}

export default Preloader;
