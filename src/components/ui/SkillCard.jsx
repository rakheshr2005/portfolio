


function SkillCard({num,heading,description,skills}){

    return(
        <div className="xl:min-h-60 xl:w-1/4 sm:w-1/3  bg-light-orange flex items-center mt-7 justify-between max-sm:w-full ">
        <div className=" p-5 rounded-2xl border border-grey-brown xl:min-h-72 mr-5 shadow-sm sm:min-h-64 shadow-black max-sm:min-w-full  sm:h-fit ">
            <p className="font-roboto xl:text-xs pb-3 ">{num}</p>
            <h2 className="font-prata xl:text-2xl pb-3">{heading}</h2>
            <p className="text-lg font-josefin pb-3 text-grey-brown/70 font-light max-sm:text-xs max-lg:text-sm">{description}</p>
            <div className="flex flex-wrap">
            {skills.map((skill,index)=>{
                return(
                    <button key={index} className="border border-grey-brown rounded-2xl xl:h-8 xl:p-2 p-1 flex items-center justify-center max-xl:text-xs bg-light-orange mr-1 mb-1 xl:mr-3 xl:mb-3 ">{skill}</button>
                )
            })}
            </div>
        </div>
    </div>
    )
}


export default SkillCard;