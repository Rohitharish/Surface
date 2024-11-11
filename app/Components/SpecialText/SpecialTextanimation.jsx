'use client';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const SpecialTextanimation = ({ text, className, specialWords = [] }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll('span.normal-word');
    const specialWordElements = textRef.current.querySelectorAll('span.special-word');

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
      },
    });

    gsap.set(specialWordElements, { opacity: 0, color: 'black', filter: 'blur(2px)' });
    const specialAnimation = gsap.to(specialWordElements, {
      opacity: 1,

      duration: 2,
      ease: 'power3.out',
      stagger: 1,
      filter: 'blur(0px)',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
      },
    });

    return () => {
      normalAnimation.kill();
      specialAnimation.kill();
    };
  }, []);

  return (
    <div ref={textRef} className={className}>
      {text.split(' ').map((word, index) => {
        const isSpecialWord = specialWords.includes(word);

        return (
          <span key={index} className="inline-block overflow-hidden">
            <span className={`inline-block mr-2 ${isSpecialWord ? 'special-word' : 'normal-word'}`}>
              {word}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default SpecialTextanimation;
