import React from 'react';
import '../Sponsor.css';

const Sponsor: React.FC = () => {
  return (
    <section className="sponsor-section">
      <h2 className="modak text-5xl md:text-6xl text-[#222] mb-8 text-center w-full">OUR SPONSORS</h2>
      <div className="sponsor-logos">
        <a className="sponsor-logo" href="https://youthcreativityfund.ca" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/Group 134.jpg" alt="Youth Creativity Fund Logo" style={{ width: '350px', height: '200px' }} />
        </a>
        <a className="sponsor-logo" href="https://www.kitchener.ca/en/taxes-utilities-and-finance/bloomberg-youth-climate-action-fund.aspx" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/Group 135 (1).jpg" alt="Kitchener Logo" style={{ width: '350px', height: '200px' }} />
        </a>
        <a className="sponsor-logo" href="https://ocean.org/" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/oceanwise.png" alt="Ocean Wise Logo" style={{ width: '350px', height: '200px' }} />
        </a>
      </div>
    </section>
  );
};

export default Sponsor; 