import { about } from '../data/site'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import './About.css'

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading index="03" label="About" id="about-title">
          {about.heading.map((word, i) => (
            <span key={word} className="about__word">
              {word}
              {i < about.heading.length - 1 && ' '}
            </span>
          ))}
        </SectionHeading>

        <div className="about__grid">
          <Reveal className="about__body">
            <p className="about__first">{about.paragraphs[0]}</p>
            {about.paragraphs.slice(1).map((p) => (
              <p key={p} className="lead">
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
