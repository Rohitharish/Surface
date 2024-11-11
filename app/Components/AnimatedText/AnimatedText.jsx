import React from 'react';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const defaultAnimations = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

export const Animatedsentence = ({ text, className }) => {
  const textArray = Array.isArray(text) ? text : [text];
  const refl = useRef(null);
  const isonview = useInView(refl, { amount: 0.5, once: true });

  return (
    <div className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={refl}
        initial="hidden"
        animate={isonview ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.6 }}
        aria-hidden
      >
        {textArray.map((line, index) => (
          <span className="block" key={index}>
            <motion.span className="inline-block" variants={defaultAnimations}>
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </div>
  );
};

const Word = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

export const Animatedword = ({ text, className, line }) => {
  const textArray = Array.isArray(text) ? text : [text];
  const refword = useRef(null);
  const isonviewword = useInView(refword, { amount: 0.5, once: true });

  return (
    <div className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={refword}
        initial="hidden"
        animate={isonviewword ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.3 }}
        aria-hidden
      >
        {textArray.map(line => (
          <span className="block">
            {line.split(' ').map(word => (
              <span className=" inline-block">
                <motion.span className="inline-block" variants={Word}>
                  {word}
                </motion.span>

                <span className=" inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </div>
  );
};
