"use client";
import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function GroceryModel({ mouse }) {
  const groupRef = useRef(null);
  const modelRef = useRef(null);
  const gltf = useLoader(GLTFLoader, "/groceries.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const isMobile = window.innerWidth < 768;

    if (modelRef.current) {
      modelRef.current.rotation.y += 0.008;
      modelRef.current.position.y = Math.sin(t * 1.5) * 1.2; 
      
      const s = 1 + Math.sin(t * 1.5) * 0.03;
      const baseScale = isMobile ? 18 : 22; 
      modelRef.current.scale.set(baseScale * s, baseScale * s, baseScale * s);
    }

    if (groupRef.current) {
      // Keep it centered in its half of the screen
      groupRef.current.position.x += (mouse.current[0] * 5 - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (mouse.current[1] * 2 - groupRef.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} ref={modelRef} />
    </group>
  );
}