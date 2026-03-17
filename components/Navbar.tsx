"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

interface NavbarProps {
  activeSection: string;
  setSection: (section: string) => void;
}

export default function Navbar({ activeSection, setSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  const handleNavClick = (id: string) => {
    setSection(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const targetId = (id === "about" || id === "projects") ? "main-content" : id;
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "py-4 bg-background/80 backdrop-blur-md" : "py-8 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* --- LOGO --- */}
        <motion.div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer font-black text-xl tracking-tighter text-foreground uppercase group"
        >
          ASHISH<span className="text-purple-500">.</span>
        </motion.div>

        {/* --- MINIMALIST NAV --- */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            {["home", "about", "projects", "journey"].map((id) => (
              <button 
                key={id} 
                onClick={() => handleNavClick(id)} 
                className="relative py-1 group"
              >
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                  activeSection === id ? "text-foreground" : "text-zinc-500 hover:text-foreground/80"
                }`}>
                  {id}
                </span>
                
                {/* PRECISE PURPLE LINE INDICATOR */}
                {activeSection === id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-purple-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* THEME TOGGLE */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="ml-4 p-2 transition-transform hover:scale-110"
          >
            {isDark ? (
              <Sun size={14} className="text-yellow-500" />
            ) : (
              <Moon size={14} className="text-foreground" />
            )}
          </button>
        </div>

        {/* --- LET'S TALK --- */}
        <motion.button 
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden md:block px-8 py-3 bg-foreground text-background text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all shadow-lg hover:shadow-purple-500/10"
        >
          Let's Talk
        </motion.button>

      </div>
    </nav>
  )
}