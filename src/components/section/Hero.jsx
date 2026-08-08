import { ArrowUpRight } from "lucide-react";

function Hero(){
    return(
        <>
        <div className="sm:pt-12 pt-2 bg-light-blue pl-3 xl:pb-60  pb-20 border-b-2 border-b-white/30 min-w-full">
            <h1 className="xl:text-6xl/relaxed sm:text-4xl/relaxed font-prata pt-20 text-2xl ">FULL STACK <br />WEB DEVELOPER</h1>
            <p className="font-josefin sm:text-2xl/snug pt-3 text-lg text-grey-brown font-light">I turn complex problems into clean, responsive web apps <br/>Building high-performance single-page applications using the MERN <br />ecosystem</p>
            <div className="flex flex-row">
            <button className="sm:text-xl font-josefin  font-light mr-12 mt-10 bg-black text-white px-4 py-2 rounded-3xl flex flex-row">view projects   <ArrowUpRight/></button>
            <button className="sm:text-xl font-josefin mt-10 border-2 rounded-3xl  font-light  px-3 border-black">get in touch</button>
            </div>
        </div>
        <div className="hidden xl:block">
        <div className='  h-60 w-40 bg-navy-deep absolute  rounded-2xl rotate-40 top-50 right-20 flex justify-center items-center'><img src='/wanderlust.png' className='rounded-2xl w-full  h-full object-cover border-navy-deep border-2  '/></div>
        <div className='  h-60 w-40 bg-navy-deep absolute top-40 right-100 rounded-2xl rotate-135'><img src='/wanderlust.png' className='rounded-2xl w-full  h-full object-cover border-navy-deep border-2  rotate-180 '/></div>
        <div className='  h-60 w-40 bg-navy-deep absolute right-42 bottom-30 rounded-2xl rotate-45'><img src='/wanderlust.png' className='rounded-2xl w-full  h-full object-cover border-navy-deep border-2 '/></div>
        </div>
        </>
     
    )
}

export default Hero;