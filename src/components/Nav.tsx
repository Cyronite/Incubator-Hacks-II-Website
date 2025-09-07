import logo from '../assets/IncubatorHacksLogo.svg';
import { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { HashLink } from "react-router-hash-link";
export default function Nav() {
  const [active, setActive] = useState(false);


  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-between items-center px-[25px] lg:px-[100px] py-[10px] bg-[white]/10 backdrop-blur-[3px] shadow-lg relative z-50 ">
        <div id="leftside" className="flex gap-[10px] items-center">
          <img src={logo} alt="Logo" className="h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]" />
          <h1 className="inter text-[18px] lg:text-[25px] text-[#f9c74f] font-bold">Incubator Hacks</h1>
        </div>

        {/* Desktop Nav */}
        <div id="rightside" className="hidden lg:flex gap-[12px] inter">
          <HashLink smooth to="/#hero" className="text-[16px] lg:text-[20px] text-[#f9c74f] p-[10px] hover:text-[#FFB300]">Home</HashLink>
          <HashLink smooth to="/#about" className="text-[16px] lg:text-[20px] text-[#f9c74f] p-[10px] hover:text-[#FFB300]">About</HashLink>
          <HashLink smooth to="/#sponsor" className="text-[16px] lg:text-[20px] text-[#f9c74f] p-[10px] hover:text-[#FFB300]">Sponsors</HashLink>
          <HashLink smooth to="/#faq" className="text-[16px] lg:text-[20px] text-[#f9c74f] p-[10px] hover:text-[#FFB300]">FAQ</HashLink>
          <HashLink smooth to="/#team" className="text-[16px] lg:text-[20px] text-[#f9c74f] p-[10px] hover:text-[#FFB300]">The Team</HashLink>
          <div className="relative group">
            <HashLink smooth to="/signin" className="special-button cursor-not-allowed">Dashboard</HashLink>
          </div>
        </div>


        {/* Mobile Hamburger */}
        <MotionConfig transition={{ duration: 0.2 }}>
          <motion.button
            initial={false}
            animate={active ? 'open' : 'closed'}
            onClick={() => setActive(!active)}
            className="lg:hidden relative h-[18px] w-[26px] bg-transparent border-0"
          >
            <motion.div
              variants={{
                open: { top: ['0px', '9px', '9px'], rotate: ['0deg', '0deg', '45deg'] },
                closed: { top: ['9px', '9px', '0px'], rotate: ['45deg', '0deg', '0deg'] },
              }}
              style={{ position: 'absolute', top: '0' }}
              className="w-[26px] border-2 border-[#f9c74f] rounded-full"
            />
            <motion.div
              variants={{
                open: { rotate: ['0deg', '0deg', '-45deg'] },
                closed: { rotate: ['-45deg', '0deg', '0deg'] },
              }}
              style={{ position: 'absolute', top: '9px' }}
              className="w-[26px] border-2 border-[#f9c74f] rounded-full"
            />
            <motion.div
              variants={{
                open: { top: ['18px', '9px', '9px'], rotate: ['0deg', '0deg', '-45deg'] },
                closed: { top: ['9px', '9px', '18px'], rotate: ['-45deg', '0deg', '0deg'] },
              }}
              style={{ position: 'absolute', top: '18px' }}
              className="w-[26px] border-2 border-[#f9c74f] rounded-full"
            />
          </motion.button>
        </MotionConfig>
      </nav>

      {/* Mobile Dropdown Menu */}
      <MotionConfig transition={{ duration: 0.2 }}>
        <motion.div
          initial={false}
          animate={active ? 'open' : 'closed'}
          variants={{
            open: {
              y: 0,
              opacity: 1,
              transition: { type: 'spring', stiffness: 300, damping: 25 },
            },
            closed: {
              y: '-100%',
              opacity: 0,
              transition: { duration: 0.2 },
            },
          }}
          className={`lg:hidden fixed top-0 left-0 w-full py-[40px] bg-[#FFF6C3]/90 backdrop-blur-[10px] shadow-lg z-40 pt-20 pb-5 ${
            active ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{ y: '-100%' }}
        >
          <div className="flex flex-col items-center gap-4 inter">
              <HashLink smooth to="/#hero" onClick={() => setActive(false)} className="text-[16px] text-[#f9c74f] p-[10px] hover:text-[#FFB300] font-bold">Home</HashLink>
              <HashLink smooth to="/#about" onClick={() => setActive(false)} className="text-[16px] text-[#f9c74f] p-[10px] hover:text-[#FFB300] font-bold">About</HashLink>
              <HashLink smooth to="/#sponsor" onClick={() => setActive(false)} className="text-[16px] text-[#f9c74f] p-[10px] hover:text-[#FFB300] font-bold">Sponsors</HashLink>
              <HashLink smooth to="/#faq" onClick={() => setActive(false)} className="text-[16px] text-[#f9c74f] p-[10px] hover:text-[#FFB300] font-bold">FAQ</HashLink>
              <HashLink smooth to="/#team" onClick={() => setActive(false)} className="text-[16px] text-[#f9c74f] p-[10px] hover:text-[#FFB300] font-bold">The Team</HashLink>
              <div className="relative group">
                <HashLink smooth to="/signin" className="special-button cursor-not-allowed" onClick={()=>setActive(false)}>Dashboard</HashLink>
              </div>
            </div>

        </motion.div>
      </MotionConfig>
    </div>
  );
}

