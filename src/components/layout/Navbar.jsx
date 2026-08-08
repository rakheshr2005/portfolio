
import { MoveRight } from 'lucide-react';


function Navbar(){
    return(
       
        
        <div id="nav-container" className='bg-light-azure/90  flex justify-between sm:justify-between p-2 sticky top-0 right-0 border-white border z-100 items-center min-w-full'>
            <span className='font-josefin font-bold  text-xs lg:text-2xl max-lg:text-lg hidden sm:block'>RAKHESH R</span>
            <span className='font-josefin font-bold   lg:text-2xl hidden max-sm:block  text-xl mr-3 '>R</span>
            <div id="nav-links" className='flex gap-6 font-roboto max-sm:text-xs text-lg lg:text-lg'>
                <div>ABOUT</div>
                <div>SKILLS</div>
                <div>PROJECTS</div>
                <div>CONTACT</div>
            </div>
            <button className='flex flex-row gap-1.5 border-2 border-white sm:rounded-3xl rounded-2xl ml-2 sm:text-xl md:p-2 max-md:p-1 font-josefin text-xs text-black font-light '>resume<MoveRight className='max-sm:hidden'/></button>
        </div>
        
   
        
    )
}

export default Navbar;