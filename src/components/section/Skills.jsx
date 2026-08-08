import skills from '../../data/skills';
import { Dot } from 'lucide-react';
import SkillCard from '../ui/SkillCard';


function Skills(){

    return(
       
    <div className='p-24 bg-light-orange pb-20'>
        <p className='text-xs mb-7'><Dot className='inline text-navy-deep '/>WHAT I WORK WITH</p>
        
        <h1 className="text-5xl font-prata mb-7">Skills and toolstack</h1>
        <p className='font-josefin text-2xl font-light text-grey-brown'>a full stack toolkit built aroun the MERN ecosystem</p>

        <div className=' flex flex-row flex-wrap'>
        {skills.map((skillObj)=>{
            return <SkillCard num={skillObj.id} heading={skillObj.category} description={skillObj.description} skills={skillObj.tags} />
        })

        }
        </div>
        
      </div>
    )
}

export default Skills;