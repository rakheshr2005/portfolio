
import { ArrowUpRight, Dot ,Mail,} from 'lucide-react';





function Contact(){

    return(
    <div className='grid grid-cols-2 p-24 bg-light-azure pb-20'>
        <div className=' '>
            <p className='text-xs mb-7'><Dot className='inline text-navy-deep '/>GET IN TOUCH</p>
            <h1 className="text-5xl font-prata mb-7">Lets build something</h1>
            <p className='font-josefin text-2xl font-light text-grey-brown mb-12'>Have a project in mind or just want to talk? my inbox is open</p>
            <p className='flex flex-row font-josefin'><Mail/>&nbsp;rrakhesh2005@gmail.com</p> <hr className='mb-5'/>
            <p className='font-josefin'><i className="fa-brands fa-github "></i>&nbsp;github.com/rakheshr</p> <hr className='mb-5'/>
            <p className='font-josefin'><i className="fa-brands fa-linkedin-in "></i>&nbsp;linkedin.com/in/rakheshr</p> <hr className='mb-5'/>
        </div>

            <div className='flex justify-center items-center '>
                <div className='w-120 border-2 p-10 rounded-2xl'>
                    <form action="">
                        <label htmlFor="name" className='text-sm'>NAME</label>
                        <input type="text" name="name" id="name" placeholder="Your Name" className='border-2 border-grey-brown w-full rounded-lg h-12 flex items-start justify-baseline'/><br /><br />
                        <label htmlFor="email" className='text-sm'>EMAIL</label>
                        <input type="email" name="email" id="email" placeholder="You@example.com" className='border-2 border-grey-brown w-full h-12 rounded-lg' /><br /><br />
                        <label htmlFor="message" className='text-sm'>MESSAGE</label>
                        <textarea name="message" id="message" placeholder='Tell Me About Your Project' className='border-2 border-grey-brown w-full h-32 rounded-lg '></textarea>
                        <div className='flex justify-center mt-3 '>
                            <button className='flex flex-row font-josefin bg-black rounded-3xl text-white h-12 w-1/2 justify-center items-center'>send message <ArrowUpRight/></button>
                        </div>
                    </form>
                </div>
            </div>
        
    </div>
    )
}

export default Contact;