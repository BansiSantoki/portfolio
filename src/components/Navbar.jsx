import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/logo.jpg';

const links = ['Home', 'About', 'Projects', 'Skills', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        <a href="#home" className="navbar__logo">
            <img src={logo} alt="Logo" />
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar__cta">Let's Connect</a>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </nav>
  )
}
