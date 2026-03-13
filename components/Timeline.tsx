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
    color: "#ffffff" 
  },
  {
    date: "2020",
    title: "Secondary School (10th)",
    location: "High School",
    desc: "Completed 10th grade with a curious mind, starting to explore the world of logic.",
    icon: <FaSchool />,
    color: "#60A5FA" // Blue
  },
  {
    date: "2023",
    title: "Higher Secondary (12th)",
    location: "Science Stream",
    desc: "Finished schooling with a focus on Mathematics and Physics, setting the stage for Engineering.",
    icon: <FaBook />,
    color: "#F472B6" // Pink
  },
  {
    date: "2024",
    title: "B.Tech Commencement",
    location: "CS Engineering",
    desc: "Started B.Tech journey. Laid the foundation with C programming and core hardware fundamentals.",
    icon: <FaMicrochip />,
    color: "#10B981" // Green
  },
  {
    date: "2025",
    title: "Java Development",
    location: "Backend Focus",
    desc: "Deep-dived into the Java ecosystem. Mastering OOPs, JDBC, and building server-side applications.",
    icon: <FaJava />,
    color: "#FBBF24" // Yellow/Gold
  },
  {
    date: "Mid 2025",
    title: "DSA Grind",
    location: "Algorithms & Logic",
    desc: "Started the Data Structures & Algorithms journey to sharpen problem-solving skills.",
    icon: <FaTerminal />,
    color: "#A855F7" // Purple
  },
  {
    date: "Present",
    title: "Full Stack & DSA Mastery",
    location: "Building Digital Products",
    desc: "Practicing advanced DSA daily and crafting high-end web experiences like this portfolio.",
    icon: <FaCode />,
    color: "#ffffff" 
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
      
      {/* CENTRAL LINE */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10">
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
            {/* ICON / GLOWING POINT */}
            <div 
              className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-black border-2 rounded-full z-10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,1)]"
              style={{ borderColor: item.color }}
            >
              <div className="text-sm" style={{ color: item.color }}>{item.icon}</div>
            </div>

            {/* CONTENT CARD */}
            <div className="w-full md:w-[42%] ml-12 md:ml-0 bg-[#0a0a0a] border border-white/10 p-8 rounded-[2rem] hover:border-white/30 transition-all group shadow-2xl">
              {/* DATE - FIXED OPACITY & COLOR */}
              <span 
                className="text-sm font-black tracking-[0.2em] mb-2 block" 
                style={{ color: item.color, textShadow: `0 0 10px ${item.color}50` }}
              >
                {item.date}
              </span>
              
              <h3 className="text-xl font-bold text-white mb-1">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                {item.location}
              </p>
              
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
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