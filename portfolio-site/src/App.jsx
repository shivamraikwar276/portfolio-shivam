
// import React from 'react'

import Contact from "./component/Contact"
import Education from "./component/Education"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import Projects from "./component/Projects"
import Skills from "./component/Skills"
import Experience from './component/Experience'
import About from './component/About'
import SmoothScrollerLenis from "./component/SmoothScrollerLenis"

const App = () => {
  return (
    <div>
    <SmoothScrollerLenis />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />
    <Footer />
    </div>
  )
}

export default App