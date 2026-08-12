import { hover, motion, scale, spring } from "motion/react";
import { FileDown } from 'lucide-react';



function Navbar(){
    return(
       
        
        <div id="nav-container" className='bg-light-azure/90  flex justify-between sm:justify-between p-2 sticky top-0 right-0 border-white border z-100 items-center min-w-full'>
            <a href="hero" className='font-josefin font-bold  text-xs lg:text-2xl max-lg:text-lg hidden sm:block'>RAKHESH R</a>
            <span className='font-josefin font-bold   lg:text-2xl hidden max-sm:block  text-xl mr-3 '>R</span>
            <motion.div 
                
            id="nav-links" className='flex gap-6 font-roboto max-sm:text-xs text-lg lg:text-lg'>
                
                <a href="#about">ABOUT</a>
                    
                   
                <a href="#skills">SKILLS</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact">CONTACT</a>
            </motion.div>

        <motion.a href="./resume.pdf" download="rakheshr_resume.pdf" target="_blank" rel="noopener noreferrer" 
            whileHover={{scale:1.05,backgroundColor:'#253279',color:'white'}} 
            whileTap={{scale:0.95}}
            transition={{type:spring,stiffness:300,damping:20}}
             className='flex flex-row gap-1.5 border-2 border-white sm:rounded-3xl rounded-2xl ml-2 sm:text-xl md:p-2 max-md:p-1 font-josefin text-xs text-black font-light '>resume<FileDown className='max-sm:hidden'/></motion.a>
        </div>
        
   
        
    )
}

export default Navbar;