"use client"

import { TagCloud } from "react-tagcloud"

export default function SkillsSphere() {

  const data = [
    { value: "Java", count: 25 },
    { value: "C", count: 20 },
    { value: "SQL", count: 20 },
    { value: "DSA", count: 30 },
    { value: "Git", count: 20 },
    { value: "OOP", count: 25 },
    { value: "Next.js", count: 15 },
    { value: "React", count: 15 },
  ]

  return (
    <section className="py-32 text-center">

      <h2 className="text-4xl font-bold mb-10">
        Skills Sphere
      </h2>

      <div className="flex justify-center">

        <TagCloud
          minSize={18}
          maxSize={40}
          tags={data}
        />

      </div>

    </section>
  )
}