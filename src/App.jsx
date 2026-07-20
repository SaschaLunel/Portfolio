import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Design from './components/Design.jsx'
import Photography from './components/Photography.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { useReveal } from './useReveal.js'

const SECTIONS = ['hero', 'design', 'photography', 'about', 'contact']

export default function App() {
  const [active, setActive] = useState('hero')
  const sectionRefs = useRef({})

  const [heroRef, heroVisible] = useReveal(0.4)
  const [designRef, designVisible] = useReveal(0.15)
  const [photoRef, photoVisible] = useReveal(0.15)
  const [aboutRef, aboutVisible] = useReveal(0.15)
  const [contactRef, contactVisible] = useReveal(0.15)

  const refsMap = {
    hero: heroRef,
    design: designRef,
    photography: photoRef,
    about: aboutRef,
    contact: contactRef,
  }

  useEffect(() => {
    sectionRefs.current = refsMap
  })

  // Scrollspy: a section becomes active once it crosses the vertical
  // midline of the viewport. Using the midline (rather than a visibility
  // ratio like 50%) keeps this correct even for sections taller than the
  // viewport, e.g. Photography's grid can exceed 100vh on smaller screens.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0, rootMargin: '-50% 0px -50% 0px' },
    )

    SECTIONS.forEach((id) => {
      const el = refsMap[id]?.current
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNavigate = (id) => {
    const el = refsMap[id]?.current
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app">
      <Nav active={active} onNavigate={handleNavigate} />
      <main className="content">
        <Hero ref={heroRef} visible={heroVisible} onNavigate={handleNavigate} />
        <Design ref={designRef} visible={designVisible} />
        <Photography ref={photoRef} visible={photoVisible} />
        <About ref={aboutRef} visible={aboutVisible} />
        <Contact ref={contactRef} visible={contactVisible} />
      </main>
    </div>
  )
}
