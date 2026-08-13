import { hover, motion, scale, spring } from "motion/react";
import { FileDown, Underline } from 'lucide-react';





function Navbar(){

    


    return(
       
       
        
        <motion.div

        initial={{y:28,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,ease:'easeOut'}}
        
        id="nav-container" className='bg-light-azure/90  flex justify-between sm:justify-between p-2 sticky top-0 right-0 border-white border z-100 items-center min-w-full'>
            <a href="#hero" className='font-josefin font-bold  text-xs lg:text-2xl max-lg:text-lg hidden sm:block'>RAKHESH R</a>
            <a href="#hero"><span className='font-josefin font-bold   lg:text-2xl hidden max-sm:block  text-xl mr-3 '>R</span></a>
            <div
             id="nav-links" className='flex gap-6 md:gap-16 font-roboto max-sm:text-xs text-lg lg:text-lg mx-auto'>
                <motion.a
                initial='rest'
                whileHover='hover'
                 href="#about" className="relative">ABOUT
                    <motion.div 
                    className="absolute left-0 bottom-0 w-full  h-0.5 bg-blue-950"
                   variants={{
                    rest:{width:0,opacity:0},
                    hover:{width:'100%',opacity:1}

                   }}
                   transition={{duration:0.3}}
                    
                     ></motion.div>
                </motion.a>
                <motion.a href="#skills" className="relative"  initial='rest'
                whileHover='hover'>SKILLS
                     <motion.div 
                    className="absolute left-0 bottom-0 w-full  h-0.5 bg-blue-950"
                   variants={{
                    rest:{width:0,opacity:0},
                    hover:{width:'100%',opacity:1}

                   }}
                   transition={{duration:0.3}}
                    
                     ></motion.div>
                </motion.a>
                <motion.a href="#projects" className="relative"  initial='rest'
                whileHover='hover'>PROJECTS
                     <motion.div 
                    className="absolute left-0 bottom-0 w-full  h-0.5 bg-blue-950"
                   variants={{
                    rest:{width:0,opacity:0},
                    hover:{width:'100%',opacity:1}

                   }}
                   transition={{duration:0.3}}
                    
                     ></motion.div>
                </motion.a>
                <motion.a href="#contact" className="relative" initial='rest'
                whileHover='hover'>CONTACT
                     <motion.div 
                    className="absolute left-0 bottom-0 w-full  h-0.5 bg-blue-950"
                   variants={{
                    rest:{width:0,opacity:0},
                    hover:{width:'100%',opacity:1}

                   }}
                   transition={{duration:0.3}}
                    
                     ></motion.div>
                </motion.a>
            </div>

        <motion.a href="./resume.pdf" download="rakheshr_resume.pdf" target="_blank" rel="noopener noreferrer" 
            whileHover={{scale:1.05,backgroundColor:'#253279',color:'white'}} 
            whileTap={{scale:0.95}}
            transition={{type:spring,stiffness:300,damping:20}}
             className='flex flex-row gap-1.5 border-2 border-white sm:rounded-3xl rounded-2xl ml-2 sm:text-xl md:p-2 max-md:p-1 font-josefin text-xs text-black font-light '>resume<FileDown className='max-sm:hidden'/></motion.a>
        </motion.div>
        
   
        
    )
}

export default Navbar;