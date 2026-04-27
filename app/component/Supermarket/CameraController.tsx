"use client"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function CameraController() {
  const { camera } = useThree()

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Stage 1: Scroll to Left Shelf (Face it head-on)
    tl.to(camera.position, { 
      x: -1.5, // Move camera closer to the left side
      y: 2.5, 
      z: 0,    // Move forward into the aisle
      ease: "power1.inOut" 
    })
    .to(camera.rotation, { 
      y: Math.PI / 2, // Rotate 90 degrees to face the left wall
      ease: "power1.inOut" 
    }, 0)
      
    // Stage 2: Scroll to Right Shelf (Face it head-on)
    .to(camera.position, { 
      x: 1.5,  // Move camera over to the right side
      y: 2.5, 
      z: 0, 
      ease: "power1.inOut" 
    })
    .to(camera.rotation, { 
      y: -Math.PI / 2, // Rotate 180 degrees to face the right wall
      ease: "power1.inOut" 
    }, ">") 

  }, [camera])

  return null
}