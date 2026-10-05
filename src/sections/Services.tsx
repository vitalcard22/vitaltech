import { services } from '../data/site'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import './Services.css'

export function Services() {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="container split">
        <SectionTitle id="services-title">
          What I
          <br />
          can do
        </SectionTitle>

        <ol className="split__body services__list">
          {services.map((s) => (
            <Reveal as="li" key={s.index} className="capability">
              <span className="label capability__index">{s.index}</span>
              <div className="capability__main">
                <h3 className="display capability__title">{s.title}</h3>
                <p className="capability__body">{s.body}</p>
              </div>
              <p className="label capability__tag">{s.tag}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
