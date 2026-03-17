"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaTimes, FaCalendarAlt, FaCode, FaArrowRight } from "react-icons/fa"

interface Project {
  id: number;
  name: string;
  date: string;
  desc: string;
  longDesc: string;
  img: string;
  tech: string[];
  repo: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      name: "Smart Expense Tracker",
      date: "June 2025",
      desc: "Java desktop application for tracking expenses.",
      longDesc: "A comprehensive financial solution designed to help users monitor their spending habits. It features automated expense categorization, monthly budget alerts, and data visualization.",
      img: "/Project1.png",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      repo: "https://github.com/justkrypticAsh/Smart-Expense-And-Budget-Tracker"
    },
    {
      id: 2,
      name: "PetVerse",
      date: "Dec 2025",
      desc: "Pet adoption web platform built using Java.",
      longDesc: "PetVerse is a full-stack platform that bridges the gap between pet owners and adoption services. It includes a community forum, health tracking logs, and a vet finder.",
      img: "/Project2.png",
      tech: ["Java", "Servlets", "JSP", "Hibernate", "Tailwind"],
      repo: "https://github.com/justkrypticAsh/PetVerse"
    }
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto pb-32 px-6 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-foreground">Featured Work</h2>
        <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full shadow-[0_0_15px_#a855f7]" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((p) => (
          <motion.div
            layoutId={`card-${p.id}`}
            key={p.id}
            onClick={() => setSelectedProject(p)}
            whileHover={{ y: -10 }}
            /* NO SOLID BG: Only transparency and heavy blur */
            className="group relative border border-foreground/10 dark:border-white/10 rounded-[2.5rem] overflow-hidden cursor-pointer bg-white/10 dark:bg-white/[0.02] backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/40 shadow-xl"
          >
            <div className="h-64 overflow-hidden relative">
              <motion.img
                layoutId={`img-${p.id}`}
                src={p.img}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent transition-colors" />
            </div>

            <div className="p-8">
              <motion.span layoutId={`date-${p.id}`} className="text-[10px] text-purple-600 dark:text-purple-400 font-black mb-3 block uppercase tracking-[0.3em]">
                {p.date}
              </motion.span>
              <motion.h3 layoutId={`title-${p.id}`} className="text-2xl font-black mb-3 text-foreground">
                {p.name}
              </motion.h3>
              {/* High Contrast Text for Light Mode */}
              <motion.p layoutId={`desc-${p.id}`} className="text-zinc-800 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-medium dark:font-normal">
                {p.desc}
              </motion.p>
              
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/60 group-hover:text-purple-600 transition-all">
                Learn More <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/20 dark:bg-black/60 backdrop-blur-xl cursor-zoom-out"
            />

            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-4xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-3xl border border-foreground/10 dark:border-white/10 rounded-[3rem] shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-foreground/50 hover:text-foreground z-30 bg-foreground/5 p-3 rounded-full transition-all"
              >
                <FaTimes size={18} />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto">
                <motion.img layoutId={`img-${selectedProject.id}`} src={selectedProject.img} className="w-full h-full object-cover" />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <motion.div layoutId={`date-${selectedProject.id}`} className="text-purple-600 dark:text-purple-400 font-black text-xs mb-6 uppercase tracking-widest">
                  <FaCalendarAlt /> {selectedProject.date}
                </motion.div>

                <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-4xl font-black uppercase mb-6 tracking-tighter text-foreground">
                  {selectedProject.name}
                </motion.h3>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="text-zinc-900 dark:text-zinc-300 text-sm leading-relaxed mb-8 font-semibold dark:font-normal">
                    {selectedProject.longDesc}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-foreground font-bold mb-4 text-xs uppercase tracking-widest">Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-4 py-1.5 bg-foreground/10 dark:bg-white/5 border border-foreground/5 rounded-lg text-[10px] font-bold text-foreground/80">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={selectedProject.repo}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-3 bg-foreground text-background w-full md:w-auto px-10 py-4 rounded-2xl font-black text-xs uppercase transition-all hover:bg-purple-600 hover:text-white"
                  >
                    <FaGithub size={18} /> View Source
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}