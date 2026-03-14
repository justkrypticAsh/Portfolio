"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaSyncAlt, FaExternalLinkAlt, FaCode, FaUser } from "react-icons/fa"

export default function CodolioFlipSection() {
  const [isFlipped, setIsFlipped] = useState(false)
  const username = "itx_ashish"

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto flex flex-col items-center overflow-hidden">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
          ENGINEERING <span className="text-blue-500 text-glow">METRICS</span>
        </h2>
        <p className="text-gray-500 text-[10px] font-bold tracking-[0.4em] uppercase">DSA vs Development Profile</p>
      </div>

      {/* FLIP CONTAINER */}
      <div 
        className="relative w-full max-w-4xl cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: "2000px" }} // High perspective for better 3D
      >
        {/* TOP LABEL */}
        <div className="absolute -top-12 right-0 z-30 flex items-center gap-2 bg-blue-600 px-4 py-1.5 rounded-full shadow-lg transition-transform group-hover:scale-105">
           <FaSyncAlt className={`text-[10px] text-white ${isFlipped ? 'rotate-180' : ''} transition-transform duration-500`} />
           <span className="text-[9px] font-black text-white uppercase tracking-widest">
              {isFlipped ? "View Dev Stats" : "View Profile Stats"}
           </span>
        </div>

        <motion.div
          className="relative w-full w-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT: DEV CARD */}
          <div 
            className="w-full h-auto bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 md:p-6 shadow-2xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex items-center gap-2 mb-4 px-4 pt-2">
               <FaCode className="text-blue-500" />
               <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-left">Dev Experience</span>
            </div>
            <img 
              src="/codolio-dev.png" 
              alt="Development Stats" 
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>

          {/* BACK: PROFILE/DSA CARD */}
          <div 
            className="absolute top-0 left-0 w-full h-full bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 md:p-6 shadow-2xl"
            style={{ 
              backfaceVisibility: "hidden", 
              transform: "rotateY(180deg)" 
            }}
          >
            <div className="flex items-center gap-2 mb-4 px-4 pt-2">
               <FaUser className="text-purple-500" />
               <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-left">Problem Solving</span>
            </div>
            <img 
              src="/codolio-problem.png" 
              alt="Problem Solving Stats" 
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </motion.div>
      </div>

      <div className="mt-12">
        <a 
          href={`https://codolio.com/profile/${username}`}
          target="_blank"
          className="flex items-center gap-3 text-[10px] font-black text-gray-600 hover:text-blue-500 transition-all uppercase tracking-[0.5em]"
        >
          Full Analytics <FaExternalLinkAlt />
        </a>
      </div>
    </section>
  )
}