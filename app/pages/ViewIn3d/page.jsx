'use client';
import LargeScreen from '@/app/Components/3D/LargeScreen';
import SmallScreen from '@/app/Components/3D/SmallScreen';
import { ReactLenis } from 'lenis/react';

import React, { useEffect, useState } from 'react';

function ViewIn3d() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <ReactLenis root>{isLargeScreen ? <LargeScreen /> : <SmallScreen />}</ReactLenis>;
}

export default ViewIn3d;
