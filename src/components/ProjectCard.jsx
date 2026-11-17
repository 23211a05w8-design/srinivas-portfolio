import Reveal from './Reveal.jsx'
import { ExternalIcon, GitHubIcon } from './Icons.jsx'

export default function ProjectCard({ project, index }) {
  const { title, subtitle, badge, description, plain, tech, features, demo, github } = project
  return (
    <Reveal delay={index * 80} as="article" className="card project">
      <div className="project__top">
        <span className="badge badge--accent">{badge}</span>
        <h3>{title}</h3>
        <p className="project__sub">{subtitle}</p>
      </div>
      <p>{description}</p>
      {plain && <p className="project__plain">{plain}</p>}
      {features.length > 0 && (
        <ul className="project__features">
          {features.map((f) => <li key={f}>{f}</li>)}
        </ul>
      )}
      <ul className="tags" aria-label="Technologies used">
        {tech.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <div className="project__actions">
        <a className="btn btn--primary btn--sm" href={demo} target="_blank" rel="noreferrer"><ExternalIcon /> Live Demo</a>
        <a className="btn btn--ghost btn--sm" href={github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
      </div>
    </Reveal>
  )
}
