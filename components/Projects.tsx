"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaTimes, FaCalendarAlt, FaCode, FaArrowRight } from "react-icons/fa"

// TypeScript Interface - Isse error solve ho jayega
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
  // State ko bataya ki isme ya toh Project hoga ya null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      name: "Smart Expense Tracker",
      date: "June 2025",
      desc: "Java desktop application for tracking expenses.",
      longDesc: "A comprehensive financial solution designed to help users monitor their spending habits. It features automated expense categorization, monthly budget alerts, and data visualization. Built with a focus on high performance and secure user authentication using Java & MySQL.",
      img: "/Project1.png",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      repo: "https://github.com/justkrypticAsh/Smart-Expense-And-Budget-Tracker"
    },
    {
      id: 2,
      name: "PetVerse",
      date: "Dec 2025",
      desc: "Pet adoption web platform built using Java.",
      longDesc: "PetVerse is a full-stack platform that bridges the gap between pet owners and adoption services. It includes a community forum, health tracking logs, and a vet finder. The platform focuses on scalability and a user-friendly interface for pet lovers.",
      img: "/Project2.png",
      tech: ["Java", "Servlets", "JSP", "Hibernate", "Tailwind"],
      repo: "https://github.com/justkrypticAsh/PetVerse"
    }
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto pb-32 px-6 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Featured Work</h2>
        <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full shadow-[0_0_10px_#a855f7]" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((p) => (
          <motion.div
            layoutId={`card-${p.id}`}
            key={p.id}
            onClick={() => setSelectedProject(p)}
            whileHover={{ y: -10 }}
            className="group relative border border-white/5 rounded-[2.5rem] overflow-hidden cursor-pointer bg-[#0a0a0a] transition-all duration-500 hover:border-purple-500/30 shadow-2xl"
          >
            {/* Project Image Wrapper */}
            <div className="h-64 overflow-hidden relative">
              <motion.img
                layoutId={`img-${p.id}`}
                src={p.img}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-8">
              <motion.span layoutId={`date-${p.id}`} className="text-[10px] text-purple-500 font-bold mb-3 block uppercase tracking-[0.3em]">
                {p.date}
              </motion.span>
              <motion.h3 layoutId={`title-${p.id}`} className="text-2xl font-black mb-3 group-hover:text-purple-400 transition-colors">
                {p.name}
              </motion.h3>
              <motion.p layoutId={`desc-${p.id}`} className="text-gray-500 text-sm leading-relaxed mb-6">
                {p.desc}
              </motion.p>
              
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-all">
                Learn More <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-zoom-out"
            />

            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-4xl bg-[#0d0d0d] border border-white/10 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden z-10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white z-30 bg-white/5 p-3 rounded-full transition-all backdrop-blur-md"
              >
                <FaTimes size={18} />
              </button>

              {/* Modal Image Section */}
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <motion.img 
                  layoutId={`img-${selectedProject.id}`} 
                  src={selectedProject.img} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Modal Content Section */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <motion.div layoutId={`date-${selectedProject.id}`} className="flex items-center gap-2 text-purple-500 font-bold text-xs mb-6 uppercase tracking-widest">
                  <FaCalendarAlt /> {selectedProject.date}
                </motion.div>

                <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-4xl font-black uppercase mb-6 tracking-tighter leading-none">
                  {selectedProject.name}
                </motion.h3>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {selectedProject.longDesc}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                      <FaCode className="text-purple-500" /> Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-white text-black w-full md:w-auto px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-purple-600 hover:text-white hover:shadow-[0_10px_30px_rgba(168,85,247,0.4)] active:scale-95"
                  >
                    <FaGithub size={18} />
                    View Source
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