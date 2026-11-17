import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Education from './sections/Education.jsx'
import Achievements from './sections/Achievements.jsx'
import Certifications from './sections/Certifications.jsx'
import Resume from './sections/Resume.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <div className="bg-grid" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
