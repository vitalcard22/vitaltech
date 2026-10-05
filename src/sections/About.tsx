import { about, toolkit } from '../data/site'
import { Reveal } from '../components/Reveal'
import './About.css'

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <h2 id="about-title" className="display about__title">
            {about.heading}
          </h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__body">
            <p className="about__first">{about.paragraphs[0]}</p>
            {about.paragraphs.slice(1).map((p) => (
              <p key={p} className="about__p">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal as="ul" className="about__triad" delay={120}>
            {about.triad.map((line, i) => (
              <li key={line}>
                <span className="label">{toolkit[i].tag}</span>
                <span className="about__triad-line">{line}</span>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal className="toolkit">
          {toolkit.map((group) => (
            <div key={group.tag} className="toolkit__group">
              <h3 className="label toolkit__tag">{group.tag}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
