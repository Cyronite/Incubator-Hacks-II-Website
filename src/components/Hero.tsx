"../assets/HeroImage.png"
import star from "../assets/star.png"
import HeroImage from "../assets/HeroImage.png";
export default function hero() {

    return (
        <>
        <div className="p-[5%] flex justify-between max-w-[1600px] mx-auto w-full max-lg:flex-col-reverse">
            <div id="Left" className=" mt-10 lg:mt-52">
                <div id="top">
                    <div className="modak text-[#333333] text-7xl max-lg:text-center max-[400px]:text-6xl">Incubator Hacks</div>
                    <div className="inter text-[#333333] text-2xl mb-[20px] max-w-[650px] max-lg:text-center max-lg:w-full max-lg:mx-auto">A 2-day long hackathon for complete beginners to explore technology and build a project. Winning project pitches receive technical guidance from mentors to continue developing their ideas after the event.</div>
                    <div className="max-lg:mx-auto max-lg:text-center">
                        <a href="#apply" className="bg-[#333333] text-[30px] no-underline w-[180px] px-[30px] py-[10px] inter border-[#333333] text-[white]  rounded-full border-4 text-center">Register Now</a>
                    </div>
                </div>
                <div id="bottom" className="flex gap-10 mt-28 max-[1430px]:mt-40 absolute max-[1300px]:hidden">
                    <div id="box1" className="p-5 w-60 bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        
                        <img src={star} alt="" />
                        <div className=" pt-[15px] inter text-[#333333] text-lg">Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</div>
                    </div>
                    <div id="box2" className=" -mt-10 mb-10 p-5 w-60 bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={star} alt="" />
                        <div className=" pt-[15px] inter text-[#333333] text-lg">Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</div>
                    </div>
                    <div id="box3" className="p-5 w-60 bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={star} alt="" />
                        <div className=" pt-[15px] inter text-[#333333] text-lg ">Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</div>
                    </div>
                </div>
            </div>
            <div id="Right" className="flex justify-center items-center ">
                <img src={HeroImage} alt="Hero" className="lg:h-[720px] lg:min-w-[626px] " />
            </div>
        </div>
        <div className="flex justify-center mt-10">
            <div className="flex gap-10 min-[1300px]:hidden max-[800px]:flex-wrap max-[800px]:justify-center">
                <div id="box1" className="p-5 w-60 bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={star} alt="" />
                        <div className=" pt-[15px] inter text-[#333333] text-lg">Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</div>
                    </div>
                    <div id="box2" className=" min-[800px]:-mt-10 min-[800px]:mb-10 p-5 w-60 bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={star} alt="" />
                        <div className=" pt-[15px] inter text-[#333333] text-lg">Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</div>
                    </div>
                    <div id="box3" className="p-5 w-60 bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={star} alt="" />
                        <div className=" pt-[15px] inter text-[#333333] text-lg">Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</div>
                    </div>
            </div>
        </div>
         
       </>
    );

}