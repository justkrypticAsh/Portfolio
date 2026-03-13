"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {

  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }

  }, [])

  return (
    <div
      style={{
        left: pos.x - 200,
        top: pos.y - 200
      }}
      className="fixed w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full pointer-events-none z-0"
    />
  )
}