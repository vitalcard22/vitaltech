import { useEffect, useState } from 'react'
import { nav, site } from '../data/site'
import { goToSection, navigate } from '../hooks/useRoute'
import { useScrolled } from '../hooks/useScrolled'
import { Button } from './Button'
import './Navbar.css'

export function Navbar() {
  const scrolled = useScrolled(24)
  const [open, setOpen] = useState(false)

  // lock scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const go = (target: string) => {
    setOpen(false)
    goToSection(target)
  }

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container navbar__inner">
        <a
          href="/"
          className="navbar__brand"
          aria-label={`${site.brand} — home`}
          onClick={(e) => {
            e.preventDefault()
            setOpen(false)
            navigate('/')
          }}
        >
          <span className="navbar__mark" aria-hidden="true" />
          {site.brand}
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.target}
              href={`/#${item.target}`}
              className="navbar__link"
              onClick={(e) => {
                e.preventDefault()
                go(item.target)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <Button variant="ghost" arrow="up" onClick={() => go('contact')}>
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="navbar__sheet" hidden={!open}>
        <nav className="container navbar__sheet-inner" aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.target}
              href={`/#${item.target}`}
              className="navbar__sheet-link display"
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={(e) => {
                e.preventDefault()
                go(item.target)
              }}
            >
              <span className="label">0{i + 1}</span>
              {item.label}
            </a>
          ))}
          <div className="navbar__sheet-cta">
            <Button variant="primary" arrow="up" size="lg" onClick={() => go('contact')}>
              Hire Me
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
