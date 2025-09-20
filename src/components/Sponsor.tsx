import React from 'react';
import '../Sponsor.css';

import city from "../assets/sponsers/City.jpg";
import youth from "../assets/sponsers/Youth.jpg";
import oceanwise from "../assets/sponsers/Ocean.png";
import divider from '../assets/divider.png';
import boat from '../assets/boat.png';
import cleanshot from '../assets/sponsers/cleanshot.png';
import codecrafters from '../assets/sponsers/codecrafters.png';
import NordVPN from '../assets/sponsers/NordVPN.png';
import PCBWAY from '../assets/sponsers/PCBWAY.png';
import unitedcollege from '../assets/sponsers/unitedcollege.png';
import greenhouse from '../assets/sponsers/greenhouse.png';  
import flatlogic from '../assets/sponsers/flatlogic.png';
import projectastreaus from '../assets/sponsers/projectastreaus.png';
import balsamiq from '../assets/sponsers/balsamiq_logomark.png';
import incogni from '../assets/sponsers/Incogni_logo_black_better_quality.png';
import nordpass from '../assets/sponsers/nordpass horizontal (2).png';
import saily from '../assets/sponsers/saily-logo-black (3).png';
import nordProtect from '../assets/sponsers/Color=Orange, Type=Horizontal, On=White.png';
import nexos from '../assets/sponsers/nexos-ai-logo-MAIN-black-vertical.png';
import brilliant from '../assets/sponsers/Brilliant Logo_png.png';
import interviewcake from '../assets/sponsers/cake_logo_blue_gray.png';
import wolfram from '../assets/sponsers/wolfram-corporate-logo-horz-lg.png';
import xyz from '../assets/sponsers/xyz-logo-color.png';
import aops from '../assets/sponsers/aops.png';
import FBB from '../assets/sponsers/FBB.png';
import yc from '../assets/sponsers/yc.png';

const Sponsor: React.FC = () => {
  return (
     <>
    <div className="relative">
        <img src={divider} alt="Divider" className="divider-image" />
        <img src={boat} alt="boat" className="boat-image" />
      </div>
      <section className="sponsor-section">
      <h2 className="modak text-5xl md:text-6xl text-[#222] mb-8 text-center w-full">OUR PARTNERS</h2>
      <div className="sponsor-logos">
        <a className="sponsor-logo" href="https://uwaterloo.ca/united-college" target="_blank" rel="noopener noreferrer">
          <img src={unitedcollege} alt="United College Logo" style={{ width: '350px', height: '200px' }} />
        </a>
        <a className="sponsor-logo" href="https://uwaterloo.ca/united-college/greenhouse" target="_blank" rel="noopener noreferrer">
          <img src={greenhouse} alt="Greenhouse Logo" style={{ width: '450px', height: '300px' }} />
        </a>
        <a className="sponsor-logo" href="https://projectastraeus.org" target="_blank" rel="noopener noreferrer">
          <img src={projectastreaus} alt="Project Astreaus Logo" style={{ width: '450px', height: '300px' }} />
        </a>
      </div>
    </section>
    <section className="sponsor-section">
  <h2 className="modak text-5xl md:text-6xl text-[#222] mb-8 text-center w-full">OUR SPONSORS</h2>
  <div className="sponsor-logos">
    <a className="sponsor-logo" href="https://www.artofproblemsolving.com" target="_blank" rel="noopener noreferrer">
      <img src={aops} alt="AoPS Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://balsamiq.com/" target="_blank" rel="noopener noreferrer">
      <img src={balsamiq} alt="balsamiq" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://brilliant.org" target="_blank" rel="noopener noreferrer">
      <img src={brilliant} alt="Brilliant Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://cleanshot.com" target="_blank" rel="noopener noreferrer">
      <img src={cleanshot} alt="CleanShot Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://codecrafters.io" target="_blank" rel="noopener noreferrer">
      <img src={codecrafters} alt="CodeCrafters Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://www.fatbastardburrito.ca" target="_blank" rel="noopener noreferrer">
      <img src={FBB} alt="Fat Bastard burrito" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://flatlogic.com" target="_blank" rel="noopener noreferrer">
      <img src={flatlogic} alt="Flatlogic Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://incogni.com" target="_blank" rel="noopener noreferrer">
      <img src={incogni} alt="Incogni Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://www.interviewcake.com" target="_blank" rel="noopener noreferrer">
      <img src={interviewcake} alt="Interview Cake Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://www.kitchener.ca/en/taxes-utilities-and-finance/bloomberg-youth-climate-action-fund.aspx" target="_blank" rel="noopener noreferrer">
      <img src={city} alt="Kitchener Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://nexos.ai" target="_blank" rel="noopener noreferrer">
      <img src={nexos} alt="Nexos Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://nordpass.com/" target="_blank" rel="noopener noreferrer">
      <img src={nordpass} alt="NordPass Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://nordprotect.com/ " target="_blank" rel="noopener noreferrer">
      <img src={nordProtect} alt="NordProtect Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://nordvpn.com" target="_blank" rel="noopener noreferrer">
      <img src={NordVPN} alt="NordVPN Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://ocean.org" target="_blank" rel="noopener noreferrer">
      <img src={oceanwise} alt="Ocean Wise Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://www.pcbway.com" target="_blank" rel="noopener noreferrer">
      <img src={PCBWAY} alt="PCBWAY Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://saily.com" target="_blank" rel="noopener noreferrer">
      <img src={saily} alt="Saily Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://www.wolfram.com" target="_blank" rel="noopener noreferrer">
      <img src={wolfram} alt="Wolfram Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://gen.xyz" target="_blank" rel="noopener noreferrer">
      <img src={xyz} alt="XYZ Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://youthcreativityfund.ca" target="_blank" rel="noopener noreferrer">
      <img src={youth} alt="Youth Creativity Fund Logo" style={{ width: '350px', height: '200px' }} />
    </a>
    <a className="sponsor-logo" href="https://youthculture.com" target="_blank" rel="noopener noreferrer">
      <img src={yc} alt="Youth Culture" style={{ width: '350px', height: '200px' }} />
    </a>
  </div>
</section>

    
    </>
  );
};

export default Sponsor; 