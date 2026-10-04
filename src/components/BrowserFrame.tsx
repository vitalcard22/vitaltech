import type { ReactNode } from 'react'
import './BrowserFrame.css'

interface Props {
  url: string
  children: ReactNode
  /** Accessible description of what the preview shows */
  label: string
}

/** A quiet browser chrome used to present website previews. */
export function BrowserFrame({ url, children, label }: Props) {
  return (
    <figure className="frame" aria-label={label}>
      <div className="frame__bar" aria-hidden="true">
        <span className="frame__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="frame__url">{url}</span>
        <span className="frame__spacer" />
      </div>
      <div className="frame__screen">{children}</div>
    </figure>
  )
}
