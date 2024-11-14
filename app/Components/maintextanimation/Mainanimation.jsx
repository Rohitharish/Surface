'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Mainanimation = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll('span');

    gsap.set(words, { opacity: 0, scale: 0, rotate: 2 });

    const animation = gsap.to(words, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.05,
      rotate: 0,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 90%',
        end: 'bottom 20%',
        scrub: true, 
        onEnter: () => gsap.to(words, { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }),
        onLeave: () => gsap.to(words, { opacity: 0, scale: 0.8, duration: 0.8, ease: 'power3.in' }),
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div ref={textRef} className={` ${className}`}>
      {text.split(' ').map((word, index) => (
        <span className="inline-block overflow-hidden" key={index}>
          <span className="inline-block mr-2">{word}</span>
        </span>
      ))}
    </div>
  );
};

export default Mainanimation;
