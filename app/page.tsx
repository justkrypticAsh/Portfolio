"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import GithubStats from "@/components/GithubStats"
import ParticlesBackground from "@/components/ParticlesBackground"
import LiquidBackground from "@/components/LiquidBackground"
import LeetcodeStats from "@/components/LeetcodeStats"
import CodolioSection from "@/components/CodolioSection" // <--- Naya Import
import CursorGlow from "@/components/CursorGlow"
import Timeline from "@/components/Timeline"

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [section, setSection] = useState("about")

  useEffect(() => {
    setMounted(true)
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScroll(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <main className="bg-black text-white relative overflow-x-hidden">
      
      {/* SCROLL PROGRESS BAR */}
      <div style={{ width: `${scroll}%` }} className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-[110] transition-all" />

      {/* BACKGROUNDS & AMBIENCE */}
      <div className="fixed inset-0 -z-20"><ParticlesBackground /></div>
      <div className="fixed inset-0 -z-30"><LiquidBackground /></div>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[200px] opacity-20"></div>
      </div>

      <CursorGlow />
      
      {/* NAVBAR WITH PROPS */}
      <Navbar activeSection={section} setSection={setSection} />
      
      <Hero />

      {/* SECTION TOGGLE ANCHOR */}
      <div id="main-content" className="flex justify-center gap-6 my-24 relative z-10">
        {["about", "projects"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSection(tab)}
            className={`px-10 py-3 rounded-full border-2 transition-all duration-500 uppercase text-[10px] font-bold tracking-[0.2em] ${
              section === tab 
              ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-105" 
              : "text-gray-500 border-white/10 hover:border-white/40 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* DYNAMIC CONTENT AREA */}
      <div className="relative z-10 min-h-[600px]">
        <AnimatePresence mode="wait">
          {section === "about" && (
            <motion.section 
              key="about-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto pb-32 px-6"
            >
              <div className="grid md:grid-cols-4 gap-4">
                {/* BIO CARD */}
                <div className="md:col-span-3 bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl text-left">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-600/10 blur-3xl rounded-full"></div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></span>
                    Engineering Profile
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                    I am a <span className="text-white font-semibold">Software Engineer</span> focused on building robust backend systems and fluid user interfaces. Currently pursuing my CS degree, I bridge the gap between <span className="text-purple-400">complex Java logic</span> and <span className="text-blue-400">modern web experiences</span>. My approach is data-driven, maintaining a high academic standard while shipping functional code.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-3">
                    {["Problem Solving", "Scalable Design", "Clean Code", "Backend Architecture"].map(tag => (
                      <span key={tag} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-gray-400 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* CGPA CARD */}
                <div className="md:col-span-1 bg-gradient-to-b from-[#111] to-black border border-white[0.15] p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center group hover:border-purple-500/50 transition-colors">
                  <p className="text-gray-500 uppercase text-[10px] tracking-[0.3em] mb-2">Current CGPA</p>
                  <h3 className="text-7xl font-black bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text group-hover:from-purple-400 group-hover:to-white transition-all duration-700">9.29</h3>
                  <div className="mt-4 w-12 h-1 bg-purple-500 rounded-full"></div>
                </div>

                {/* WEB STACK */}
                <div className="md:col-span-2 bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem] text-left">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    Modern Web Stack
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[{n:"Next.js 15", l:"Intermediate"}, {n:"React", l:"Intermediate"}, {n:"Tailwind CSS", l:"Beginner"}, {n:"Framer Motion", l:"Beginner"}].map(t => (
                      <div key={t.n} className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors"><p className="text-white text-sm font-bold">{t.n}</p><p className="text-[10px] text-blue-400 font-mono mt-1 uppercase tracking-tighter">{t.l}</p></div>
                    ))}
                  </div>
                </div>

                {/* CORE PROGRAMMING */}
                <div className="md:col-span-2 bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem] text-left">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">Core Programming</h3>
                  <div className="space-y-6">
                    {[{n:"Java / Spring", v:90}, {n:"C Language", v:80}, {n:"SQL / DB Design", v:75}, {n:"Data Structures", v:85}].map(s => (
                      <div key={s.n}>
                        <div className="flex justify-between text-[10px] mb-2 font-mono text-gray-400 uppercase tracking-widest"><span>{s.n}</span><span>{s.v}%</span></div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden"><motion.div initial={{width:0}} whileInView={{width:`${s.v}%`}} transition={{duration:1, ease:"easeOut"}} className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"/></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {section === "projects" && (
            <motion.div 
              key="projects-section" 
              initial={{ opacity: 0, scale: 0.98 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.98 }} 
              transition={{ duration: 0.4 }}
            >
              <Projects />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* JOURNEY SECTION */}
      <section id="journey" className="py-32 relative bg-black/50 backdrop-blur-3xl border-y border-white/5">
        <div className="text-center mb-24">
          <span className="text-purple-500 text-[10px] font-bold tracking-[0.5em] uppercase">The Roadmap</span>
          <h2 className="text-5xl font-black uppercase tracking-tighter mt-4">My Journey</h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full" />
        </div>
        <Timeline />
      </section>

      {/* STATS SECTION */}
      <section id="stats" className="py-32 space-y-40">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal}>
          <GithubStats />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal}>
          <LeetcodeStats />
        </motion.div>

        {/* CODOLIO SECTION - Added Professionally here */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal}>
          <CodolioSection />
        </motion.div>
      </section>

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <footer className="py-16 text-center border-t border-white/5 bg-[#050505]">
        <div className="flex justify-center gap-8 mb-8 text-gray-500 text-xs font-bold tracking-[0.3em] uppercase">
          <a href="#about" onClick={() => setSection("about")} className="hover:text-white transition-colors">About</a>
          <a href="#projects" onClick={() => setSection("projects")} className="hover:text-white transition-colors">Projects</a>
          <a href="#journey" className="hover:text-white transition-colors">Journey</a>
        </div>
        <p className="text-gray-600 text-[10px] tracking-[0.4em] uppercase">
          © 2026 Ashish Kumar Sharma • All Rights Reserved
        </p>
      </footer>
    </main>
  )
}