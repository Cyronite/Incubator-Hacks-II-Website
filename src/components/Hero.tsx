import HeroImage from "../assets/HeroImage.png"
import star from "../assets/star.png"
export default function hero() {

    return (
        <>
        <div className="w-[100vw]">
        <div className="flex mx-auto px-[5%] justify-between max-w-[1400px]">
            <div id="leftside ">
                <div id="top" className="flex flex-col pt-[15%] w-[650px]">
                    <div className="modak text-[#333333] text-[70px]">Incubator Hacks</div>
                    <div className="inter text-[#333333] text-[25px] mb-[20px]">A 2-day long hackathon for complete beginners to explore technology and build a project. Winning project pitches receive technical guidance from mentors to continue developing their ideas after the event.</div>
                    <a href="#apply" className="bg-[#333333] text-[30px] no-underline w-[180px] px-[30px] py-[10px] inter border-[#333333] text-[white]  rounded-full border-4">Register Now</a>
                </div>
                 <div id="bottom" className="flex gap-[50px] mt-[150px] absolute">
                    <div id="box1" className=" p-[20px] w-[200px] bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={star} alt="" />
                        <div className=" pt-[15px] inter text-[#333333] text-[20px]">Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</div>
                    </div>
                    <div id="box1" className="mb-[50px] mt-[-50px] p-[20px] w-[200px] bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={star} alt="" />
                        <div className=" pt-[15px] inter text-[#333333] text-[20px]">Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</div>
                    </div>
                    <div id="box1" className="p-[20px] w-[200px] bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={star} alt="" />
                        <div className=" pt-[15px] inter text-[#333333] text-[20px]">Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</div>
                    </div>
                </div>
            </div>
            {/* <div id="leftSide" className="flex flex-col justify-between pt-[5%]">
                <div id="top" className="flex flex-col gap-[5px]">
                    <div className="modak text-[#333333] text-[70px]">Incubator Hacks</div>
                    <div className="inter text-[#333333] text-[25px] mb-[20px]">A 2-day long hackathon for complete beginners to explore technology and build a project. Winning project pitches receive technical guidance from mentors to continue developing their ideas after the event.</div>
                    <a href="#apply" className="bg-[#333333] text-[30px] no-underline w-[180px] px-[30px] py-[10px] inter border-[#333333] text-[white]  rounded-full border-4">Register Now</a>
               
                </div>
                 <div id="bottom" className="flex gap-[20px]">
                    <div id="box1" className=" p-[20px] w-[175px] bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={star} alt="" />
                        <div className=" pt-[15px] inter text-[#333333] text-[20px]">Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</div>
                    </div>
                    <div id="box1" className=" p-[20px] w-[175px] bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={star} alt="" />
                        <div className=" pt-[15px] inter text-[#333333] text-[20px]">Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</div>
                    </div>
                    <div id="box1" className=" p-[20px] w-[175px] bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={star} alt="" />
                        <div className=" pt-[15px] inter text-[#333333] text-[20px]">Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</div>
                    </div>
                </div>
                
            </div> */}
            <div id="rightSide">
                <img src={HeroImage} alt="image" className="w-[100%]" />
            </div>
        </div>
        </div> 
        </>
    );

}