import Nav from "./components/Nav";
import Circle from "./components/BgCircle";
import "./App.css";
import Hero from "./components/Hero";
import PolaroidSlider from "./components/About";
import Sponsor from "./components/Sponsor";
import FAQ from "./components/FAQ";
import MeetOurTeam from "./components/MeetOurTeam";
function App() {
  return (
    <>
      {/* Background Circles */}
      <Circle top="-300px" right="-1000px" size="2000px" color="#F2C94C90" />
      <Circle top="-700px" left="-500px" size="2000px" color="#F2C94C80" />
      <Circle top="-1500px" left="100px" size="2000px" color="#E5E50180" />
      <Circle top="500px" left="-500px" size="1500px" color="#685FD479" />
      <Nav />
      <Hero />
      <section id="about" className="w-full flex flex-col md:flex-row justify-between items-center py-10 px-2 bg-transparent min-h-[40vh] gap-8 md:gap-10">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-8 md:gap-10 mx-auto px-2 md:px-0">
          <div className="flex-1 flex flex-col justify-center items-center md:items-start md:pr-12 pr-0" style={{ maxWidth: '520px' }}>
            <h2 className="modak text-4xl md:text-6xl text-[#222] mb-6 md:mb-8 text-center md:text-left w-full whitespace-nowrap">About IncubatorHacks</h2>
            <p className="inter text-[#222] text-base md:text-xl leading-relaxed text-center md:text-left">
              IncubatorHacks is a dynamic 2-day tech conference designed for newcomers to dive into cutting-edge technologies, craft innovative project pitches, and compete for post-event mentorship. Participants collaborate to develop solutions using niche tools, with winning teams securing hands-on guidance from industry-experienced mentors to bring their ideas to life after the event.
            </p>
          </div>
          <div className="flex-shrink-0 flex justify-center md:justify-end items-center w-full md:w-auto mb-6 md:mb-0 md:ml-24 ml-0" style={{ marginTop: '-20px', flex: 1, minWidth: 0 }}>
            <PolaroidSlider />
          </div>
        </div>
      </section>
      <Sponsor />
      <section className="bg-[#ffeb9c]">
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <FAQ />
        </section>
      </section>
      <MeetOurTeam
  departments={[
    {
      name: "Logistics",
      members: [
        {
          name: "Prasun",
          image: "temp",
          linkedin: "https://linkedin.com/in/alice"
        },
        {
          name: "Bob",
          image: "/team/bob.jpg",
          linkedin: "https://linkedin.com/in/bob"
        }
      ]
    },
    {
      name: "Tech",
      members: [
        {
          name: "Charlie",
          image: "/team/charlie.jpg",
          linkedin: "https://linkedin.com/in/charlie"
        }
      ]
    }
  ]}
/>

    </>
  );
}

export default App;
