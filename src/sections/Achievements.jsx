import { achievements } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading title="Achievements" lead="Activities and highlights beyond the classroom." />
        <div className="grid grid--3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 80} className="card">
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
