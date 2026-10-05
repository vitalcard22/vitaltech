import type { ReactNode } from 'react'

interface Props {
  id: string
  children: ReactNode
  /** "split__head" sticks to the left column of a .split layout */
  className?: string
}

/** Section title: uppercase heading, smaller than the hero. */
export function SectionTitle({ id, children, className = 'split__head' }: Props) {
  return (
    <h2 id={id} className={`heading ${className}`}>
      {children}
    </h2>
  )
}
