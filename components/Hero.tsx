"use client"

import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Hero() {
  const myName = "Ashish Kumar Sharma";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0a0a0a]">
      
      {/* Name Container - Entry Smooth & Slow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.8, // Slow fade in
          ease: "easeOut",
          delay: 0.2 
        }}
        className="relative z-10"
      >
        <h1 
          className="glitch-text text-6xl md:text-7xl font-black tracking-tighter uppercase cursor-default select-none"
          data-text={myName}
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            {myName}
          </span>
        </h1>
      </motion.div>

      {/* Subtitle - Professional delay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }} // Smooth entry
        className="relative z-20"
      >
        <p className="text-gray-400 mt-6 text-xl font-mono">
          <Typewriter
            words={[
              "Java Developer",
              "DSA Enthusiast",
              "Software Engineer",
              "Problem Solver"
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
          />
        </p>
      </motion.div>

      {/* SOCIAL LINKS - Fixed Z-index for clicks */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }} // Slowing down entry
        className="flex gap-8 mt-10 text-3xl relative z-30"
      >
        <a
          href="https://github.com/justkrypticAsh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/ashish-kumar-sharma-5bb0b0310/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 cursor-pointer"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      {/* RESUME BUTTON - Fixed Z-index */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="relative z-30"
      >
        <a
          href="/resume.pdf"
          download
          className="mt-12 inline-block px-8 py-3 border-2 border-white/10 rounded-full text-white font-medium tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer"
        >
          DOWNLOAD RESUME
        </a>
      </motion.div>

    </section>
  )
}