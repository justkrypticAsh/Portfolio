"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    // 40 random particles generate ho rahe hain
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-zinc-400 dark:bg-zinc-600 rounded-full"
          initial={{ x: `${p.x}%`, y: `${p.y}%`, opacity: 0.2 }}
          animate={{
            y: [`${p.y}%`, `${p.y - 5}%`, `${p.y}%`],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* SVG Connections - Ek subtle tech feel ke liye lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.1]">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-500" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}