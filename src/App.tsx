import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <main className="bg-white max-w-6xl mx-auto p-10 shadow-lg rounded-xl min-h-screen">
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </main>
        <Footer/>
    </>
  )
}

export default App
