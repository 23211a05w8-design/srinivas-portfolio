import { profile } from '../data/portfolio.js'
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© 2026 Srinivas Vankudoth. All Rights Reserved.</p>
        <div className="social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
        </div>
        <a href="#home" className="btn btn--ghost btn--sm"><ArrowUpIcon /> Back to Top</a>
      </div>
    </footer>
  )
}
