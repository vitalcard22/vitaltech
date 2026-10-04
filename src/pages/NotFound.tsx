import { useEffect } from 'react'
import { Button } from '../components/Button'

export function NotFound() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Page not found'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <section className="container" style={{ minHeight: '80svh', display: 'grid', alignContent: 'center', gap: 32 }}>
      <p className="label">404</p>
      <h1 className="display" style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}>
        Page not <span className="serif">found</span>
      </h1>
      <div>
        <Button variant="primary" arrow="right" to="/">
          Back home
        </Button>
      </div>
    </section>
  )
}
