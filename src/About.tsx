import HeroImage from './assets/HeroImage.png';

export default function About() {
  return (
    <section id="about" className="w-full flex justify-center items-center py-16 px-2 bg-transparent">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="modak text-5xl md:text-6xl text-[#222] mb-8 text-center md:text-left w-full">About Incubator Hacks</h2>
          <p className="inter text-[#222] text-lg md:text-xl leading-relaxed max-w-[38rem] text-left">
            Incubator Hacks is a dynamic 2-day tech conference designed for newcomers to dive into cutting-edge technologies, craft innovative project pitches, and compete for post-event mentorship. Participants collaborate to develop solutions using niche tools, with winning teams securing hands-on guidance from industry-experienced mentors to bring their ideas to life after the event.
          </p>
        </div>
      </div>
    </section>
  );
}
