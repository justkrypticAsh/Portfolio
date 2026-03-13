"use client"

import { GitHubCalendar } from "react-github-calendar"

export default function GithubStats() {

return ( <section className="py-32 text-center">


  <h2 className="text-4xl font-bold mb-10">
    GitHub Activity
  </h2>

  <div className="flex justify-center">

    <GitHubCalendar
      username="justkrypticAsh"
      colorScheme="dark"
    />

  </div>

</section>


)

}
