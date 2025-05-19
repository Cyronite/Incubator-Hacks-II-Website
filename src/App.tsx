import Nav from './components/Nav'
import Circle from './components/BgCircle'
import './App.css';
import logo from './assets/IncubatorHacksLogo.svg';
import HeroImage from './assets/HeroImage.png';

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
        <div className="w-full max-w-6xl flex flex-col items-center gap-10">
          <div className="flex-1 flex flex-col justify-center items-center">
            <h2 className="modak text-5xl md:text-6xl text-[#222] mb-8 text-center w-full">About Incubator Hacks</h2>
            <p className="inter text-[#222] text-lg md:text-xl leading-relaxed max-w-[38rem] text-center">
              Incubator Hacks is a dynamic 2-day tech conference designed for newcomers to dive into cutting-edge technologies, craft innovative project pitches, and compete for post-event mentorship. Participants collaborate to develop solutions using niche tools, with winning teams securing hands-on guidance from industry-experienced mentors to bring their ideas to life after the event.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-[#FFF6C3] py-12 px-6 md:px-24">
        <h2 className="modak text-6xl md:text-7xl text-[#242424] text-center mb-12">Our Sponsors</h2>
        <div className="grid grid-cols-2 gap-8 justify-items-center">
          <img src="src/assets/youthcreativityfund.png" alt="Youth Creativity Fund" className="w-24 h-auto object-contain bg-white rounded-xl shadow-md p-1" />
          <img src="src/assets/kitchenercity.png" alt="City of Kitchener" className="w-24 h-auto object-contain bg-white rounded-xl shadow-md p-1" />
        </div>
      </section>
    </>
  )
}

export default App
