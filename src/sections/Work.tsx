import { placeholders, projects } from '../data/projects'
import { ProjectEntry } from '../components/ProjectEntry'
import { Reveal } from '../components/Reveal'
import './Work.css'

export function Work() {
  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="container split">
        <h2 id="work-title" className="heading split__head">
          Selected work
        </h2>

        <div className="split__body">
          <div className="work__list">
            {projects.map((p) => (
              <ProjectEntry key={p.slug} project={p} />
            ))}
          </div>

          {/* Reserved for future projects; nothing is invented here */}
          <Reveal as="ul" className="work__next">
            {placeholders.map((p) => (
              <li key={p.id}>Next project, in progress</li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
