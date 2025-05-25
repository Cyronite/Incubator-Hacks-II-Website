import Nav from "./components/Nav";
import Circle from "./components/BgCircle";
import "./App.css";
import logo from "./assets/IncubatorHacksLogo.svg";
import HeroImage from "./assets/HeroImage.png";
import MeetOurTeam from "./components/MeetOurTeam";
import Sponsor from "./Sponsor";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function App() {
  return (
    <>
      {/* Background Circles */}
      <Circle top="-300px" right="-1000px" size="2000px" color="#F2C94C90"/>
      <Circle top="-700px" left="-500px" size="2000px" color="#F2C94C80"/>
      <Circle top="-1500px" left="100px" size="2000px" color="#E5E50180"/>
      <Circle top="500px" left="-500px" size="1500px" color="#685FD479"/>
      <Nav />

      {/* Blank Landing Page */}
      <section className="min-h-[60vh] w-full bg-transparent flex items-center justify-center"></section>

      {/* About Section */}
      <section id="about" className="w-full flex justify-center items-center py-16 px-2 bg-transparent min-h-[40vh]">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Description on the left */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <h2 className="modak text-5xl md:text-6xl text-[#222] mb-8 text-left w-full">About Incubator Hacks</h2>
            <p className="inter text-[#222] text-lg md:text-xl leading-relaxed max-w-[38rem] text-left">
              Incubator Hacks is a dynamic 2-day tech conference designed for newcomers to dive into cutting-edge technologies, craft innovative project pitches, and compete for post-event mentorship. Participants collaborate to develop solutions using niche tools, with winning teams securing hands-on guidance from industry-experienced mentors to bring their ideas to life after the event.
            </p>
          </div>
          {/* Logo on the right */}
          <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto mb-8 md:mb-0 md:ml-8">
            <img
              src={logo}
              alt="Incubator Hacks Logo"
              className="w-40 md:w-56 h-auto object-contain bg-white p-6 rounded-xl"
              style={{ maxWidth: '220px' }}
            />
          </div>
        </div>
      </section>


      {/* Sponsors Section - Use Sponsor component */}
      <Sponsor />
    </>
  )
}

export default App