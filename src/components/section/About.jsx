function About(){
    return(
       <div id="about" className="xl:grid grid-cols-2 bg-light-azure p-20  xl:p-40 border-b-2 border-b-white/30 ">
        <div>
            <h1 className="xl:text-4xl/relaxed font-prata xl:pt-20 pt-2r0 text-center text-3xl"> I do my best work on problems <br />I believe in.I’m looking for the next one</h1>
            <p className="font-josefin xl:text-3xl/snug pt-3  text-grey-brown font-light text-center">I turn complex problems into clean, responsive web apps.Building high-performance single-page applications using the MERN ecosystem</p>

        </div>
        <div className="flex items-center justify-center  max-xl:hidden">
            <div className="w-90 h-90 bg-gray-600 rounded-full flex justify-center items-center">
                <div className="w-88 h-88 bg-white rounded-full flex justify-center items-center" >
                    <div className="w-84 h-84 bg-gray-600 rounded-full  ">
                        <div className="w-80 h-80 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default About;