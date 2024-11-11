import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model() {
  const { scene } = useGLTF('/Model.glb'); // Ensure the path is correct

  return <primitive object={scene} />;
}

useGLTF.preload('/Model.glb');
