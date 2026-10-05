import { projects } from '../data/projects'
import { ProjectEntry } from '../components/ProjectEntry'
import { SectionTitle } from '../components/SectionTitle'
import './Work.css'

export function Work() {
  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="container split">
        <SectionTitle id="work-title">
          Latest
          <br />
          work
        </SectionTitle>

        <div className="split__body">
          <div className="work__list">
            {projects.map((p) => (
              <ProjectEntry key={p.slug} project={p} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
