import Nav from "./components/Nav";
import Circle from "./components/BgCircle";
import "./App.css";
import logo from "./assets/IncubatorHacksLogo.svg";
import HeroImage from "./assets/HeroImage.png";
import MeetOurTeam2 from "./components/MeetOurTeam2";

import Faq from "./components/Faq";

function App() {
  return (
    <>
      {/* Background Circles */}
      <Circle top="-300px" right="-1000px" size="2000px" color="#F2C94C90" />
      <Circle top="-700px" left="-500px" size="2000px" color="#F2C94C80" />
      <Circle top="-1500px" left="100px" size="2000px" color="#E5E50180" />
      <Circle top="500px" left="-500px" size="1500px" color="#685FD479" />
      <Nav />

      {/* Blank Landing Page */}
      <section className="min-h-[60vh] w-full bg-transparent flex items-center justify-center"></section>

      {/* About Section */}
      <section
        id="about"
        className="w-full flex justify-center items-center py-16 px-2 bg-transparent min-h-[40vh]"
      >
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Description on the left */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <h2 className="modak text-5xl md:text-6xl text-[#222] mb-8 text-left w-full">
              About Incubator Hacks
            </h2>
            <p className="inter text-[#222] text-lg md:text-xl leading-relaxed max-w-[38rem] text-left">
              Incubator Hacks is a dynamic 2-day tech conference designed for
              newcomers to dive into cutting-edge technologies, craft innovative
              project pitches, and compete for post-event mentorship.
              Participants collaborate to develop solutions using niche tools,
              with winning teams securing hands-on guidance from
              industry-experienced mentors to bring their ideas to life after
              the event.
            </p>
          </div>
          {/* Logo on the right */}
          <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto mb-8 md:mb-0 md:ml-8">
            <img
              src={logo}
              alt="Incubator Hacks Logo"
              className="w-40 md:w-56 h-auto object-contain bg-white p-6 rounded-xl"
              style={{ maxWidth: "220px" }}
            />
          </div>
        </div>
      </section>

      {/* Vector Divider - Adjusted margins */}
      <div className="w-full flex justify-center items-center mt-40 mb-0">
        {" "}
        {/* Increased mt-20 to mt-40 for more space above */}
        <img
          src="src/assets/Vector (2).png"
          alt="Divider"
          className="w-40 md:w-64 h-auto"
        />
      </div>

      {/* Sponsors Section - Adjusted padding */}
      <section className="bg-[#ffeb9c] pt-24 pb-12 px-6 md:px-24">
        <h2 className="modak text-6xl md:text-7xl text-[#242424] text-center mb-12">
          Our Sponsors
        </h2>
        <div className="grid grid-cols-2 gap-8 justify-items-center">
          <img
            src="src/assets/youthcreativityfund.png"
            alt="Youth Creativity Fund"
            className="w-16 h-auto object-contain bg-white rounded-xl shadow-md p-1"
          />
          <img
            src="src/assets/kitchenercity.png"
            alt="City of Kitchener"
            className="w-16 h-auto object-contain bg-white rounded-xl shadow-md p-1"
          />
        </div>
      </section>
      <section className="bg-[#ffeb9c]">
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <Faq />
        </section>
      </section>
      <div className="relative">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffeb9c"
          ></path>
        </svg>
      </div>

      <section className="mt-20">
        <MeetOurTeam2></MeetOurTeam2>
      </section>
    </>
  );
}

export default App;
