import { useScroll } from 'framer-motion';

import React, { useRef } from 'react';
import Word from './Word';

export default function Paragraph({ paragraph, index }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'start 0.25'],
  });

  const words = paragraph.split(' ');
  // heelo world
  return (
    <p key={index} ref={container} className="paragraph">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
