import React, { useEffect } from 'react'
import GitHubCalendar from "react-github-calendar"
import "./githubCalender.css"
import Aos from 'aos'
import "aos/dist/aos.css"
// import {Tooltip as ReactTooltip} from 'react-tooltip';


const Github = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  // GitHubCalendar(".github_calendar", "Ankur9900", { responsive: true });
  return (
    <section>
      <h5 data-aos="fade-up">Github</h5>
      <h2 data-aos="fade-up">My Github Stats</h2>
      {/* <h5 >Github</h5>
      <h2 >My Github Stats</h2> */}
      <div className='container experience_container about github_status'>
        <div className="git_stats">
          <a href="https://github.com/Ankur9900?tab=repositories">
            <img alt="Ankur Kumar Chauhan github stats"
              src="https://github-readme-stats.vercel.app/api?username=Ankur9900&theme=algolia&show_icons=true&count_private=true" />
          </a>
        </div>
        <div className="git_stats">
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=Ankur9900&theme=algolia&hide=smalltalk&layout=compact" alt="Ankur9900" />
        </div>
      </div>
      <div className="container github_calendar">
        <GitHubCalendar username="Ankur9900">
          {/* <ReactTooltip delayShow={20} html /> */}
        </GitHubCalendar>

      </div>
    </section>
  )
}

export default Github