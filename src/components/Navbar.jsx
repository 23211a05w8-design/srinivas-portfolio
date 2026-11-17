import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    navLinks.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="container nav__bar">
        <a href="#home" className="nav__brand" aria-label={`${profile.name}, back to top`}>
          <span className="nav__mark">SV</span>
          <span className="nav__name">Srinivas</span>
        </a>
        <button className="nav__toggle" aria-expanded={open} aria-controls="nav-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav id="nav-menu" className={`nav__menu ${open ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
