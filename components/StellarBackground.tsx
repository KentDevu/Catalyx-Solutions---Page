"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useVelocity, useSpring } from "framer-motion";
import Particles from "./Particles";

export default function StellarBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    console.log('[StellarBg] Component mounted, setting up scroll listener');
    
    let rafId: number;
    let lastScrollY = window.scrollY;
    let targetY = 0;
    let currentY = 0;

    const updateParticles = () => {
      const currentScrollY = window.scrollY;
      const deltaScroll = currentScrollY - lastScrollY;
      
      // When scrolling DOWN (deltaScroll > 0), particles move UP (negative y)
      // When scrolling UP (deltaScroll < 0), particles move DOWN (positive y)
      // Opposite direction of scroll
      targetY += -deltaScroll * 0.002; // Invert scroll direction
      
      // Smoothly interpolate current position towards target
      currentY += (targetY - currentY) * 0.1;
      
      // Decay target back to 0 when not scrolling (particles return to center)
      targetY *= 0.95;
      
      // Update position (only Y axis, no X movement)
      scrollPositionRef.current = {
        x: 0,
        y: currentY
      };
      
      // Log when scrolling
      if (Math.abs(deltaScroll) > 0) {
        console.log('[StellarBg] Scroll delta:', deltaScroll.toFixed(0), 'Target Y:', targetY.toFixed(3), 'Current Y:', currentY.toFixed(3));
      }
      
      lastScrollY = currentScrollY;
      rafId = requestAnimationFrame(updateParticles);
    };

    rafId = requestAnimationFrame(updateParticles);

    return () => {
      console.log('[StellarBg] Component unmounting');
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      {/* Particles with scroll-based circular motion */}
      <div ref={particlesRef} style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1
      }}>
        <ScrollParticles scrollPositionRef={scrollPositionRef} />
      </div>
    </div>
  );
}

// Simple wrapper that passes the ref through
function ScrollParticles({ scrollPositionRef }: { scrollPositionRef: React.RefObject<{ x: number; y: number }> }) {
  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 1
    }}>
      <Particles
        particleColors={['#00C6FF', '#7B2FF7', '#FF6B6B', '#00E5FF', '#9D5CFF']}
        particleCount={500}
        particleSpread={15}
        speed={0.2}
        particleBaseSize={200}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
        sizeRandomness={0.5}
        cameraDistance={12}
        scrollPositionRef={scrollPositionRef}
        className="particles-bg"
      />
    </div>
  );
}
