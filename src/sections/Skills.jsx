import { skills } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading title="Skills" lead="The languages, tools and fundamentals I work with." />
        <div className="grid grid--2">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 70} className="card skill">
              <h3>{group.title}</h3>
              <ul className="badges">
                {group.items.map((s, j) => (
                  <li key={s} className="badge" style={{ animationDelay: `${j * 60}ms` }}>{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
