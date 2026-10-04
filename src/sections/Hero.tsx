import { hero } from '../data/site'
import { goToSection } from '../hooks/useRoute'
import { Button } from '../components/Button'
import { IntersectionMark } from '../components/IntersectionMark'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__visual">
          <IntersectionMark />
        </div>

        <h1 id="hero-title" className="display hero__title">
          {hero.headline.map((line, i) => (
            <span className="hero__line" key={line}>
              <span
                className={`hero__line-inner ${line === hero.emphasis ? 'serif hero__emph' : ''}`}
                style={{ animationDelay: `${150 + i * 110}ms` }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="hero__foot">
          <ul className="hero__identity label" aria-label="Disciplines">
            {hero.identity.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero__side">
            <p className="lead">{hero.description}</p>
            <div className="hero__actions">
              <Button variant="primary" arrow="right" size="lg" onClick={() => goToSection('work')}>
                {hero.primary}
              </Button>
              <Button variant="ghost" arrow="up" size="lg" onClick={() => goToSection('contact')}>
                {hero.secondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
