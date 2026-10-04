import { about } from '../data/site'
import { Reveal } from '../components/Reveal'
import './About.css'

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <h2 id="about-title" className="display about__title">
            {about.heading.map((word) => (
              <span key={word} className="about__word">
                {word}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__body">
            <p className="about__lede">{about.lede}</p>
            {about.paragraphs.map((p) => (
              <p key={p} className="about__p">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal as="dl" className="about__facts" delay={120}>
            {about.facts.map((f) => (
              <div key={f.k} className="about__fact">
                <dt className="label">{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
