
// import React from 'react'

import Contact from "./component/Contact"
import Education from "./component/Education"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import Projects from "./component/Projects"
import Skills from "./component/Skills"
import Cirtifications from "./component/Cirtifications"
import Experience from './component/Experience'
import About from './component/About'
import SmoothScrollerLenis from "./component/SmoothScrollerLenis"

const App = () => {
  return (
    <div
    className="bg-[#080e2a] text-white font-poppins scroll-smooth"
    >
    <SmoothScrollerLenis />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Cirtifications />
    <Experience />
    <Projects />
    <Education />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
