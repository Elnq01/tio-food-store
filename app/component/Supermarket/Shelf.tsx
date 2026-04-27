"use client"
import { useGLTF, Html } from "@react-three/drei"

export default function Shelf({ position, rotation }) {
  const { scene } = useGLTF("/shelf.glb")
  const clonedScene = scene.clone()

  return (
    <group position={position} rotation={rotation} scale={3.5}>
      <primitive object={clonedScene} />

      {/* 1. X: If the shelf is long, move this to -0.5 or 0.5 to align with products.
          2. Y: Height of the specific shelf plank.
          3. Z: "Depth". Reduce this (e.g., 0.1 or 0.2) to bring it closer to the shelf back.
      */}
      
      {/* Top Shelf Label */}
      <Html 
        position={[-0.5, 2, 1]} // Adjusted Z to be much shallower
        transform 
        rotation={[0, 0, 0]} // Keep it flat against the shelf face
      >
        <div style={{ 
          background: 'white', 
          padding: '4px 12px', 
          borderRadius: '2px', 
          fontSize: '12px', 
          color: 'black',
          border: '1px solid #ccc',
          boxShadow: '1px 1px 3px rgba(0,0,0,0.2)' 
        }}>
            RICE
        </div>
      </Html>
      
      {/* Bottom Shelf Label */}
      <Html 
        position={[0.2, 0.45, 0.15]} 
        transform
      >
        <div style={{ 
          background: 'white', 
          padding: '4px 12px', 
          borderRadius: '2px', 
          fontSize: '12px', 
          color: 'black',
          border: '1px solid #ccc'
        }}>
            OIL
        </div>
      </Html>
    </group>
  )
}