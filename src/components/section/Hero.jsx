import {easeOut, motion, scale} from 'motion/react'
import { ArrowUpRight } from "lucide-react";

function Hero(){
    return(
        <>
        <div id='hero' className="sm:pt-12 pt-2 bg-light-blue pl-3 xl:pb-60  pb-20  min-w-full">
            <motion.h1
            initial={{y:-40,opacity:0.2}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.8,ease:'easeout'}}
             className="xl:text-6xl/relaxed sm:text-4xl/relaxed font-prata pt-20 text-2xl ">FULL STACK <br />WEB DEVELOPER</motion.h1>
            <motion.p 
            initial={{y:100,opacity:0.2}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.5,ease:'easeOut'}}
            className="font-josefin sm:text-2xl/snug pt-3 text-lg text-grey-brown font-light">I turn complex problems into clean, responsive web apps <br/>Building high-performance single-page applications using the MERN <br />ecosystem</motion.p>
            <div className="flex flex-row">
            <motion.a href='#projects'
            
             whileHover={{scale:1.05,opacity:1.0,color:'white'}}
             whileTap={{scale:0.95}}
              className="sm:text-xl font-josefin  font-light mr-12 mt-10 bg-black text-white px-4 py-2 rounded-3xl flex flex-row">view projects   <ArrowUpRight className="max-lg:size-4"/></motion.a>
            <motion.a href='#contact'
            initial={{opacity:0.5}}
            
            
            whileHover={{scale:1.05,backgroundColor:'#705525',opacity:1.0,color:'white'}}
            whileTap={{scale:0.95}}
            className="sm:text-xl font-josefin mt-10 border-2 rounded-3xl  font-light  px-3 border-black flex justify-center items-center">get in touch</motion.a>
            </div>
        </div>
        <div className="hidden xl:block">
        <motion.a drag dragConstraints={{top:0,left:0,right:0,bottom:800}} href="https://wanderlust-vwq6.onrender.com" target='_blank'><motion.div drag  dragConstraints={{top:0,left:0,right:0,bottom:800}} className='  h-60 w-40 bg-navy-deep absolute  rounded-2xl rotate-40 top-50 right-20 flex justify-center items-center '><img src='/wanderlus.png' alt='COMMING SOON' className='rounded-2xl text-white w-full  h-full object-cover border-navy-deep border-2  '/></motion.div></motion.a>
        <motion.a drag  dragConstraints={{top:0,left:0,right:0,bottom:800}}  href="https://wanderlust-vwq6.onrender.com" target='_blank' className='  h-60 w-40 bg-navy-deep absolute top-40 right-100 rounded-2xl rotate-135 shadow-2xl  shadow-cyan-950'><img src='/wanderlust.png' alt='COMMING SOON' className='rounded-2xl w-full  h-full object-cover border-navy-deep border-2  rotate-180 '/></motion.a>
        <motion.a drag dragConstraints={{top:0,left:0,right:0,bottom:800}}  href="https://wanderlust-vwq6.onrender.com" target='_blank' className='  h-60 w-40 bg-navy-deep absolute right-42 bottom-30 rounded-2xl rotate-45 shadow-2xl  shadow-cyan-950'><img src='/wanderlut.png' alt='COMMING SOON'  className='rounded-2xl w-full text-white h-full object-cover border-navy-deep border-2 '/></motion.a>
        </div>
        </>
     
    )
}

export default Hero;