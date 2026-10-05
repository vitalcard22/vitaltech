import { site } from '../data/site'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="label">
          © {site.year} {site.brand}
        </span>
        <span className="label footer__mid">{site.location}</span>
        <button type="button" className="label footer__top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
