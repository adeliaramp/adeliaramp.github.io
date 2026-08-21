import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Timeline />
        <Skills />
        <About />
        <Blog />
        <Contact />
      </main>
    </>
  )
}
