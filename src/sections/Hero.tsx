import { Fragment } from 'react'
import { hero } from '../data/site'
import { goToSection } from '../hooks/useRoute'
import { Button } from '../components/Button'
import { GrowthLine } from '../components/GrowthLine'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__stage">
          <h1 id="hero-title" className="display hero__title">
            {hero.headline.map((line, i) => (
              <span className="hero__line" key={line}>
                <span
                  className={`hero__line-inner ${line === hero.emphasis ? 'serif hero__emph' : ''}`}
                  style={{ animationDelay: `${150 + i * 110}ms` }}
                >
                  {line.split('|').map((part, n) => (
                    <Fragment key={part}>
                      {n > 0 && <br className="hero__br" />}
                      {n > 0 ? ' ' : ''}
                      {part}
                    </Fragment>
                  ))}
                </span>
              </span>
            ))}
          </h1>
          <div className="hero__chart">
            <GrowthLine />
          </div>
        </div>

        <div className="hero__foot">
          <ul className="hero__designation" aria-label="Disciplines">
            {hero.designation.map((item) => (
              <li key={item} className="label">
                {item}
              </li>
            ))}
          </ul>

          <div className="hero__side">
            <p className="hero__statement">{hero.statement}</p>
            <div className="hero__actions">
              <Button variant="primary" size="lg" arrow="right" onClick={() => goToSection('work')}>
                {hero.primary}
              </Button>
              <Button variant="ghost" size="lg" onClick={() => goToSection('contact')}>
                {hero.secondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
