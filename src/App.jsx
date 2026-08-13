
import './App.css'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/section/About';
import Contact from './components/section/Contact';
import Hero from './components/section/Hero';
import Projects from './components/section/Projects';
import Skills from './components/section/Skills';

import {motion} from 'motion/react'



function App() {
  

  return (
    <motion.div

    

    

   

    >
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </motion.div>
  )
}

export default App
