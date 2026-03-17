"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"
import { FaBaby, FaSchool, FaBook, FaCode, FaJava, FaMicrochip, FaTerminal } from "react-icons/fa"

const journey = [
  {
    date: "2005",
    title: "The Beginning",
    location: "Birth",
    desc: "Where the journey started. A future engineer in the making.",
    icon: <FaBaby />,
    color: "#6366f1" 
  },
  {
    date: "2020",
    title: "Secondary School (10th)",
    location: "High School",
    desc: "Completed 10th grade with a curious mind, starting to explore the world of logic.",
    icon: <FaSchool />,
    color: "#3B82F6"
  },
  {
    date: "2023",
    title: "Higher Secondary (12th)",
    location: "Science Stream",
    desc: "Finished schooling with a focus on Mathematics and Physics, setting the stage for Engineering.",
    icon: <FaBook />,
    color: "#EC4899"
  },
  {
    date: "2024",
    title: "B.Tech Commencement",
    location: "CS Engineering",
    desc: "Started B.Tech journey. Laid the foundation with C programming and core hardware fundamentals.",
    icon: <FaMicrochip />,
    color: "#10B981"
  },
  {
    date: "2025",
    title: "Java Development",
    location: "Backend Focus",
    desc: "Deep-dived into the Java ecosystem. Mastering OOPs, JDBC, and building server-side applications.",
    icon: <FaJava />,
    color: "#F59E0B"
  },
  {
    date: "Mid 2025",
    title: "DSA Grind",
    location: "Algorithms & Logic",
    desc: "Started the Data Structures & Algorithms journey to sharpen problem-solving skills.",
    icon: <FaTerminal />,
    color: "#8B5CF6"
  },
  {
    date: "Present",
    title: "Full Stack & DSA Mastery",
    location: "Building Digital Products",
    desc: "Practicing advanced DSA daily and crafting high-end web experiences like this portfolio.",
    icon: <FaCode />,
    color: "#6366f1" 
  }
]

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-6 relative py-20">
      
      {/* CENTRAL LINE - Light theme visibility fixed */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-foreground/10 dark:bg-white/10">
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"
        />
      </div>

      <div className="space-y-24">
        {journey.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* ICON / GLOWING POINT - Theme Adaptive BG */}
            <div 
              className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-background border-2 rounded-full z-10 flex items-center justify-center shadow-xl transition-colors"
              style={{ borderColor: item.color }}
            >
              <div className="text-sm" style={{ color: item.color }}>{item.icon}</div>
            </div>

            {/* CONTENT CARD - The Projects Style Fix */}
            <div className="w-full md:w-[42%] ml-12 md:ml-0 bg-foreground/[0.03] dark:bg-white/[0.02] backdrop-blur-xl border border-foreground/10 dark:border-white/10 p-8 rounded-[2.5rem] hover:border-purple-500/40 transition-all group shadow-xl">
              
              <span 
                className="text-[10px] font-black tracking-[0.3em] mb-3 block uppercase transition-colors" 
                style={{ color: item.color }}
              >
                {item.date}
              </span>
              
              <h3 className="text-2xl font-black mb-2 text-foreground tracking-tight transition-colors">
                {item.title}
              </h3>
              
              <p className="text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-widest mb-4 opacity-80">
                {item.location}
              </p>
              
              {/* DESCRIPTION: High contrast for Light Mode */}
              <p className="text-zinc-800 dark:text-gray-400 text-sm leading-relaxed font-medium dark:font-normal transition-colors">
                {item.desc}
              </p>
            </div>

            <div className="hidden md:block md:w-[42%]" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}