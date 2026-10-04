import { placeholders, projects } from '../data/projects'
import { ProjectEntry } from '../components/ProjectEntry'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import './Work.css'

export function Work() {
  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading index="01" label="Work" id="work-title">
          Selected
          <br />
          <span className="serif">work</span>
        </SectionHeading>

        <div className="work__list">
          {projects.map((p, i) => (
            <ProjectEntry key={p.slug} project={p} align={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>

        {/* Placeholders for future projects — nothing invented */}
        <ul className="work__next" aria-label="Upcoming projects">
          {placeholders.map((p) => (
            <Reveal as="li" key={p.index} className="work__slot">
              <span className="display work__slot-index">{p.index}</span>
              <span className="label">{p.label}</span>
              <span className="label work__slot-status">In the works</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
