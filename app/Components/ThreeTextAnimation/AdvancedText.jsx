'use client';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AdvancedText = ({ text, className, AdvancedWords = [] }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll('span.normal-word');
    const AdvancedWordElements = textRef.current.querySelectorAll('span.Advanced');

    gsap.set(words, { opacity: 0 });
    const normalAnimation = gsap.to(words, {
      opacity: 1,
      color: 'gray',
      duration: 2,
      ease: 'power3.out',
      stagger: 0.1,
      rotate: 0,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
      },
    });

    gsap.set(AdvancedWordElements, { opacity: 0, color: 'white', filter: 'blur(2px)' });
    const AdvancedAnimation = gsap.to(AdvancedWordElements, {
      opacity: 1,

      duration: 4,
      ease: 'power3.out',
      stagger: 1,
      filter: 'blur(0px)',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
      },
    });

    return () => {
      normalAnimation.kill();
      AdvancedAnimation.kill();
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={`flex  items-center justify-center flex-row text-lg lg:text-3xl  ${className}`}
    >
      {text.split(' ').map((word, index) => {
        const isAdvancedWord = AdvancedWords.includes(word);

        return (
          <span key={index} className="inline-block overflow-hidden">
            <span className={`inline-block mr-2 ${isAdvancedWord ? 'Advanced' : 'normal-word'}`}>
              {word}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default AdvancedText;
