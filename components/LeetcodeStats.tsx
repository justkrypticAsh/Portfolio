"use client"

import { motion } from "framer-motion"
import { FaExternalLinkAlt, FaTerminal } from "react-icons/fa"

export default function LeetcodeStats() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header with Icon */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/20 mb-4">
            <FaTerminal className="text-yellow-500 text-xl" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter uppercase">
            Algorithmic Prowess
          </h2>
          <div className="h-1 w-12 bg-yellow-500 mt-2 rounded-full opacity-50" />
        </div>

        {/* The Card Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Background Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 md:p-10 overflow-hidden shadow-2xl">
            
            {/* Action Bar */}
            <div className="flex justify-between items-center mb-8 px-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <a 
                href="https://leetcode.com/itxashish_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-mono text-gray-500 hover:text-yellow-500 transition-colors uppercase tracking-widest"
              >
                View Profile <FaExternalLinkAlt size={10} />
              </a>
            </div>

            {/* The Image (Stats Card) */}
            <div className="flex justify-center overflow-x-auto no-scrollbar">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                // Maine activity card wala API use kiya hai kyunki wo zyada detailed hai
                src="https://leetcard.jacoblin.cool/itxashish_?theme=dark&font=Istok%20Web&ext=activity"
                alt="leetcode stats"
                className="min-w-[300px] md:min-w-[450px] rounded-lg"
              />
            </div>

            {/* Bottom Meta */}
            <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">Consistency</p>
                <p className="text-sm font-bold text-white">Daily Practice</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">Status</p>
                <p className="text-sm font-bold text-yellow-500">Active Solver</p>
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
          className="mt-12 text-center relative"
        >
          {/* Subtle Backglow for the text */}
          <div className="absolute inset-0 blur-2xl bg-yellow-500/10 rounded-full" />
          
          <p className="relative text-lg italic font-medium bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 text-transparent bg-clip-text shadow-[0_0_15px_rgba(252,211,77,0.3)]">
            "The best way to predict the future is to code it, one algorithm at a time."
          </p>
        </motion.div>
      </div>
    </section>
  )
}