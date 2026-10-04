import { contact } from '../data/site'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import './Contact.css'

export function Contact() {
  const primary = contact.links[0]
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <h2 id="contact-title" className="display contact__title">
            {contact.headline.map((line) => (
              <span key={line} className="contact__line">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="contact__row">
          <Reveal delay={150} className="contact__lead">
            <p className="lead">{contact.sub}</p>
            <Button variant="primary" size="lg" href={primary.href}>
              {contact.cta}
            </Button>
          </Reveal>

          <Reveal as="ul" delay={250} className="contact__links">
            {contact.links.map((l) => (
              <li key={l.label}>
                <a
                  className="contact__link"
                  href={l.href}
                  {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="label">{l.label}</span>
                  <span className="contact__value">{l.value}</span>
                </a>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
