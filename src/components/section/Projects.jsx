import projectsData from '../../data/projects';
import { Dot } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';



function Projects(){

    return(
       
    <div className='p-24 bg-light-azure pb-20 '>
        <p className='text-xs mb-7'><Dot className='inline text-navy-deep '/>SELECTED WORK</p>
        
        <h1 className="text-5xl font-prata mb-7">Projects i have built</h1>
        <p className='font-josefin text-2xl font-light text-grey-brown mb-12'>a mix of full stck builds , all built on the mern</p>
        <div className='flex flex-wrap mr-5 mb-5'>
         {projectsData.map((project)=>{
          return(
            <ProjectCard heading={project.heading} Desription={project.description} skills={project.skills}/>
          )
         })}
        </div>
         
      </div>
    )
}

export default Projects;