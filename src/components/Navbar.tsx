import { useEffect, useState } from 'react'
import { contact, nav, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { goToSection, navigate, useRoute } from '../hooks/useRoute'
import { useScrolled } from '../hooks/useScrolled'
import { Button } from './Button'
import './Navbar.css'

const ids = nav.map((n) => n.target)

export function Navbar() {
  const scrolled = useScrolled(24)
  const path = useRoute()
  const active = useActiveSection(ids, path === '/')
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
          aria-label={`${site.brand}: home`}
          onClick={(e) => {
            e.preventDefault()
            setOpen(false)
            navigate('/')
          }}
        >
          {site.brand}
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.target}
              href={`/#${item.target}`}
              className={`navbar__link ${active === item.target ? 'is-active' : ''}`}
              aria-current={active === item.target ? 'location' : undefined}
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
            Let’s work together
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
              className="navbar__sheet-link"
              onClick={(e) => {
                e.preventDefault()
                go(item.target)
              }}
            >
              <span className="label">0{i + 1}</span>
              {item.label}
            </a>
          ))}
          <div className="navbar__sheet-foot">
            <a className="label navbar__sheet-mail" href={contact.links[0].href}>
              {contact.links[0].value}
            </a>
            <Button variant="primary" size="lg" arrow="right" onClick={() => go('contact')}>
              Let’s work together
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
