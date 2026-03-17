"use client"

import { motion } from "framer-motion"

export default function LiquidBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1: Purple Abstract */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] bg-purple-500/30 dark:bg-purple-600/20 blur-[100px] rounded-full -top-20 -left-20"
      />

      {/* Blob 2: Blue Abstract */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-600/15 blur-[120px] rounded-full -bottom-40 -right-20"
      />

      {/* Blob 3: Accent Glow */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/20 dark:bg-indigo-400/10 blur-[100px] rounded-full"
      />

      {/* Noise Texture Overlay - Isse professional feel aati hai */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  )
}