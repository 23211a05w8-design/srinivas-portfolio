import { certifications } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { ExternalIcon } from '../components/Icons.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading title="Certifications" lead="Placeholder cards. Replace them with real certificates in src/data/portfolio.js." />
        <div className="grid grid--3">
          {certifications.map((c, i) => (
            <Reveal key={i} delay={i * 80} className="card cert">
              <h3>{c.name}</h3>
              <p>{c.org}</p>
              <p className="muted">{c.date}</p>
              <a href={c.link} target="_blank" rel="noreferrer" className="link">View certificate <ExternalIcon /></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
