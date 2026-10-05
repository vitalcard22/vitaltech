import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { useRoute } from './hooks/useRoute'
import { CaseStudy } from './pages/CaseStudy'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

export default function App() {
  const path = useRoute()

  let page
  if (path === '/') page = <Home />
  else if (path.startsWith('/work/')) page = <CaseStudy key={path} slug={path.slice('/work/'.length)} />
  else page = <NotFound />

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="page" key={path}>
        {page}
      </main>
      <Footer />
    </>
  )
}
