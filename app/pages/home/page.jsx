'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SpecialTextanimation from '@/app/Components/SpecialText/SpecialTextanimation';
import Headeranimation from '@/app/Components/HeaderTextanimation/Headeranimation';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const containerRef = useRef(null);
  const zoomcontainerRef = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const zoomcontainer = zoomcontainerRef.current;
    const image2 = image2Ref.current;

    gsap.set(image2, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' });
    gsap.set(zoomcontainer, { width: '50%' });

    gsap.to(zoomcontainer, {
      width: '98%',
      borderRadius: 10,
      scrollTrigger: {
        trigger: container,
        start: '10%',
        end: '90%',
        scrub: true,

        duration: 0.1,
      },
    });

    gsap.to(image2, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'center center',
        end: '80%',
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <main
        ref={containerRef}
        className=" relative flex flex-col items-center h-[400vh] w-full mt-[5%]  "
      >
        <div
          ref={zoomcontainerRef}
          className="sticky h-[50vh] lg:h-[90vh] w-full   top-10 flex items-center justify-center flex-col overflow-hidden"
        >
          <img src={'/ld.png'} className="h-full w-screen object-cover relative" />
          <img
            ref={image2Ref}
            className="h-full w-screen object-cover  absolute top-0 z-40"
            src={'/clip3.jpg'}
          />
        </div>
      </main>
      <div className="flex flex-col lg:flex-row h-[50vh] md:h-[100vh]  lg:h-[100vh] w-full  px-[5%]   ">
        <div className="flex items-center justify-center w-full">
          <Headeranimation
            className="  text-6xl lg:text-[200px] text-black relative   w-full"
            text="anc"
          />
        </div>
        <div className="flex w-full items-center justify-end">
          <SpecialTextanimation
            text="Powered by Bang & Olufsen's signature sound, the Beoplay HX delivers clarity, precision, and power. Every note is . Surface Headphones 2 features voice, touch and fingertip controls with 13 levels of active noise cancellation."
            specialWords={['Bang', '&', 'Olufsen']}
            className=" w-full lg:w-3/4  leading-tight"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
