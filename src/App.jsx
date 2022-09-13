import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Project from './components/project/Project'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
       <Header />
       <Nav />
       <About />
       <Skills />
       <Project />
       <Testimonials />
       <Contact />
       <Footer />
    </>
  )
}

export default App