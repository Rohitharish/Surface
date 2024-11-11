'use client';
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

function CanvasComponent() {
  return (
    <Canvas
      style={{
        position: 'sticky',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        top: '0%',
      }}
    >
      <Scene />
    </Canvas>
  );
}

export default CanvasComponent;
