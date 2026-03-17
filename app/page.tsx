"use client"

import { useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import GithubStats from "@/components/GithubStats"
import LeetcodeStats from "@/components/LeetcodeStats"
import CodolioSection from "@/components/CodolioSection"
import CursorGlow from "@/components/CursorGlow"
import Timeline from "@/components/Timeline"
import AbstractCanvas from "@/components/AbstractCanvas" 
import Skills from "@/components/Skills"

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] as const // <--- Bas ye "as const" add kar do
    } 
  }
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [section, setSection] = useState("home") // Start with home
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
    document.documentElement.style.scrollBehavior = "smooth"

    // --- AUTO DETECT SECTION ON SCROLL ---
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.1
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          if (id === "hero") setSection("home")
          if (id === "journey") setSection("journey")
          // Jab user main content area me ho, default to "about" visually
          if (id === "main-content" && section !== "projects") setSection("about")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const targets = ["hero", "main-content", "journey"]
    targets.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15
      const y = (e.clientY / window.innerHeight - 0.5) * 15
      setMousePos({ x, y })
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScroll(progress)

      // Fallback: Agar observer miss kar jaye
      if (window.scrollY > window.innerHeight * 0.4 && section === "home") {
        setSection("about")
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [section])

  if (!mounted) return null

  return (
    <main className="relative overflow-x-hidden min-h-screen transition-colors duration-500 bg-background text-foreground selection:bg-purple-500/30">
      
      <div style={{ width: `${scroll}%` }} className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-[110] transition-all duration-300" />

      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className={`absolute inset-0 z-30 transition-opacity duration-1000 ease-in-out transform-gpu ${scroll > 5 ? 'opacity-35' : 'opacity-100'}`}>
          <AbstractCanvas />
        </div>

        <motion.div 
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute inset-0 z-10 will-change-transform"
        >
          <img 
            src="/bg1.png" 
            className="absolute inset-0 w-full h-full object-cover" 
            style={{ 
              opacity: 0.1, 
              filter: 'grayscale(100%) brightness(0.8)' 
            }} 
            alt="coding-texture"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background z-20 transition-colors duration-500" />
      </div>

      <div className="relative z-50">
        <CursorGlow />
        <Navbar activeSection={section} setSection={setSection} />
        
        <section id="hero">
          <Hero />
        </section>

        {/* --- TABS SECTION --- */}
        <div id="main-content" className="flex justify-center gap-6 my-24 relative z-10">
          {["about", "projects"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSection(tab)}
              className={`px-10 py-3 rounded-full border-2 transition-all duration-500 uppercase text-[10px] font-black tracking-[0.2em] active:scale-95 will-change-transform ${
                section === tab 
                ? "bg-foreground text-background border-foreground shadow-xl scale-105" 
                : "text-zinc-500 border-foreground/10 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* DYNAMIC CONTENT */}
        <div className="relative z-10 min-h-[600px]">
          <AnimatePresence mode="wait">
            {/* Logic Fix: Show About content if section is 'about' OR user is still at 'home' but scrolled down */}
            {(section === "about" || section === "home") && (
              <motion.section 
                key="about-section"
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-6xl mx-auto pb-32 px-6"
              >
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  <div className="md:col-span-3 bg-foreground/[0.03] dark:bg-white/[0.02] backdrop-blur-2xl border border-foreground/10 rounded-[2.5rem] p-10 relative overflow-hidden group shadow-xl will-change-transform transition-colors duration-500">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-600/10 blur-3xl rounded-full group-hover:bg-purple-600/20 transition-colors duration-700"></div>
                    <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-foreground tracking-tighter uppercase">
                      <span className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></span>
                      Engineering Profile
                    </h2>
                    <p className="text-zinc-800 dark:text-zinc-400 text-lg leading-relaxed max-w-3xl font-medium dark:font-normal transition-colors">
                      I am a <span className="text-foreground font-black">Software Engineer</span> focused on building robust backend systems and fluid user interfaces. Currently pursuing my CS degree, I bridge the gap between <span className="text-purple-600 dark:text-purple-400 font-bold">complex Java logic</span> and <span className="text-blue-600 dark:text-blue-400 font-bold">modern web experiences</span>.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-3">
                      {["Problem Solving", "Scalable Design", "Clean Code", "Backend Architecture"].map(tag => (
                        <span key={tag} className="px-5 py-2 bg-foreground/5 border border-foreground/5 rounded-full text-[10px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest hover:bg-foreground/10 transition-colors">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-1 bg-foreground/[0.03] dark:bg-white/[0.02] backdrop-blur-2xl border border-foreground/10 rounded-[2.5rem] flex flex-col justify-center items-center text-center group hover:border-purple-500/50 shadow-xl transition-all will-change-transform">
                    <p className="text-zinc-500 uppercase text-[10px] font-black tracking-[0.3em] mb-2">Current CGPA</p>
                    <h3 className="text-7xl font-black text-foreground transition-all duration-700 group-hover:text-purple-600 dark:group-hover:text-purple-400">9.29</h3>
                    <div className="mt-4 w-12 h-1 bg-purple-500 rounded-full" />
                  </div>

                  <div className="md:col-span-2 bg-foreground/[0.03] dark:bg-white/[0.02] backdrop-blur-2xl border border-foreground/10 rounded-[2.5rem] p-10 text-left shadow-xl transition-all will-change-transform">
                    <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                      Modern Web Stack
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[{n:"Next.js 15", l:"Intermediate"}, {n:"React", l:"Intermediate"}, {n:"Tailwind CSS", l:"Beginner"}, {n:"Framer Motion", l:"Beginner"}].map(t => (
                        <div key={t.n} className="p-4 bg-foreground/5 dark:bg-white/5 border border-foreground/5 rounded-2xl hover:bg-foreground/10 transition-all">
                            <p className="text-foreground text-sm font-black">{t.n}</p>
                            <p className="text-[10px] text-blue-600 dark:text-blue-400 font-bold mt-1 uppercase tracking-tighter">{t.l}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2 bg-foreground/[0.03] dark:bg-white/[0.02] backdrop-blur-2xl border border-foreground/10 rounded-[2.5rem] p-10 text-left shadow-xl transition-all will-change-transform">
                    <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-8">Core Programming</h3>
                    <div className="space-y-6">
                      {[{n:"Java / Spring", v:90}, {n:"C Language", v:80}, {n:"SQL / DB Design", v:75}, {n:"Data Structures", v:85}].map(s => (
                        <div key={s.n}>
                          <div className="flex justify-between text-[10px] mb-2 font-bold text-zinc-500 uppercase tracking-widest">
                            <span>{s.n}</span>
                            <span className="text-foreground">{s.v}%</span>
                          </div>
                          <div className="h-2 w-full bg-foreground/10 dark:bg-white/5 rounded-full overflow-hidden transition-colors">
                            <motion.div initial={{width:0}} whileInView={{width:`${s.v}%`}} transition={{duration:1, ease:"easeOut"}} className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.3)]"/>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Skills />
                </motion.div>
              </motion.section>
            )}

            {section === "projects" && (
              <motion.div 
                key="projects-section" 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 1.05, y: -20 }} 
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Projects />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <section id="journey" className="py-32 relative bg-background/50 backdrop-blur-3xl border-y border-foreground/10 transition-colors">
          <div className="text-center mb-24 px-6">
            <span className="text-purple-600 dark:text-purple-500 text-[10px] font-black tracking-[0.5em] uppercase">The Roadmap</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mt-4 text-foreground transition-colors">My Journey</h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full" />
          </div>
          <Timeline />
        </section>

        <section id="stats" className="py-32 space-y-40 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionReveal}>
            <GithubStats />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionReveal}>
            <LeetcodeStats />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionReveal}>
            <CodolioSection />
          </motion.div>
        </section>

        <Contact />

        <footer className="py-16 text-center border-t border-foreground/10 bg-background transition-colors">
          
          <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase font-bold">
            © 2026 Ashish Kumar Sharma • All Rights Reserved
          </p>
        </footer>
      </div>
    </main>
  )
}