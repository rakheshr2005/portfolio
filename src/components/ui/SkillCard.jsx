


function SkillCard({num,heading,description,skills}){

    return(
        <div className="min-h-60 w-1/4 bg-light-orange flex  items-center mt-7 justify-between ">
        <div className=" p-5 rounded-2xl border border-grey-brown min-h-72 mr-5 shadow-sm shadow-black">
            <p className="font-roboto text-xs pb-3 ">{num}</p>
            <h2 className="font-prata text-2xl pb-3">{heading}</h2>
            <p className="text-lg font-josefin pb-3 text-grey-brown/70 font-light">{description}</p>
            <div className="flex flex-wrap">
            {skills.map((skill,index)=>{
                return(
                    <button key={index} className="border border-grey-brown rounded-2xl h-8 p-2 flex items-center justify-center bg-light-orange mr-3 mb-3">{skill}</button>
                )
            })}
            </div>
        </div>
    </div>
    )
}


export default SkillCard;