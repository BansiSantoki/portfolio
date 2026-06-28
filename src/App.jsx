import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Clients from './components/Clients.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Achievements from './components/Achievements.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Clients />
      <Projects />
      <Skills />
      <Achievements/>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
