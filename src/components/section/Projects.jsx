import projectsData from '../../data/projects';
import { Dot } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';



function Projects(){

    return(
       
    <div id='projects' className='xl:p-24 p-10 bg-light-azure xl:pb-20 '>
        <p className='text-xs mb-7'><Dot className='inline text-navy-deep '/>SELECTED WORK</p>
        
        <h1 className="text-5xl font-prata mb-7">Projects i have built</h1>
        <p className='font-josefin text-2xl font-light text-grey-brown mb-12'>a mix of full stck builds , all built on the mern</p>
        <div className='xl:flex sm:grid grid-cols-2  xl:flex-wrap  xl:mr-5 xl:mb-5 max-sm:grid max-sm:grid-cols-1 '>
         {projectsData.map((project,key)=>{
          return(
            <ProjectCard heading={project.heading} Desription={project.description} skills={project.skills} key={key}/>
          )
         })}
        </div>
         
      </div>
    )
}

export default Projects;