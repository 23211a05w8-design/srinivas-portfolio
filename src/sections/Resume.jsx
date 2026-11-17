import { profile } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { DownloadIcon, ExternalIcon } from '../components/Icons.jsx'

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <SectionHeading title="Resume" />
        <Reveal className="card resume">
          <p>
            Final-year Computer Science Engineering student with hands-on project experience in Java, Python, web technologies and MySQL,
            seeking a software engineer or developer role.
          </p>
          <div className="resume__actions">
            <a className="btn btn--primary" href={profile.resume} download><DownloadIcon /> Download Resume</a>
            <a className="btn btn--ghost" href={profile.resume} target="_blank" rel="noreferrer"><ExternalIcon /> View Resume</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
