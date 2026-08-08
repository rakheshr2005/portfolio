
import { ArrowUpRight, Dot } from "lucide-react";

function ProjectCard({heading,Desription,skills}){

    return(
        <div className="xl:max-h-80 xl:w-100 xl:m-5 m-3 max-sm:h-64 relative max-xl:max-h-72 max-xl:max-w-100">
            <img src="/wanderlust.png" alt="" className="h-full w-full rounded-2xl contrast-50 shadow-inner shadow-black  border border-black" />
            <div className="absolute bottom-0 p-5 text-white bg-linear-to-t from-black  to-transparent/5 rounded-b-2xl">
                <div className="font-prata text-lg font-bold flex flex-row">{heading}<ArrowUpRight/></div>
                <p className="text-sm font-josefin font-light">{Desription}</p>
                <ul className="flex flex-wrap pt-2 text-white text-sm font-light ">
                {skills.map((skill)=>{
                    return(
                <div className="text-xs">
                    <li className="mr-2 flex flex-row "><Dot/>{skill}</li>
                </div>)
                })}
                </ul>

            </div>
        </div>
    )
}

export default ProjectCard;