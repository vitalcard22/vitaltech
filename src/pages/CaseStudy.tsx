import { useEffect } from 'react'
import { getProject, projects } from '../data/projects'
import { Button } from '../components/Button'
import { CaseSection } from '../components/CaseSection'
import { Link } from '../components/Link'
import { ProjectPreview } from '../components/ProjectPreview'
import { Reveal } from '../components/Reveal'
import { NotFound } from './NotFound'
import './CaseStudy.css'

export function CaseStudy({ slug }: { slug: string }) {
  const project = getProject(slug)

  useEffect(() => {
    if (!project) return
    const previous = document.title
    document.title = `${project.title} — Case Study`
    return () => {
      document.title = previous
    }
  }, [project])

  if (!project) return <NotFound />

  const next = projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length]

  return (
    <article className="case">
      {/* ---------- Title block ---------- */}
      <header className="case__hero">
        <div className="container">
          <Link to="/" className="label case__back">
            All work
          </Link>
          <p className="label case__cats">{project.type}</p>
          <h1 className="display case__title">{project.title}</h1>
        </div>
        <div className="container case__hero-visual">
          <Reveal>
            <ProjectPreview project={project} />
          </Reveal>
        </div>
      </header>

      {/* ---------- 01 Overview ---------- */}
      <CaseSection index="01" title="Overview" id="case-overview">
        <Reveal>
          <p className="case__statement">{project.summary}</p>
        </Reveal>
        <Reveal as="dl" className="case__meta" delay={100}>
          <div>
            <dt className="label">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="label">Type</dt>
            <dd>{project.type}</dd>
          </div>
          <div>
            <dt className="label">Live site</dt>
            <dd>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="case__ext">
                {project.liveUrl.replace(/^https?:\/\//, '')}
              </a>
            </dd>
          </div>
        </Reveal>
      </CaseSection>

      {/* ---------- 02 Challenge ---------- */}
      <CaseSection index="02" title="Challenge" id="case-challenge">
        {project.challenge.map((p, i) => (
          <Reveal key={p} delay={i * 80}>
            <p className={i === 0 ? 'case__statement' : 'lead'}>{p}</p>
          </Reveal>
        ))}
      </CaseSection>

      {/* ---------- 03 Approach ---------- */}
      <CaseSection index="03" title="Approach" id="case-approach">
        <ul className="case__steps">
          {project.approach.map((a, i) => (
            <Reveal as="li" key={a.title} className="case__step" delay={i * 80}>
              <h3 className="case__step-title">{a.title}</h3>
              <p className="lead">{a.body}</p>
            </Reveal>
          ))}
        </ul>
      </CaseSection>

      {/* ---------- 04 Solution ---------- */}
      <CaseSection index="04" title="Solution" id="case-solution">
        {project.images?.gallery?.length ? (
          <div className="case__gallery">
            {project.images.gallery.map((src) => (
              <Reveal key={src}>
                <img src={src} alt={`${project.title} interface`} loading="lazy" />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <ProjectPreview project={project} />
          </Reveal>
        )}
        <ul className="case__features">
          {project.solution.map((s, i) => (
            <Reveal as="li" key={s.title} className="case__feature" delay={(i % 2) * 80}>
              <h3 className="case__feature-title">{s.title}</h3>
              <p className="lead">{s.body}</p>
            </Reveal>
          ))}
        </ul>
      </CaseSection>

      {/* ---------- 05 Technology ---------- */}
      <CaseSection index="05" title="Technology" id="case-tech">
        <Reveal as="ul" className="case__stack">
          {project.stack.map((t) => (
            <li key={t}>
              {t}
            </li>
          ))}
        </Reveal>
      </CaseSection>

      {/* ---------- 06 Final Result ---------- */}
      <CaseSection index="06" title="Result" id="case-result">
        <Reveal>
          <p className="case__statement case__statement--xl">{project.result.heading}</p>
        </Reveal>
        <Reveal as="ul" className="case__points" delay={100}>
          {project.result.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </Reveal>
        <Reveal delay={150}>
          <Button variant="primary" size="lg" href={project.liveUrl} external>
            Visit live site
          </Button>
        </Reveal>
      </CaseSection>

      {/* ---------- Next project ---------- */}
      {next.slug !== project.slug && (
        <Link to={`/work/${next.slug}`} className="case__next">
          <div className="container case__next-inner">
            <span className="label">Next case study</span>
            <span className="case__next-title">{next.title}</span>
          </div>
        </Link>
      )}
    </article>
  )
}
