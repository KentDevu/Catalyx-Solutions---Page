"use client";

import { useEffect, useRef } from "react";

interface AnimatedGradientProps {
  colors?: string[];
  speed?: number;
}

export default function AnimatedGradient({
  colors = ["#0080FF", "#00C6FF", "#1e3a8a"],
  speed = 3,
}: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      time += 0.001 * speed;

      // Create gradient
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );

      // Animate gradient colors
      const offset1 = (Math.sin(time) + 1) / 2;
      const offset2 = (Math.cos(time * 0.7) + 1) / 2;
      const offset3 = (Math.sin(time * 0.5) + 1) / 2;

      gradient.addColorStop(0, `${colors[0]}${Math.floor(offset1 * 30 + 10).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(0.5, `${colors[1]}${Math.floor(offset2 * 30 + 10).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, `${colors[2]}${Math.floor(offset3 * 30 + 10).toString(16).padStart(2, '0')}`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.15 }}
    />
  );
}
