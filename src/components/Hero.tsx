import blueCloud from "../assets/BlueCloud.png";
import YellowHammer from "../assets/YellowHammer.png";
import GreenStar from "../assets/GreenStar.png";
import HeroImage from "../assets/HeroImage.png";
import { HashLink } from "react-router-hash-link";

export default function Hero() {

    return (
        <>
        <div className="p-[5%] flex justify-between max-w-[1600px] mx-auto w-full max-lg:flex-col-reverse">
            <div id="Left" className=" mt-10 lg:mt-52">
                <div id="top">
                    <div className="modak text-[#333333] text-7xl max-lg:text-center max-[400px]:text-6xl">Incubator Hacks</div>
                    <div className="inter text-[#333333] text-2xl mb-[20px] max-w-[650px] max-lg:text-center max-lg:w-full max-lg:mx-auto">A beginner-focused hackathon hosted in Kitchener-Waterloo on October 4-5, 2025. Day 1 (October 4) will be held in-person at United college in Kitchener-Waterloo, while Day 2 (October 5) will be online. It's a space for high school students to explore new technologies, team up, and create meaningful projects over the weekend.
                    </div>
                    <div className="max-lg:mx-auto max-lg:text-center">
                        <HashLink
                        smooth
                        to="/signin"
                        className="bg-[#333333] text-[30px] no-underline w-[180px] px-[30px] py-[10px] inter border-[#333333] text-[white]  rounded-full border-4 text-center relative group"
                        >
                        Apply Now
                        </HashLink>
                    </div>
                </div>
                <div id="bottom" className="flex gap-10 mt-28 max-[1430px]:mt-40 absolute max-[1300px]:hidden">
                    <div id="box1" className="p-5 w-60 bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                         <img src={blueCloud} alt="blue cloud" className="w-[50px]" />
                        <div className=" pt-[15px] inter text-[#333333] text-lg">We believe the best ideas serve the planet. That’s why our theme this year is centered on climate justice and ocean sustainability.</div>
                    </div>
                    <div id="box2" className=" -mt-10 mb-10 p-5 w-60 bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={YellowHammer} alt="blue cloud" className="w-[50px]" />
                        <div className=" pt-[15px] inter text-[#333333] text-lg">This hackathon was made for beginners. Whether you’ve coded before or are just getting curious, we’ll meet you where you’re at with workshops and mentorship.
</div>
                    </div>
                    <div id="box3" className="p-5 w-60 bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={GreenStar} alt="blue cloud" className="w-[50px]" />
                        <div className=" pt-[15px] inter text-[#333333] text-lg "> It’s more than just coding. We place a strong focus on ideation and strategic thinking, with the goal of creating solutions that address real issues and bring valuable impact.</div>
                    </div>
                </div>
            </div>
            <div id="Right" className="flex justify-center items-center ">
                <img src={HeroImage} alt="Hero" className="lg:h-[720px] lg:min-w-[626px] max-[500px]:h-[350px]" />
            </div>
        </div>
        <div className="flex justify-center mt-10">
            <div className="flex gap-10 min-[1300px]:hidden max-[800px]:flex-wrap max-[800px]:justify-center">
                <div id="box1" className="p-5 w-60 bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                         <img src={blueCloud} alt="blue cloud" className="w-[50px]" />
                        <div className=" pt-[15px] inter text-[#333333] text-lg">We believe the best ideas serve the planet. That’s why every project at Incubator Hacks challenges you to think about sustainability, climate justice, or conservation and how tech can help.</div>
                    </div>
                    <div id="box2" className=" min-[800px]:-mt-10 min-[800px]:mb-10 p-5 w-60 bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={YellowHammer} alt="blue cloud" className="w-[50px]" />
                        <div className=" pt-[15px] inter text-[#333333] text-lg">This hackathon was made for beginners. Whether you’ve coded before or are just getting curious, we’ll meet you where you’re at with workshops and mentorship.
</div>
                    </div>
                    <div id="box3" className="p-5 w-60 bg-[#ffffff3e] rounded-[20px] backdrop-blur-[3px] shadow-lg border-2 border-[white]">
                        <img src={GreenStar} alt="blue cloud" className="w-[50px]" />
                        <div className=" pt-[15px] inter text-[#333333] text-lg ">The most promising ideas shouldn’t end after the final pitch. Winning teams get matched with mentors to help them keep building after the hackathon wraps up.</div>
                    </div>
            </div>
        </div>
         
       </>
    );

}
