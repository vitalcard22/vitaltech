import { placeholders, projects } from '../data/projects'
import { ProjectEntry } from '../components/ProjectEntry'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import './Work.css'

export function Work() {
  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="container split">
        <SectionTitle id="work-title">
          Selected
          <br />
          work
        </SectionTitle>

        <div className="split__body">
          <div className="work__list">
            {projects.map((p) => (
              <ProjectEntry key={p.slug} project={p} />
            ))}
          </div>

          <Reveal as="ul" className="work__next">
            {placeholders.map((p) => (
              <li key={p.index}>
                <span className="label work__next-n">{p.index}</span>
                <span className="label">Next project, in progress</span>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
