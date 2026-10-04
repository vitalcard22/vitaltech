import { services } from '../data/site'
import { Reveal } from '../components/Reveal'
import './Services.css'

export function Services() {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="container split">
        <h2 id="services-title" className="heading split__head">
          Services
        </h2>

        <ol className="split__body services__list">
          {services.map((s) => (
            <Reveal as="li" key={s.index} className="discipline">
              <span className="discipline__index">{s.index}</span>

              <h3 className="display discipline__verb">{s.verb}</h3>

              <div className="discipline__detail">
                <p className="discipline__title">{s.title}</p>
                <p className="discipline__body">{s.body}</p>
                <ul className="discipline__points">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
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
