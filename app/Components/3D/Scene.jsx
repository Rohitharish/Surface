'use client';

import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { Environment, Html, PerspectiveCamera, useThree } from '@react-three/drei';
import Model from './Model';

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const meshRef = useRef(null);
  const Ref = useRef(null);

  useEffect(() => {
    const ContainerRef = Ref.current;
    const mesh = meshRef.current;

    gsap.set(mesh.position, { x: 0, y: 0, z: 4.6 });
    gsap.set(mesh.rotation, { x: 0, y: 0, z: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ContainerRef,
        start: '20%',
        end: '85%',
        scrub: true,
       
      },
    });
    //  first section
    tl.to(mesh.position, {
      z: 4.75,
    });
    tl.to(
      mesh.rotation,
      {
        y: Math.PI / 2,
      },
      '<',
    );

    //  second section
    tl.to(mesh.position, {
      z: 4.75,
      x: -0.1,
      y: 0.02,
    });
    tl.to(
      mesh.rotation,
      {
        y: Math.PI / -4,
        z: Math.PI / 4,
      },
      '<',
    );
    //  third section
    tl.to(mesh.rotation, {
      z: 0,
    });
    tl.to(
      mesh.position,
      {
        x: 0.02,
        y: 0.02,
        z: 4.77,
      },
      '<',
    );
    //  fourth section
    tl.to(mesh.rotation, {
      y: Math.PI / 2,
      x: Math.PI / -8,
    });
    tl.to(
      mesh.position,
      {
        x: 0.02,
        y: 0.05,
        z: 4.77,
      },
      '<',
    );
    //  fifth section
    tl.to(mesh.rotation, {
      y: Math.PI,
      x: Math.PI / 8,
    });
    tl.to(
      mesh.position,
      {
        x: 0,
        y: 0,
        z: 4.6,
      },
      '<',
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Html>
        <div className="relative h-[100vh] w-full" ref={Ref}></div>
      </Html>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={60} />
      <directionalLight position={[-5, -5, 5]} intensity={1} castShadow />

      <group ref={meshRef} scale={[1, 1, 1]}>
        <ambientLight intensity={0.01} />
        <pointLight position={[3, 3, 3]} />
        <Environment preset="studio" />

        <Model />
        {/* <axesHelper args={[5]} />
        <gridHelper args={[10, 10]} /> */}
      </group>
    </>
  );
}
