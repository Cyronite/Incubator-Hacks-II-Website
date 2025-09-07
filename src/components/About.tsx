import { useState } from 'react';
import coleads from '../assets/polariod/Coleads.png';
import working from '../assets/polariod/working.png';
import workshop from '../assets/polariod/workshop.png';
import portrait from '../assets/polariod/portrait.jpg';
import portrait2 from '../assets/polariod/portrait2.jpg';
import presentation from '../assets/polariod/presentation.jpg';
import working2 from '../assets/polariod/working2.jpg';
import workshop2 from '../assets/polariod/workshop2.jpg';
import organizers from '../assets/polariod/organizers.jpg';
import presentation2 from '../assets/polariod/presentation2.jpg';

const About = () => {
  const images = [coleads, working, workshop, portrait, portrait2, presentation, working2, workshop2, organizers, presentation2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="px-5 py-16 md:px-[5%] md:py-52
     max-w-[1600px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="flex-1 space-y-6 lg:space-y-8">
          <h1 className="modak text-[#333333] text-5xl sm:text-6xl md:text-7xl text-center lg:text-left leading-tight">
            About Incubator Hacks
          </h1>
          <p className="inter text-[#333333] text-lg sm:text-xl md:text-2xl max-w-[650px] mx-auto lg:mx-0 text-center lg:text-left leading-relaxed">
            Incubator Hacks is a climate-focused hackathon for high school students and no, you don't need to be a cracked coder to join. We started this event in Kitchener-Waterloo to bring something new to the local community: a space where students could tackle real environmental problems, supported by people who care about the future of our planet.
          </p>
        </div>

        {/* Polaroid Gallery */}
        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
          <button 
            onClick={prevImage}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 active:scale-95 transition-all z-10"
            aria-label="Previous image"
          >
            <span className="text-2xl font-bold text-gray-700">&lt;</span>
          </button>
          
          <div className="polaroid-frame bg-white p-4 pb-8 shadow-2xl lg:rotate-3 transition-all duration-300 hover:shadow-xl hover:rotate-1">
            <div className="w-full h-64 sm:h-80 md:h-96 relative overflow-hidden">
              <img 
                src={images[currentImageIndex]} 
                alt="Incubator Hacks Event" 
                className="object-cover w-full h-full transition-opacity duration-300"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-2 left-0 right-0 text-center text-sm text-white">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
          
          <button 
            onClick={nextImage}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 active:scale-95 transition-all z-10"
            aria-label="Next image"
          >
            <span className="text-2xl font-bold text-gray-700">&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;