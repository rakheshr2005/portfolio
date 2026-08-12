
import './App.css'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/section/About';
import Contact from './components/section/Contact';
import Hero from './components/section/Hero';
import Projects from './components/section/Projects';
import Skills from './components/section/Skills';



function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
