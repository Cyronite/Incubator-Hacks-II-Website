import Nav from "./components/Nav";
import Circle from "./components/BgCircle";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Sponsor from "./components/Sponsor";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      {/* Background Circles */}
      <Circle top="-300px" right="-1000px" size="2000px" color="#F2C94C90" />
      <Circle top="-700px" left="-500px" size="2000px" color="#F2C94C80" />
      <Circle top="-1500px" left="100px" size="2000px" color="#E5E50180" />
      <Circle top="500px" left="-500px" size="1500px" color="#685FD479" />
      <Nav />
      <Hero />
      <About />
      
      <Sponsor />
      <FAQ />
     
      
    </>
  );
}

export default App;
