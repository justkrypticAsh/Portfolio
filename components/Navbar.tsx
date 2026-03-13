"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface NavbarProps {
  activeSection: string;
  setSection: (section: string) => void;
}

export default function Navbar({ activeSection, setSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Journey", id: "journey" },
    { name: "Contact", id: "contact" },
  ]

  const handleNavClick = (id: string) => {
    if (id === "about" || id === "projects") {
      // 1. Pehle section switch karo
      setSection(id)
      // 2. Phir us container tak scroll karo jahan about/projects dikhte hain
      const contentArea = document.getElementById("toggle-area")
      if (contentArea) {
        contentArea.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      // Journey aur Contact ke liye normal scroll
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-xl font-black tracking-tighter cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ASHISH<span className="text-purple-500">.</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="relative group"
            >
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                activeSection === link.id ? "text-white" : "text-gray-500 group-hover:text-white"
              }`}>
                {link.name}
              </span>
              {activeSection === link.id && (
                <motion.div 
                  layoutId="nav-glow"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-purple-500 shadow-[0_0_10px_#a855f7]"
                />
              )}
            </button>
          ))}
        </div>

        <button 
          onClick={() => handleNavClick('contact')}
          className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:invert transition-all active:scale-95"
        >
          Let's Talk
        </button>
      </div>
    </motion.nav>
  )
}