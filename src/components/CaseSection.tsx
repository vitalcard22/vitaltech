import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import './CaseSection.css'

interface Props {
  index: string
  title: string
  children: ReactNode
  id?: string
}

/** One chapter of a case study. The chapters are a sequence, so they are numbered. */
export function CaseSection({ index, title, children, id }: Props) {
  return (
    <section className="case-section" aria-labelledby={id}>
      <div className="container case-section__grid">
        <Reveal className="case-section__head">
          <p className="case-section__title">
            <span className="case-section__index">{index}</span>
            {title}
          </p>
        </Reveal>
        <div className="case-section__body">
          <h2 id={id} className="visually-hidden">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  )
}
