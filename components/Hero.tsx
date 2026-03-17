"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { FaGithub, FaLinkedin, FaPaperPlane, FaEnvelope } from "react-icons/fa"
import AbstractCanvas from "./AbstractCanvas"

export default function Hero() {
  const myName = "Ashish Kumar Sharma";
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [7, -7]);
  const rotateY = useTransform(x, [-300, 300], [-7, 7]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    animate(x, 0, { duration: 0.5 });
    animate(y, 0, { duration: 0.5 });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background transition-colors duration-500 overflow-hidden relative"
      style={{ perspective: "1200px" }}
    >
      
      <AbstractCanvas />

      <div className="absolute inset-0 z-[1] opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <motion.div
        style={{ rotateX, rotateY, z: 100 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <div className="absolute inset-0 -z-10 bg-purple-500/5 blur-[120px] rounded-full" />

        <h1 
          className="glitch-title text-4xl md:text-5xl font-black tracking-tighter uppercase text-foreground select-none leading-tight transition-colors duration-500 hover:text-purple-600 dark:hover:text-purple-400"
          data-text={myName}
        >
          {myName}
        </h1>

        <div className="mt-7">
          <p className="inline-block text-zinc-500 dark:text-zinc-400 text-sm md:text-lg font-mono tracking-tight bg-foreground/[0.04] dark:bg-white/[0.04] px-8 py-2.5 rounded-full border border-foreground/10 backdrop-blur-md transition-colors">
            I am a <span className="text-foreground font-bold italic">
              <Typewriter words={["Java Developer", "DSA Enthusiast", "Software Engineer"]} loop cursor cursorStyle="_" />
            </span>
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5 }}
        className="flex gap-12 mt-16 text-2xl relative z-20 text-zinc-400"
      >
        <a href="https://github.com/justkrypticAsh" target="_blank" className="hover:text-purple-600 transition-all duration-300 transform hover:scale-125"><FaGithub /></a>
        <a href="https://linkedin.com/in/ashish-kumar-sharma-5bb0b0310/" target="_blank" className="hover:text-blue-600 transition-all duration-300 transform hover:scale-125"><FaLinkedin /></a>
      </motion.div>

      {/* --- REFINED BUTTONS WITH VISIBILITY FIX --- */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.8 }} 
        className="relative z-20 mt-16 flex flex-col md:flex-row gap-4 items-center"
      >
        {[
          { label: "Download Resume", icon: <FaPaperPlane />, link: "/resume.pdf", download: true },
          { label: "Hire Me Now", icon: <FaEnvelope />, link: "mailto:your-email@example.com", download: false }
        ].map((btn, idx) => (
          <a 
            key={idx}
            href={btn.link}
            download={btn.download}
            className="group relative px-10 py-4 w-64 md:w-auto bg-transparent border border-foreground/20 dark:border-white/20 text-foreground font-black text-[10px] tracking-[0.3em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl"
          >
            {/* Background Slide Logic: Light mode me black, dark me white */}
            <span className="absolute inset-0 w-0 bg-foreground dark:bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            
            {/* Text Color Logic: Hover pe light me white dikhega, dark me black */}
            <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-background dark:group-hover:text-black transition-colors duration-500">
              {btn.label} 
              <span className="text-[8px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                {btn.icon}
              </span>
            </span>
          </a>
        ))}
      </motion.div>

      <style jsx global>{`
        .glitch-title { position: relative; }
        .glitch-title:hover::before, .glitch-title:hover::after {
          content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;
          transition: all 0.5s;
        }
        .glitch-title:hover::before { color: #a855f7; animation: glitch-anim 0.8s infinite linear alternate-reverse; opacity: 0.3; }
        .glitch-title:hover::after { color: #3b82f6; animation: glitch-anim 0.8s infinite linear alternate; opacity: 0.3; }
        
        @keyframes glitch-anim {
          0% { transform: translate(0); }
          50% { transform: translate(-1px, 0.5px); }
          100% { transform: translate(1px, -0.5px); }
        }
          @keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient-x {
  animation: gradient-x 5s ease infinite;
}
      `}</style>
    </section>
  )
}