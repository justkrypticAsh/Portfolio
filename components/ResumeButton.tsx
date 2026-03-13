"use client"

import { motion } from "framer-motion"

export default function ResumeButton() {
  return (
    <motion.a
      href="/resume.pdf"
      download
      whileHover={{ scale: 1.1 }}
      className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-lg"
    >
      Download Resume
    </motion.a>
  )
}