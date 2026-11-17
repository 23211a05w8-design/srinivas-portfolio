import { projects } from '../data/portfolio.js'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading title="Projects" lead="Things I have built." />
        <div className="grid grid--projects">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
