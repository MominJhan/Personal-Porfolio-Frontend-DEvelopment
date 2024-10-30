
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Service from './components/Service'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Projects />
        <Portfolio/>
        <Contact />
        <Footer />
    </div>
  )
}

export default App
