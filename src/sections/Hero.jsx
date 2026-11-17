import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio.js'
import { GitHubIcon, LinkedInIcon } from '../components/Icons.jsx'

function useTyping(text, speed = 32) {
  const [out, setOut] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOut(text)
      return
    }

    let i = 0

    const t = setInterval(() => {
      i += 1
      setOut(text.slice(0, i))

      if (i >= text.length) {
        clearInterval(t)
      }
    }, speed)

    return () => clearInterval(t)
  }, [text, speed])

  return out
}

export default function Hero() {
  const typed = useTyping(profile.subtitle)
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">

        <div className="hero__copy">
          <h1>Hi, I’m {profile.name}</h1>

          <p className="hero__sub" aria-label={profile.subtitle}>
            <span aria-hidden="true">{typed}</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <p className="hero__intro">
            {profile.intro}
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Projects
            </a>

            <a
              href={profile.resume}
              download
              className="btn btn--ghost"
            >
              Download Resume
            </a>
          </div>

          <div className="social">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="hero__avatar">
          <div className="avatar">

            {photoOk ? (
              <img
                src="/assets/profile.jpg"
                alt={`Portrait of ${profile.name}`}
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <span aria-hidden="true">
                {initials}
              </span>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}