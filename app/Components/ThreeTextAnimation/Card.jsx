'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextAnimation from '../Textanimation/Textanimation';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ text }) => {
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cardAnimation = gsap.fromTo(
      cardRef.current,
      { width: '0%', height: '0%' },
      {
        width: '20%',
        height: '10%',
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
          end: 'top 10%',

          toggleActions: 'play reverse play reverse',
        },
      },
    );

    return () => {
      cardAnimation.kill();
    };
  }, []);

  return (
    <div className="flex absolute justify-end items-end h-[100vh] w-full z-[100]">
      <div
        ref={cardRef}
        className="  fixed  bg-zinc-200 text-white rounded-lg shadow-lg p-4 m-4 flex-col lowercase overflow-hidden"
      >
        <TextAnimation className=" relative font-semibold text-xs text-black " text={text} />
      </div>
    </div>
  );
};

export default Card;
