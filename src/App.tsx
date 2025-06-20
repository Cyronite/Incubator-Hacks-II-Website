import Nav from "./components/Nav";
import Circle from "./components/BgCircle";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Sponsor from "./components/Sponsor";
import FAQ from "./components/FAQ";
import MeetOurTeam from "./components/MeetOurTeam";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Background Circles */}
      <Circle top="-300px" right="-1000px" size="2000px" color="#F2C94C90" />
      <Circle top="-700px" left="-500px" size="2000px" color="#F2C94C80" />
      <Circle top="-1500px" left="100px" size="2000px" color="#E5E50180" />
      <Circle top="500px" left="-500px" size="1500px" color="#685FD479" />
      <Nav />
      <section id="hero">
      <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="sponsor">
        <Sponsor />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="team">
        <MeetOurTeam />
      </section>
      {/* Footer can be added here if needed */}
      <Footer />
    </>
  );
}

export default App;
