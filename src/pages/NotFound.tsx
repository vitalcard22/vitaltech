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
            <h1 className="display" style={{ fontSize: 'clamp(2.5rem, 10vw, 8rem)' }}>
        Page not found
      </h1>
      <p className="lead">That address does not lead anywhere on this site.</p>
      <div>
        <Button variant="primary" to="/">
          Back to the homepage
        </Button>
      </div>
    </section>
  )
}
