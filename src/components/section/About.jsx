function About(){
    return(
       <div className="grid grid-cols-2 bg-light-azure p-40 border-b-2 border-b-white/30 ">
        <div>
            <h1 className="text-4xl/relaxed font-prata pt-20 text-center "> I do my best work on problems <br />I believe in.I’m looking for the next one</h1>
            <p className="font-josefin text-3xl/snug pt-3  text-grey-brown font-light text-center">I turn complex problems into clean, responsive web apps.Building high-performance single-page applications using the MERN ecosystem</p>

        </div>
        <div className="flex items-center justify-center">
            <div className="w-90 h-90 bg-gray-600 rounded-full"></div>
        </div>
       </div>
    )
}

export default About;