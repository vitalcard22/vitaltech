import { useState, type KeyboardEvent } from 'react'
import { skills } from '../data/site'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import './Skills.css'

const allItems = skills.flatMap((s) => s.items)

export function Skills() {
  const [active, setActive] = useState(0)

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = skills.length - 1
    let next = active
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else return
    e.preventDefault()
    setActive(next)
    document.getElementById(`skill-tab-${next}`)?.focus()
  }

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading index="04" label="Technology" id="skills-title">
          Tools &amp;
          <br />
          <span className="serif">skills</span>
        </SectionHeading>
      </div>

      {/* continuous ticker: decorative duplicate of the list below */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[0, 1].map((n) => (
            <ul className="ticker__set" key={n}>
              {allItems.map((item) => (
                <li key={item} className="display">
                  {item}
                  <span>/</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="container">
        <Reveal className="skills__panel">
          <div className="skills__tabs" role="tablist" aria-label="Skill categories" onKeyDown={onKey}>
            {skills.map((s, i) => (
              <button
                key={s.group}
                id={`skill-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={active === i}
                aria-controls={`skill-panel-${i}`}
                tabIndex={active === i ? 0 : -1}
                className={`skills__tab ${active === i ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="label">0{i + 1}</span>
                <span className="skills__tab-name">{s.group}</span>
              </button>
            ))}
          </div>

          {skills.map((s, i) => (
            <div
              key={s.group}
              id={`skill-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`skill-tab-${i}`}
              hidden={active !== i}
              className="skills__items"
            >
              <ul>
                {s.items.map((item, n) => (
                  <li key={item} className="display" style={{ animationDelay: `${n * 50}ms` }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
