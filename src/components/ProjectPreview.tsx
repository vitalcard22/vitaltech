import type { CaseStudy, PreviewKind } from '../data/projects'
import './ProjectPreview.css'

const DESTINATIONS = ['Canada', 'United Kingdom', 'Ireland', 'South Korea', 'New Zealand']

/** Oma Synergies: destination pages sit next to the services they belong to. */
function Destinations() {
  return (
    <ul className="plate__places" aria-label="Some of the twelve destinations">
      {DESTINATIONS.map((d) => (
        <li key={d}>{d}</li>
      ))}
      <li className="plate__more">and seven more</li>
    </ul>
  )
}

const plates: Record<PreviewKind, () => JSX.Element> = { oma: Destinations }

/**
 * A drawn plate of what each product is built around, not a fake screenshot.
 * To use a real screenshot instead, set `images.hero` on the project in data/projects.ts.
 */
export function ProjectPreview({ project }: { project: CaseStudy }) {
  const Plate = plates[project.preview]
  const host = project.liveUrl.replace(/^https?:\/\//, '')
  return (
    <figure className="plate" aria-label={project.title}>
      {project.images?.hero ? (
        <img src={project.images.hero} alt={`${project.title} homepage`} loading="lazy" className="plate__img" />
      ) : (
        <Plate />
      )}
      <figcaption className="plate__host label">{host}</figcaption>
    </figure>
  )
}
