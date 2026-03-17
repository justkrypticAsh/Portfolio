"use client"

import { motion } from "framer-motion"
import { 
  SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, 
  SiGit, SiGithub, SiPostman, SiMysql, SiSpringboot 
} from "react-icons/si"
import { FaJava, FaDatabase, FaCode, FaTerminal } from "react-icons/fa"

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Programming",
      skills: [
        { name: "Java", icon: <FaJava className="text-orange-500" /> },
        { name: "C Language", icon: <FaCode className="text-blue-500" /> },
        { name: "DSA", icon: <FaTerminal className="text-zinc-500" /> },
        { name: "OOPs", icon: <SiJavascript className="text-yellow-500" /> },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "SQL", icon: <FaDatabase className="text-blue-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      ]
    },
    {
      title: "Tools & Environment",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "GitHub", icon: <SiGithub className="text-foreground" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "NetBeans", icon: <span className="font-bold text-xs text-blue-500">NB</span> },
      ]
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-left">
          <span className="text-[10px] font-black tracking-[0.5em] text-purple-600 dark:text-purple-500 uppercase mb-4 block">
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase">
            Skills & <span className="text-zinc-500">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-foreground/[0.02] dark:bg-white/[0.02] backdrop-blur-xl border border-foreground/10 dark:border-white/5 rounded-[2.5rem] shadow-xl hover:border-purple-500/30 transition-all group"
            >
              <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span>
                {cat.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex flex-col gap-3 p-4 bg-foreground/[0.03] dark:bg-white/[0.03] border border-foreground/5 rounded-2xl hover:bg-foreground/5 transition-colors group/skill"
                  >
                    <div className="text-2xl transition-transform group-hover/skill:scale-110 duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}