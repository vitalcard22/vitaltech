import { skills } from '../data/site'
import { Reveal } from '../components/Reveal'
import './Skills.css'

export function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container split">
        <h2 id="skills-title" className="heading split__head">
          Skills
        </h2>

        <Reveal className="split__body skills__grid">
          {skills.map((group) => (
            <div key={group.group} className="skills__group">
              <h3 className="skills__name">{group.group}</h3>
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
