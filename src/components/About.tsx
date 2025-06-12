import React, { useState } from 'react';
import coleads from '../assets/coleads.JPG';
import working from '../assets/working.JPG';
import workshop from '../assets/workshop.png';

const About = () => {
  const images = [coleads, working, workshop];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="p-[5%] mt-[5%] flex justify-between max-w-[1600px] mx-auto w-full max-lg:flex-col pt-32">
        <div id="Left" className="flex-1 min-w-0">
          <div className="modak text-[#333333] text-7xl max-lg:text-center max-[400px]:text-6xl">About Incubator Hacks</div>
          <div className="inter text-[#333333] text-2xl mb-[20px] max-w-[650px] max-lg:max-w-full max-lg:text-center max-lg:mx-auto">
            A 2-day long hackathon for complete beginners to explore technology and build a project. Winning project pitches receive technical guidance from mentors to continue developing their ideas after the event.
          </div>
        </div>
        
        <div className="flex-shrink-0 flex justify-center items-center mb-6 md:mb-0 md:ml-24 ml-0" style={{ flex: '0 0 auto' }}>
          <div className="relative">
            <button 
              className="max-lg:translate-x-1/2 absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors z-10"
              onClick={prevImage}
            >
              <span className="text-2xl font-bold text-gray-700">&lt;</span>
            </button>
            
            <div className="polaroid-frame bg-white p-4 shadow-2xl  lg:rotate-6 max-[1024]:w-[450px] h-[350px] flex items-center justify-center">
              <img 
                src={images[currentImageIndex]} 
                alt="Incubator Hacks Event" 
                className="object-cover w-full h-full border-2 border-b-32 border-white"
              />
            </div>
            
            <button 
              className="absolute right-0 top-1/2 transform max-lg:-translate-x-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors z-10"
              onClick={nextImage}
            >
              <span className="text-2xl font-bold text-gray-700">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;