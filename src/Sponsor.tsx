import './Sponsor.css';

const Sponsor = () => {
  return (
    <section className="bg-[#ffeb9c] pt-24 pb-12 px-6 md:px-24">
      <h2 className="modak text-6xl md:text-7xl text-[#242424] text-center mb-12">Our Sponsors</h2>
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-center items-center">
        <img src="src/assets/kitchenercity.png" alt="City of Kitchener" className="w-80 md:w-96 lg:w-[28rem] h-auto object-contain" />
        <img src="src/assets/youthcreativityfund.png" alt="Youth Creativity Fund" className="w-64 md:w-80 lg:w-96 h-auto object-contain" />
      </div>
    </section>
  );
};

export default Sponsor;