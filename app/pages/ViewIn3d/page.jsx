'use client';

import React, { useEffect, useState } from 'react';

import SmallScreen from './SmallScreen';
import LargeScreen from './LargeScreen';

function About() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{isLargeScreen ? <LargeScreen /> : <SmallScreen />}</>;
}

export default About;
