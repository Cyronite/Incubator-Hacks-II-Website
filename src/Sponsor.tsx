import './Sponsor.css';

const Sponsor = () => {
  return (
    <section className="bg-[#ffeb9c] pt-24 pb-12 px-6 md:px-24">
      <h2 className="modak text-6xl md:text-7xl text-[#242424] text-center mb-16">Our Sponsors</h2>
      <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
        <div className="sponsor-logo-container">
          <img src="src/assets/kitchenercity.png" alt="City of Kitchener" className="sponsor-logo-img" />
        </div>
        <div className="sponsor-logo-container">
          <img src="src/assets/youthcreativityfund.png" alt="Youth Creativity Fund" className="sponsor-logo-img" />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;