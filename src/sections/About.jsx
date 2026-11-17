import { about, interests } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading title="About me" />
        <Reveal className="card about">
          {about.map((p) => <p key={p}>{p}</p>)}
          <div className="about__interests">
            <span>Outside of code:</span>
            <ul className="tags">{interests.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
