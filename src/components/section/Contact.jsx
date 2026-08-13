import {motion} from 'motion/react'
import { ArrowUpRight, Dot ,Mail,} from 'lucide-react';
import { useRef } from 'react';

import emailjs from '@emailjs/browser';






function Contact(){

const form = useRef();

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    if(!form.current.from_name.value || !form.current.from_email.value ||!form.current.message.value){
      return alert('some fields are missing');
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('message sent successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    

    return(
    <motion.div
   


    id='contact' className='grid max-sm:grid-cols-1 grid-cols-2 max-xl:gap-7 xl:grid-cols-2 xl:p-24 p-12 bg-light-blue pb-20'>
        <div className=' '>
            <p className='text-xs mb-7'><Dot className='inline text-navy-deep '/>GET IN TOUCH</p>
            <h1 className="xl:text-5xl text-4xl font-prata mb-7">Lets build something</h1>
            <p className='font-josefin xl:text-2xl text-xl max-sm:text-lg font-light text-grey-brown mb-12'>Have a project in mind or just want to talk? my inbox is open</p>
            <p className='flex flex-row font-josefin'><Mail/>&nbsp;rakheshr2005@gmail.com</p> <hr className='mb-5'/>
            <a href='https://github.com/rakheshr2005' className='font-josefin'><i className="fa-brands fa-github "></i>&nbsp;github.com/rakheshr2005</a> <hr className='mb-5'/>
            <a href='https://www.linkedin.com/in/rakhesh-r-8a3406240/' className='font-josefin'><i className="fa-brands fa-linkedin-in "></i>&nbsp;rlinkedin.com/in/rakhesh-r-8a3406240/</a> <hr className='mb-5'/>
        </div>

            <motion.div 
            
            initial={{opacity:0,y:200}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6,ease:'easeOut'}}
            
            className='flex justify-center items-center '>
                
                    <div className='w-120 border-2 p-10 rounded-2xl'>
                            <form action="" onSubmit={sendEmail} ref={form}>
                                <label htmlFor="name" className='max-lg:text-xs'>NAME</label>
                                <input type="text" name="from_name" id="name" placeholder="Your Name" className='border-2 border-grey-brown w-full rounded-lg xl:h-12 flex items-start justify-baseline max-lg:text-sm'/><br /><br />
                                <label htmlFor="email" className='max-lg:text-xs'>EMAIL</label>
                                <input type="email" name="from_email" id="email" placeholder="You@example.com" className='border-2 border-grey-brown w-full xl:h-12 rounded-lg max-lg:text-sm' /><br /><br />
                                <label htmlFor="message" className='max-lg:text-xs'>MESSAGE</label>
                                <textarea name="message" id="message" placeholder='Tell Me About Your Project' className='border-2 border-grey-brown w-full xl:h-32 rounded-lg max-lg:text-xs '></textarea>
                                <div className='flex justify-center mt-3 '>
                                    <motion.button type='submit'
                                    whileHover={{scale:1.05}}
                                    whileTap={{scale:0.95}}
                                    className='flex flex-row font-josefin bg-navy-deep rounded-3xl text-white xl:h-12 xl:w-1/2 p-2 max-lg:text-sm justify-center items-center'>send message <ArrowUpRight  size={13}/></motion.button>
                                </div>
                            </form>
                    </div>
                
            </motion.div>
        
        </motion.div>
    )
}

export default Contact;