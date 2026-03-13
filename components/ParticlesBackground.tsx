"use client"

import Particles from "react-tsparticles"

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { speed: 1 },
          links: {
            enable: true,
            color: "#ffffff",
            opacity: 0.2
          }
        },
        background: { color: "transparent" }
      }}
    />
  )
}