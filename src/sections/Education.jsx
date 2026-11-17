import { education } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading title="Education" />
        <ol className="timeline">
          {education.map((e, i) => (
            <Reveal as="li" key={e.degree} delay={i * 80} className={`timeline__item ${e.placeholder ? 'is-placeholder' : ''}`}>
              <div className="card">
                <span className="badge">{e.period}</span>
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
