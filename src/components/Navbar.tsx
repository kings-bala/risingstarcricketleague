import { useState } from 'react'

const sections = ['HOME', 'ABOUT US', 'WHAT WE DO', 'VALUES', 'GALLERY', 'SCHEDULE', 'CONTACT US']
const sectionIds = ['hero', 'about', 'whatwedo', 'values', 'gallery', 'schedule', 'contact']

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <img src="/images/logo.jpg" alt="Rising Star Cricket Academy" className="navbar-logo" />
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? '\u2715' : '\u2630'}
      </button>
      <div className={`navbar-links ${open ? 'open' : ''}`}>
        {sections.map((s, i) => (
          <button key={s} onClick={() => scrollTo(sectionIds[i])}>{s}</button>
        ))}
        <a href="https://forms.gle/oZfkNWJDiHBpwXnAA" target="_blank" rel="noopener noreferrer">
          <button className="register-btn">REGISTER</button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
