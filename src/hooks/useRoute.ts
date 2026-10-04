import { useEffect, useState } from 'react'

/** Minimal History-API router. No dependencies. */

const EVENT = 'app:navigate'

export function navigate(to: string, opts: { scrollTo?: string } = {}) {
  if (window.location.pathname !== to) {
    window.history.pushState({}, '', to)
    window.dispatchEvent(new Event(EVENT))
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }
  if (opts.scrollTo) {
    // wait for the new page to render, then scroll
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(opts.scrollTo!)?.scrollIntoView({ behavior: 'smooth' })
      })
    })
  }
}

/** Go to a homepage section from anywhere. */
export function goToSection(id: string) {
  if (window.location.pathname === '/') {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    navigate('/', { scrollTo: id })
  }
}

export function useRoute() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const sync = () => setPath(window.location.pathname)
    window.addEventListener('popstate', sync)
    window.addEventListener(EVENT, sync)
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener(EVENT, sync)
    }
  }, [])

  return path.replace(/\/+$/, '') || '/'
}
