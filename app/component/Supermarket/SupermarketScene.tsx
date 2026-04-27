"use client"
import { Canvas } from "@react-three/fiber"
import CameraController from "./CameraController"
import Shelf from "./Shelf"

export default function SupermarketScene() {
  return (
    <div className="scroll-container" style={{ height: "400vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, width: "100%", height: "100vh" }}>
        <Canvas 
          // Keeping your preferred camera height, but the models will move down
          camera={{ position: [0, 2.5, 10], fov: 90 }} 
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={1.5} />
          <pointLight position={[0, 10, 5]} intensity={2} />

          {/* LOWERED THE Y POSITION TO -3 SO THE TOP FITS IN FRAME */}
          <Shelf position={[-5, -4, -1]} rotation={[0, -Math.PI / 2, 0]} />
          <Shelf position={[5, -4, -1]} rotation={[0, Math.PI / 2, 0]} />

          <CameraController />
        </Canvas>
      </div>
      
      <div style={{ height: "400vh" }} /> 
    </div>
  )
}