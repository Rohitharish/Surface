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

    // Initial clipPath to cover image from left
    gsap.set(image2, { clipPath: 'inset(0 100% 0 0)' });
    gsap.set(zoomcontainer, { width: '50%' });

    // Animate zoomcontainer width
    gsap.to(zoomcontainer, {
      width: '98%',
      borderRadius: 10,
      scrollTrigger: {
        trigger: container,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    // Animate image2 clipPath to reveal from left to right
    gsap.to(image2, {
      clipPath: 'inset(0 0% 0 0)', // Reveals image from left to right
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <main
        ref={containerRef}
        className="relative flex flex-col items-center h-[400vh] w-full mt-[20%]"
      >
        <div className="flex items-center justify-center w-full">
          <Headeranimation
            className="text-6xl lg:text-[200px] text-black relative w-full"
            text="omnisonic"
          />
        </div>
        <div
          ref={zoomcontainerRef}
          className="sticky h-[50vh] lg:h-[90vh] w-full top-10 flex items-center justify-center flex-col overflow-hidden"
        >
          <div className=" absolute flex h-full w-full items-start justify-start z-50 p-[4%]">
            <SpecialTextanimation
              text="immersive, 360 - degree audio experiences."
              specialWords={['360', '-', 'degree']}
              className="w-full leading-tight"
            />
          </div>
          <img src={'/b.png'} className="h-full w-screen object-cover relative" />
          <img
            ref={image2Ref}
            className="h-full w-screen object-cover absolute top-0 z-40"
            src={'/a.png'}
          />
        </div>
      </main>
      <div className="flex flex-col lg:flex-row h-[50vh] md:h-[100vh] lg:h-[100vh] w-full px-[5%]">
        <div className="flex w-full items-center justify-center">
          <SpecialTextanimation
            text="Powered by Bang & Olufsen's signature sound, the Beoplay HX delivers clarity, precision, and power. Every note is . Surface Headphones 2 features voice, touch, and fingertip controls with 13 levels of active noise cancellation."
            specialWords={['Bang', '&', 'Olufsen']}
            className="w-full lg:w-[40%] leading-tight"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
