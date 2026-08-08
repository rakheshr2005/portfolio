
import { MoveRight } from 'lucide-react';


function Navbar(){
    return(
       
        
        <div id="nav-container" className='bg-light-azure/90  flex justify-between p-2 sticky top-0 right-0 border-white border z-100 items-center'>
            <span className='font-josefin font-bold text-2xl'>RAKHESH R</span>
            <div id="nav-links" className='flex gap-6 font-roboto'>
                <div>ABOUT</div>
                <div>SKILLS</div>
                <div>PROJECTS</div>
                <div>CONTACT</div>
            </div>
            <button className='flex flex-row gap-1.5 border-2 border-white rounded-3xl text-xl p-2 font-josefin  text-black font-light '>resume<MoveRight/></button>
        </div>
        
   
        
    )
}

export default Navbar;