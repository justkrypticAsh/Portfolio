"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaExternalLinkAlt, FaTerminal } from "react-icons/fa"

export default function LeetcodeStats() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDarkMode = resolvedTheme === "dark"
  // Dynamic API URL based on theme
  const leetcardUrl = `https://leetcard.jacoblin.cool/itxashish_?theme=${isDarkMode ? "dark" : "light"}&font=Istok%20Web&ext=activity`

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header with Icon */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/20 mb-4 transition-colors">
            <FaTerminal className="text-yellow-600 dark:text-yellow-500 text-xl" />
          </div>
          <h2 className="text-3xl font-black tracking-tighter uppercase text-foreground">
            Algorithmic Process
          </h2>
          <div className="h-1.5 w-12 bg-yellow-500 mt-2 rounded-full opacity-60" />
        </div>

        {/* The Card Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Background Glow Effect - Adjusted for light mode visibility */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-[2.5rem] blur opacity-5 dark:opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
          
          {/* THE GLASS CARD: No fixed black background */}
          <div className="relative bg-foreground/[0.03] dark:bg-white/[0.02] backdrop-blur-2xl border border-foreground/10 dark:border-white/10 rounded-[2.5rem] p-6 md:p-10 overflow-hidden shadow-2xl transition-all">
            
            {/* Action Bar */}
            <div className="flex justify-between items-center mb-8 px-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <a 
                href="https://leetcode.com/itxashish_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-mono text-foreground/50 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors uppercase tracking-widest"
              >
                View Profile <FaExternalLinkAlt size={10} />
              </a>
            </div>

            {/* The Image (Stats Card) */}
            <div className="flex justify-center overflow-x-auto no-scrollbar">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={leetcardUrl}
                alt="leetcode stats"
                className="min-w-[300px] md:min-w-[500px] rounded-2xl transition-all"
              />
            </div>

            {/* Bottom Meta */}
            <div className="mt-10 pt-6 border-t border-foreground/5 dark:border-white/5 flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <p className="text-[10px] text-foreground/50 uppercase tracking-[0.2em] mb-1">Consistency</p>
                <p className="text-sm font-black text-foreground">Daily Practice</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-foreground/50 uppercase tracking-[0.2em] mb-1">Status</p>
                <p className="text-sm font-black text-yellow-600 dark:text-yellow-500">Active Solver</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* --- THE GLOWY QUOTE --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center relative px-4"
        >
          <div className="absolute inset-0 blur-3xl bg-yellow-500/10 dark:bg-yellow-500/5 rounded-full" />
          
          <p className="relative text-lg md:text-xl italic font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight">
            "The best way to predict the future is to <span className="text-yellow-600 dark:text-yellow-400">code it</span>, one algorithm at a time."
          </p>
        </motion.div>
      </div>
    </section>
  )
}