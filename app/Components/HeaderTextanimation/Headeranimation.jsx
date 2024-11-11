'use client';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Headeranimation = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll('.letter');

    gsap.set(letters, { opacity: 0, xPercent: 100 });

    const animation = gsap.to(letters, {
      opacity: 1,
      xPercent: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.05,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div ref={textRef} className={className}>
      {text.split('').map((letter, index) => (
        <span key={index} className="letter inline-block  ">
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}

      <span className="bg-[#2D42FF] letter inline-block h-[10px] w-[40px] rounded-full"></span>
    </div>
  );
};

export default Headeranimation;
