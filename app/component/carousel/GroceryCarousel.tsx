"use client";
import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import GroceryModel from './GroceryModel';
import { Col, Row, Container } from "react-bootstrap";
import Navigation from "../navigation/navigation";

export default function GroceryCarousel() {
  const [index, setIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<null|number>(null);
  const mouse = useRef([0, 0]);

  // Added 'textColor' property to each slide for direct control
  const slides = [
    { label: "FRUIT", sub: 'Fresh & Healthy', color: "pastel-yellow", textColor: "#111" },
    { label: "COOKING OILS", sub: 'Pure & Natural', color: "pastel-blue", textColor: "#fff" },
    { label: "GRAINS", sub: 'Energy Packed', color: "pastel-red", textColor: "#111" },
    { label: "PROCESSED FOODS", sub: 'Ready To Enjoy', color: "pastel-green", textColor: "#fff" },
  ];

  const activeTextColor = slides[index].textColor;

  const handleNext = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="main-layout" onMouseMove={(e) => {
        mouse.current = [(e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1];
    }}>
      <style jsx global>{`
        .main-layout { 
          position: relative; width: 100vw; height: 100vh; overflow: hidden; background: #000;
          font-family: 'Arial Black', sans-serif;
        }
        .nav-wrapper {
          position: absolute; top: 0; left: 0; width: 100%; z-index: 999; 
          transition: color 0.6s ease; 
        }
        .nav-wrapper .nav-link, 
        .nav-wrapper .navbar-brand,
        .nav-wrapper .navbar-toggler-icon { 
          color: inherit !important; 
        }
        .nav-wrapper .navbar-toggler { border-color: currentColor; }

        .background-container { position: absolute; inset: 0; z-index: 0; }
        .bg-layer { position: absolute; inset: 0; clip-path: circle(0% at 50% 50%); }
        .bg-layer.active { z-index: 2; animation: reveal 1s ease forwards; }
        .bg-layer.previous { z-index: 1; clip-path: circle(150% at 50% 50%); }

        @keyframes reveal {
          from { clip-path: circle(0% at 50% 50%); }
          to   { clip-path: circle(150% at 50% 50%); }
        }

        .content-overlay { position: relative; z-index: 10; pointer-events: none; }
        .content-row { height: 100vh; margin: 0; }
        .text-section { display: flex; flex-direction: column; justify-content: center; padding-left: 8%; height: 100vh; transition: color 0.6s ease; }
        .canvas-col { height: 100vh; pointer-events: none; }
        
        .label-text { font-size: clamp(2.5rem, 7vw, 9rem); line-height: 0.85; font-weight: 900; margin: 0; letter-spacing: -6px; text-transform: uppercase; pointer-events: auto; }
        .sub-text { font-size: 1rem; margin-bottom: 10px; display: block; font-weight: bold; opacity: 0.8; pointer-events: auto; }

        .pastel-yellow { background-color: #fde68a; }
        .pastel-red { background-color: #fca5a5; }
        .pastel-blue { background-color: #93c5fd; }
        .pastel-green { background-color: #86efac; }

        .nav-btn { 
            position: absolute; bottom: 40px; padding: 12px 28px; background: rgba(255,255,255,0.1); 
            border: 2px solid currentColor; color: inherit; border-radius: 50px; cursor: pointer; 
            z-index: 100; backdrop-filter: blur(10px); font-weight: bold; transition: all 0.6s ease; pointer-events: auto; 
        }

        @media (max-width: 768px) {
          .text-section { height: 40vh; padding-left: 0; align-items: center; text-align: center; }
          .canvas-col { height: 60vh; }
        }
      `}</style>

      <div className="nav-wrapper" style={{ color: activeTextColor }}>
         <Navigation color={activeTextColor} />
      </div>

      <div className="background-container">
        {slides.map((slide, i) => (
          <div key={i} className={`bg-layer ${slide.color} ${i === index ? 'active' : ''} ${i === prevIndex ? 'previous' : ''}`} />
        ))}
      </div>

      <Container fluid className="content-overlay">
        <Row className="content-row g-0">
          <Col xs={12} md={6} className="text-section" style={{ color: activeTextColor }}>
            <span className="sub-text">{slides[index].sub}</span>
            <h1 className="label-text">{slides[index].label}</h1>
          </Col>

          <Col xs={12} md={6} className="canvas-col">
            <Canvas camera={{ position: [0, 0, 60], fov: 35 }} dpr={[1, 2]} style={{ width: '100%', height: '100%' }}>
              <Environment preset="apartment" /> 
              <ambientLight intensity={0.8} />
              <directionalLight position={[0, 20, 10]} intensity={1.5} />
              <group position={[0, 0, 0]}>
                <GroceryModel mouse={mouse} />
                <ContactShadows position={[0, -10, 0]} opacity={0.7} scale={35} blur={2.5} far={15} color="#000000" />
              </group>
            </Canvas>
          </Col>
        </Row>
      </Container>

      <button className="nav-btn" style={{ left: "40px", color: activeTextColor }} onClick={handlePrev}>PREVIOUS</button>
      <button className="nav-btn" style={{ right: "40px", color: activeTextColor }} onClick={handleNext}>NEXT</button>
    </div>
  );
}