"use client"
import { motion } from "framer-motion"

export default function Skills() {
  return (
    <section className="py-32 text-center">

      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">

        {["Java","C","SQL","Git","DSA","OOP"].map(skill => (
          <motion.div
            key={skill}
            whileHover={{ scale:1.1 }}
            className="border p-6 rounded-xl"
          >
            {skill}
          </motion.div>
        ))}

      </div>

    </section>
  )
}