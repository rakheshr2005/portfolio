import skills from '../../data/skills';
import { Dot } from 'lucide-react';
import SkillCard from '../ui/SkillCard';


function Skills(){

    return(
       
    <div id='skills' className='xl:p-24 p-10 bg-light-blue pb-20 min-w-full'>
        <p className='text-xs mb-7'><Dot className='inline text-navy-deep '/>WHAT I WORK WITH</p>
        
        <h1 className="xl:text-5xl sm:text-3xl max-sm:text-xl font-prata mb-7">Skills and toolstack</h1>
        <p className='font-josefin text-2xl font-light text-grey-brown max-sm:text-sm'>a full stack toolkit built aroun the MERN ecosystem</p>

        <div className=' flex flex-row flex-wrap'>
        {skills.map((skillObj,key)=>{
            return <SkillCard num={skillObj.id} heading={skillObj.category} description={skillObj.description} skills={skillObj.tags} key={key}/>
        })

        }
        </div>
        
      </div>
    )
}

export default Skills;