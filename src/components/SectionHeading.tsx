import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import './SectionHeading.css'

interface Props {
  index: string
  label: string
  children: ReactNode
  id?: string
}

/** Numbered label + large display heading, shared by every section. */
export function SectionHeading({ index, label, children, id }: Props) {
  return (
    <header className="section-heading">
      <Reveal className="section-heading__meta">
        <span className="label">
          <span className="section-heading__index">{index}</span> / {label}
        </span>
        <hr className="hairline" />
      </Reveal>
      <Reveal delay={100}>
        <h2 id={id} className="display section-heading__title">
          {children}
        </h2>
      </Reveal>
    </header>
  )
}
