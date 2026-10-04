import type { CaseStudy } from '../data/projects'
import { Link } from './Link'
import { ProjectPreview } from './ProjectPreview'
import { Reveal } from './Reveal'
import './ProjectEntry.css'

interface Props {
  project: CaseStudy
  /** Which side the preview leans toward, for an asymmetric rhythm */
  align?: 'left' | 'right'
}

export function ProjectEntry({ project, align = 'left' }: Props) {
  const to = `/work/${project.slug}`
  return (
    <article className={`entry entry--${align}`}>
      <Reveal className="entry__visual">
        <Link to={to} className="entry__link" aria-label={`${project.title} — view case study`}>
          <ProjectPreview project={project} />
          <span className="entry__cursor label" aria-hidden="true">
            View ↗
          </span>
        </Link>
      </Reveal>

      <Reveal className="entry__text" delay={120}>
        <p className="entry__index display" aria-hidden="true">
          {project.index}
        </p>
        <p className="label entry__cats">{project.categories.join(' · ')}</p>
        <h3 className="display entry__title">{project.title}</h3>
        <p className="lead">{project.summary}</p>
        <Link to={to} className="entry__cta label">
          <span>View Case Study</span>
          <span className="entry__cta-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </Reveal>
    </article>
  )
}
