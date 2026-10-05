import { experience } from '../data/site'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import './Experience.css'

export function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container split">
        <div className="split__head">
          <SectionTitle id="experience-title" className="">
            {experience.heading}
          </SectionTitle>
          <p className="experience__lede">{experience.lede}</p>
        </div>

        <ol className="split__body timeline">
          {experience.roles.map((r, i) => (
            <Reveal as="li" key={r.period} className={`step ${i === experience.roles.length - 1 ? 'step--now' : ''}`}>
              <span className="step__node" aria-hidden="true" />
              <p className="label step__period">{r.period}</p>
              <h3 className="step__role">{r.role}</h3>
              <p className="step__company">{r.company}</p>
              <ul className="step__points">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
