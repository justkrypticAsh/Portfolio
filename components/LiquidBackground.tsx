"use client"

export default function LiquidBackground() {
  return (

    <div className="fixed inset-0 -z-30 overflow-hidden">

      <div className="absolute w-[600px] h-[600px] bg-purple-500 opacity-30 blur-[200px] animate-pulse top-0 left-0"></div>

      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-30 blur-[200px] animate-pulse bottom-0 right-0"></div>

    </div>

  )
}