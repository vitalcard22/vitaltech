import type { CaseStudy, PreviewKind } from '../data/projects'
import { BrowserFrame } from './BrowserFrame'
import './ProjectPreview.css'

const STAGES = ['Received', 'Processing', 'Dispatched', 'In transit', 'Customs', 'Delivered']
const DESTINATIONS = ['Canada', 'United Kingdom', 'Ireland', 'South Korea', 'New Zealand']

function YvexCargo() {
  return (
    <div className="pv pv--yvex">
      <div className="pv__nav">
        <b>YVEXCARGO</b>
        <span />
        <span />
        <span />
      </div>
      <div className="pv__body">
        <div className="pv__copy">
          <small>Global logistics</small>
          <h4>
            Move anything.
            <br />
            Track everything.
          </h4>
          <i className="pv__btn">Track a shipment</i>
        </div>
        <div className="pv__card">
          <small>Shipment</small>
          <strong>YC-0000-000</strong>
          <ol>
            {STAGES.map((s, i) => (
              <li key={s} className={i < 3 ? 'done' : i === 3 ? 'now' : ''}>
                <span />
                {s}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

function Oma() {
  return (
    <div className="pv pv--oma">
      <div className="pv__nav">
        <b>
          <em>OS</em> OMA SYNERGIES
        </b>
        <span />
        <span />
        <span />
      </div>
      <div className="pv__body">
        <div className="pv__copy">
          <small>Travel · Study · Visas</small>
          <h4>
            Your journey abroad,
            <br />
            handled with care.
          </h4>
          <i className="pv__btn">Chat on WhatsApp</i>
        </div>
        <div className="pv__chips">
          {DESTINATIONS.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

const previews: Record<PreviewKind, () => JSX.Element> = { yvexcargo: YvexCargo, oma: Oma }

/**
 * Stylised website preview built in CSS.
 * To use a real screenshot instead, set `images.hero` on the project in data/projects.ts.
 */
export function ProjectPreview({ project }: { project: CaseStudy }) {
  const Preview = previews[project.preview]
  const host = project.liveUrl.replace(/^https?:\/\//, '')
  return (
    <BrowserFrame url={host} label={`Website preview of ${project.title}`}>
      {project.images?.hero ? (
        <img src={project.images.hero} alt={`${project.title} homepage`} loading="lazy" className="pv__img" />
      ) : (
        <Preview />
      )}
    </BrowserFrame>
  )
}
