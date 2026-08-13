import { motion } from "motion/react";


function About(){
    return(
       <motion.div

       
       
        id="about" className="xl:grid grid-cols-2 bg-light-blue p-20  xl:p-40  ">
        <motion.div 
        initial='initial'
        whileInView='inView'
        
        >
            <motion.h1

            variants={{
                initial:{y:200,opacity:0},
                inView:{y:0,opacity:1}
            }}
            transition={{duration:0.6,ease:'easeOut'}}
             className="xl:text-4xl/relaxed font-prata xl:pt-20 pt-2r0 text-center text-3xl"> I do my best work on problems <br />I believe in.I’m looking for the next one</motion.h1>
            <motion.p
            variants={{
                initial:{y:250,opacity:0},
                inView:{y:0,opacity:1}
            }}
            transition={{duration:0.8,ease:'easeOut'}}
             className="font-josefin xl:text-3xl/snug pt-3  text-grey-brown font-light text-center"> with a strong foundation in JavaScript, React, Node.js, and modern web technologies. Experienced in building responsive full-stack applications from scratch, managing databases with MongoDB, and deploying production-ready code. A fast learner who thrives in agile environments and is eager to solve complex engineering challenges.</motion.p>

        </motion.div>
        <div className="flex items-center justify-center  max-xl:hidden">
            <div className="w-90 h-90 bg-gray-600 rounded-full flex justify-center items-center">
                <div className="w-88 h-88 bg-white rounded-full flex justify-center items-center" >
                    <div className="w-84 h-84 bg-gray-600 rounded-full  ">
                        <div className="w-80 h-80 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
       </motion.div>
    )
}

export default About;