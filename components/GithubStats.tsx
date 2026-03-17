"use client"

import {GitHubCalendar} from "react-github-calendar"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function GithubStats() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Hydration error se bachne ke liye
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Check karna ki current theme dark hai ya light
  const isDarkMode = resolvedTheme === "dark"

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-foreground">
            GitHub Activity
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full shadow-[0_0_10px_#a855f7]" />
        </div>

        {/* GLASS CARD WRAPPER */}
        <div className="flex justify-center p-8 md:p-12 rounded-[2.5rem] border border-foreground/10 dark:border-white/10 bg-foreground/[0.03] dark:bg-white/[0.02] backdrop-blur-xl shadow-xl overflow-hidden">
          <div className="w-full flex justify-center overflow-x-auto overflow-y-hidden custom-scrollbar">
            <GitHubCalendar
              username="justkrypticAsh"
              // Dynamic Color Scheme
              colorScheme={isDarkMode ? "dark" : "light"}
              fontSize={12}
              blockSize={12}
              blockMargin={4}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </section>
  )
}