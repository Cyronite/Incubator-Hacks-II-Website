import logo from '../assets/IncubatorHacksLogo.svg';
import { useState, useEffect } from 'react';
import { motion, MotionConfig } from 'framer-motion';

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center px-[25px] md:px-[100px] py-[10px] bg-[white]/10 backdrop-blur-[3px] shadow-lg relative z-50">
        <div id="leftside" className='flex gap-[10px] items-center'>
          <img src={logo} alt="Logo" className="h-[60px] w-[60px] md:h-[100px] md:w-[100px]" />
          <h1 className='inter text-[18px] md:text-[25px] text-[#f9c74f]'>Incubator Hacks</h1>
        </div>
        
        {!isMobile ? (
          <div id="rightside" className='flex gap-[12px] inter'>
            <a href="#about" className='text-[16px] md:text-[20px] no-underline text-[#f9c74f] p-[10px] transition-colors duration-300 ease-in-out hover:text-[#FFB300]'>About</a>
            <a href="#about" className='text-[16px] md:text-[20px] no-underline text-[#f9c74f] p-[10px] transition-colors duration-300 ease-in-out hover:text-[#FFB300]'>Sponsors</a>
            <a href="#about" className='text-[16px] md:text-[20px] no-underline text-[#f9c74f] p-[10px] transition-colors duration-300 ease-in-out hover:text-[#FFB300]'>FAQ</a>
            <a href="#about" className='text-[16px] md:text-[20px] no-underline text-[#f9c74f] p-[10px] transition-colors duration-300 ease-in-out hover:text-[#FFB300]'>The Team</a>
            <a href="#contact" className="special-button">Apply</a>
          </div>
        ) : (
          <MotionConfig transition={{ duration: 0.2 }}>
            <motion.button 
              initial={false} 
              animate={active ? "open" : "closed"} 
              onClick={() => setActive(!active)}
              className='relative h-[18px] w-[26px] bg-[white]/0 border-0'
            >
              <motion.div 
                variants={{
                  open: { top: ["0px", "9px", "9px"], rotate: ["0deg", "0deg", "45deg"] },
                  closed: { top: ["9px", "9px", "0px"], rotate: ["45deg", "0deg", "0deg"] } 
                }} 
                style={{ position: 'absolute', top: "0" }} 
                className='w-[26px] border-2 border-[#f9c74f] rounded-full'
              />
              <motion.div 
                variants={{
                  open: { rotate: ["0deg", "0deg", "-45deg"] },
                  closed: { rotate: ["-45deg", "0deg", "0deg"] } 
                }} 
                style={{ position: 'absolute', top: "9px" }} 
                className='w-[26px] border-2 border-[#f9c74f] rounded-full'
              />
              <motion.div 
                variants={{
                  open: { top: ["18px", "9px", "9px"], rotate: ["0deg", "0deg", "-45deg"] },
                  closed: { top: ["9px", "9px", "18px"], rotate: ["-45deg", "0deg", "0deg"] } 
                }} 
                style={{ position: 'absolute', top: "18px" }} 
                className='w-[26px] border-2 border-[#f9c74f] rounded-full'
              />
            </motion.button>
          </MotionConfig>
        )}
      </nav>
      {isMobile && (
        <MotionConfig transition={{ duration: 0.2 }}>
          <motion.div 
            initial={false}
            animate={active ? "open" : "closed"}
            variants={{
              open: { 
                y: 0,
                opacity: 1,
                transition: { type: 'spring', stiffness: 300, damping: 25 }
              },
              closed: { 
                y: '-100%',
                opacity: 0,
                transition: { duration: 0.2 }
              }
            }}
            className={`fixed top-0 left-0 w-full py-[40px] bg-[white]/10 backdrop-blur-[3px] shadow-lg z-40 pt-20 pb-5 ${
              active ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
            style={{ y: '-100%' }}
          >
            <div className="flex flex-col items-center gap-4 inter ">
              <a href="#about" className='text-[16px] md:text-[20px] no-underline text-[#f9c74f] p-[10px] transition-colors duration-300 ease-in-out hover:text-[#FFB300]'>About</a>
            <a href="#about" className='text-[16px] md:text-[20px] no-underline text-[#f9c74f] p-[10px] transition-colors duration-300 ease-in-out hover:text-[#FFB300]'>Sponsors</a>
            <a href="#about" className='text-[16px] md:text-[20px] no-underline text-[#f9c74f] p-[10px] transition-colors duration-300 ease-in-out hover:text-[#FFB300]'>FAQ</a>
            <a href="#about" className='text-[16px] md:text-[20px] no-underline text-[#f9c74f] p-[10px] transition-colors duration-300 ease-in-out hover:text-[#FFB300]'>The Team</a>
            <a href="#contact" className="special-button">Apply</a>
            </div>
          </motion.div>
        </MotionConfig>
      )}
    </>
  );
}