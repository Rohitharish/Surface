'use client';
import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model() {
  const { scene } = useGLTF('/Model/Model.glb');

  return <primitive object={scene} />;
}

useGLTF.preload('/Model/Model.glb');
