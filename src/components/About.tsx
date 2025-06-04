import polaroid from "../assets/polaroid.png";
export default function Sponsors() {
return (
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
          <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto mb-8 md:mb-0 md:ml-8" style={{ marginTop: '-40px' }}>
            <img
              src={polaroid}
              alt="Incubator Hacks Polaroid"
              // className="w-40 md:w-56 h-auto object-contain bg-white p-6 rounded-xl"
              style={{ maxWidth: '400px' }}
            />
          </div>
        </div>
      </section>
)
}