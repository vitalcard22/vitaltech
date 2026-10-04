import type { CaseStudy } from '../data/projects'
import { Link } from './Link'
import { ProjectPreview } from './ProjectPreview'
import { Reveal } from './Reveal'
import './ProjectEntry.css'

export function ProjectEntry({ project }: { project: CaseStudy }) {
  const to = `/work/${project.slug}`
  return (
    <article className="entry">
      <Reveal>
        <Link to={to} className="entry__link" aria-label={`${project.title}: read the case study`} tabIndex={-1}>
          <ProjectPreview project={project} />
        </Link>
      </Reveal>

      <Reveal className="entry__text">
        <div className="entry__main">
          <h3 className="entry__title">{project.title}</h3>
          <p className="lead">{project.summary}</p>
          <Link to={to} className="entry__cta">
            Read the case study
          </Link>
        </div>
        <dl className="entry__meta">
          <div>
            <dt className="label">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="label">Built with</dt>
            <dd>{project.stack.slice(0, 5).join(', ')}</dd>
          </div>
        </dl>
      </Reveal>
    </article>
  )
}
