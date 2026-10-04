import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { Skills } from '../sections/Skills'
import { Work } from '../sections/Work'

export function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      <About />
      <Skills />
      <Contact />
    </>
  )
}
