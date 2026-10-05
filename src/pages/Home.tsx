import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Experience } from '../sections/Experience'
import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { Work } from '../sections/Work'

export function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      <About />
      <Experience />
      <Contact />
    </>
  )
}
