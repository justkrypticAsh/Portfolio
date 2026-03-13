"use client"

import { motion } from "framer-motion"
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedinIn, FaPaperPlane } from "react-icons/fa"

export default function Contact() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-red-400" />,
      label: "Email",
      value: "ashishkanellis33@gmail.com",
      link: "mailto:ashishkanellis33@gmail.com",
      color: "hover:border-red-500/50"
    },
    {
      icon: <FaWhatsapp className="text-green-400" />,
      label: "WhatsApp",
      value: "+91 9335949655",
      link: "https://wa.me/919335949655?text=Hi%20Ashish,%20I%20saw%20your%20portfolio!",
      color: "hover:border-green-500/50"
    },
    {
      icon: <FaGithub className="text-white" />,
      label: "GitHub",
      value: "itxashish_",
      link: "https://github.com/itxashish_", // Update this with your actual username if different
      color: "hover:border-white/50"
    }
  ]

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[10px] font-bold tracking-[0.5em] text-purple-500 uppercase mb-4 block">
            Let's Collaborate
          </span>
          <h2 className="text-5xl font-black tracking-tighter mb-6 italic">
            READY TO START A <br /> 
            <span className="bg-gradient-to-r from-white via-gray-400 to-white text-transparent bg-clip-text">NEW PROJECT?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed uppercase tracking-widest">
            Currently available for freelance work and internship opportunities.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 text-left">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 bg-[#0a0a0a] border border-white/5 rounded-[2rem] transition-all duration-300 ${method.color} group relative overflow-hidden`}
            >
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] text-8xl group-hover:scale-110 transition-transform duration-500">
                {method.icon}
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-xl group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">{method.label}</p>
              <p className="text-sm font-medium text-white break-all">{method.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative inline-block"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:ashishkanellis33@gmail.com"
            className="flex items-center gap-3 px-12 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-white/20 transition-all"
          >
            Drop a Message <FaPaperPlane className="text-[10px]" />
          </motion.a>
        </motion.div>

        {/* Status Badge */}
        <div className="mt-20 flex justify-center">
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Available for hire</span>
          </div>
        </div>

      </div>
    </section>
  )
}