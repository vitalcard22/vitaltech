import { services } from '../data/site'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import './Services.css'

export function Services() {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading index="02" label="Services" id="services-title">
          Three
          <br />
          <span className="serif">disciplines</span>
        </SectionHeading>

        <ol className="services__list">
          {services.map((s) => (
            <Reveal as="li" key={s.index} className="discipline">
              <span className="label discipline__index">{s.index}</span>

              <h3 className="display discipline__verb">
                {s.verb}
                <span className="discipline__dot" aria-hidden="true">
                  .
                </span>
              </h3>

              <div className="discipline__detail">
                <p className="discipline__title">{s.title}</p>
                <p className="lead">{s.body}</p>
                <ul className="discipline__points">
                  {s.points.map((p) => (
                    <li key={p} className="label">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
