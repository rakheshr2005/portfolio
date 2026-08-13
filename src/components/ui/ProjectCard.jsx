
import { ArrowUpRight, Dot } from "lucide-react";
import { easeOut, motion } from "motion/react";

function ProjectCard({heading,Desription,skills}){

    return(
        <motion.div
         initial={{opacity:0,y:200}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6,ease:easeOut}}
        
        
        className="xl:max-h-80 xl:w-100 xl:m-5 m-3 max-sm:h-64 relative max-xl:max-h-72 max-xl:max-w-100">
            <motion.img
             
            src="/project.png" alt="" className="h-full w-full rounded-2xl contrast-60  shadow-inner shadow-black  border border-black" />
            <div className="absolute bottom-0 p-5 text-white bg-linear-to-t from-black/30  to-transparent rounded-b-2xl">
                <div className="font-prata text-lg font-bold flex flex-row">{heading}<ArrowUpRight/></div>
                <p className="text-sm font-josefin font-light">{Desription}</p>
                <ul className="flex flex-wrap pt-2 text-white font-prata  text-sm font-bold max-[900px]:hidden">
                {skills.map((skill,key)=>{
                    return(
                <div className="text-xs" key={key}>
                    <li className="mr-2 flex flex-row " key={key}><Dot/>{skill}</li>
                </div>)
                })}
                </ul>

            </div>
        </motion.div>
    )
}

export default ProjectCard;