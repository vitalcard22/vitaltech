import type { ReactNode } from 'react'
import { Link } from './Link'
import './Button.css'

interface Props {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  href?: string
  /** Internal route handled by the client router */
  to?: string
  onClick?: () => void
  size?: 'md' | 'lg'
  external?: boolean
}

export function Button({ children, variant = 'primary', href, to, onClick, size = 'md', external }: Props) {
  const cls = `btn btn--${variant} btn--${size}`
  const inner = <span className="btn__label">{children}</span>

  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a className={cls} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  )
}
