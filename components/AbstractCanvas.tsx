"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function AbstractCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let w: number, h: number
    let offset = 0
    const particles: { x: number; y: number; size: number; speed: number; opacity: number; color: string; flicker: number }[] = []

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      particles.length = 0
      const isDark = resolvedTheme === "dark"
      
      // Increased particle count for better shimmer
      for (let i = 0; i < 150; i++) { 
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 2 + 0.8, // Tiny sparkles
          speed: Math.random() * 0.4 + 0.1, // Slower floating
          opacity: Math.random() * 0.5 + 0.2, // Base opacity
          flicker: Math.random() * 0.1 + 0.05, // Flicker speed
          color: isDark ? "255, 255, 255" : "168, 85, 247" // Dynamic base color
        })
      }
    }

    // Function to draw complex shimmer spark shape
    const drawSparkle = (p: typeof particles[0]) => {
      const { x, y, size, opacity, color } = p;
      const alpha = Math.max(0, opacity);
      
      ctx.fillStyle = `rgba(${color}, ${alpha})`;

      // Create a small 4-pointed spark
      ctx.beginPath();
      ctx.moveTo(x, y - size); // Top point
      ctx.lineTo(x + size / 4, y - size / 4); // Top-right inner curve
      ctx.lineTo(x + size, y); // Right point
      ctx.lineTo(x + size / 4, y + size / 4); // Bottom-right inner curve
      ctx.lineTo(x, y + size); // Bottom point
      ctx.lineTo(x - size / 4, y + size / 4); // Bottom-left inner curve
      ctx.lineTo(x - size, y); // Left point
      ctx.lineTo(x - size / 4, y - size / 4); // Top-left inner curve
      ctx.closePath();
      ctx.fill();
    }

    const drawWave = (color: string, amplitude: number, frequency: number, shift: number, yPos: number) => {
      ctx.save()
      ctx.filter = "blur(70px)" // Apply blur ONLY to waves
      ctx.beginPath()
      ctx.moveTo(0, h)
      for (let i = 0; i <= w; i += 20) {
        const x = i
        const y = h * yPos + Math.sin(i * frequency + shift) * amplitude + Math.cos(i * 0.005 + shift * 0.4) * (amplitude * 0.5)
        ctx.lineTo(x, y)
      }
      ctx.lineTo(w, h)
      ctx.lineTo(0, h)
      ctx.fillStyle = color
      ctx.fill()
      ctx.restore()
    }

    const drawShimmer = () => {
      particles.forEach(p => {
        // Advanced flicker & fade logic
        p.opacity += (Math.random() - 0.5) * p.flicker * 2; 
        if (p.opacity < 0.1) p.opacity = 0.1;
        if (p.opacity > 0.8) p.opacity = 0.8;

        // Draw the spark
        drawSparkle(p);

        // Slow floating motion
        p.y -= p.speed;
        if (p.y < -p.size) p.y = h + p.size; // Wrap around
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, w, h)
      const isDark = resolvedTheme === "dark"
      
      // Order matters: Waves first, then Shimmer
      drawWave(isDark ? "rgba(168, 85, 247, 0.18)" : "rgba(168, 85, 247, 0.28)", 130, 0.002, offset * 0.012, 0.6)
      drawWave(isDark ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.22)", 150, 0.001, offset * 0.01, 0.7)
      
      drawShimmer()

      offset++
      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener("resize", resize)
    resize()
    render()
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [resolvedTheme])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none transition-colors duration-500" />
}