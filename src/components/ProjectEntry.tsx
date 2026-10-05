import { useRef } from 'react'
import type { PointerEvent } from 'react'
import type { CaseStudy } from '../data/projects'
import { Link } from './Link'
import { ProjectPreview } from './ProjectPreview'
import { Reveal } from './Reveal'
import './ProjectEntry.css'

/** One project told as a feature story: big index and title, a plate, then six plain facts. */
export function ProjectEntry({ project }: { project: CaseStudy }) {
  const to = `/work/${project.slug}`
  const cursor = useRef<HTMLSpanElement>(null)

  const move = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse' || !cursor.current) return
    const r = e.currentTarget.getBoundingClientRect()
    cursor.current.style.transform = `translate3d(${e.clientX - r.left}px, ${e.clientY - r.top}px, 0)`
    cursor.current.dataset.on = 'true'
  }
  const leave = () => {
    if (cursor.current) cursor.current.dataset.on = 'false'
  }

  const facts = [
    { k: 'Project', v: project.title },
    { k: 'Role', v: project.role },
    { k: 'What I solved', v: project.solved },
    { k: 'What I built', v: project.built },
    { k: 'Tools', v: project.stack.slice(0, 6).join(', ') },
    { k: 'Business value', v: project.value },
  ]

  return (
    <article className="entry" aria-labelledby={`entry-${project.slug}`}>
      <Reveal className="entry__head">
        <span className="entry__index display" aria-hidden="true">
          {project.index}
        </span>
        <h3 id={`entry-${project.slug}`} className="display entry__title">
          {project.title}
        </h3>
      </Reveal>

      <Reveal>
        <Link
          to={to}
          className="entry__link"
          aria-label={`${project.title}: read the case study`}
          onPointerMove={move}
          onPointerLeave={leave}
        >
          <ProjectPreview project={project} />
          <span ref={cursor} className="entry__cursor label" aria-hidden="true" data-on="false">
            View
          </span>
        </Link>
      </Reveal>

      <Reveal as="dl" className="entry__facts">
        {facts.map((f) => (
          <div key={f.k} className="entry__fact">
            <dt className="label">{f.k}</dt>
            <dd>{f.v}</dd>
          </div>
        ))}
      </Reveal>

      <Link to={to} className="entry__cta label">
        Read the case study →
      </Link>
    </article>
  )
}
