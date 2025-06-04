import Nav from "./components/Nav";
import Circle from "./components/BgCircle";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Sponser from "./components/Sponsers";
import FAQ from "./components/FAQ";
import MeetOurTeam from "./components/MeetOurTeam";
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
      <About/>
      <Sponser />
      <section className="bg-[#ffeb9c]">
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <FAQ />
        </section>
      </section>
      <MeetOurTeam
  departments={[
    {
      name: "Logistics",
      members: [
        {
          name: "Prasun",
          image: "temp",
          linkedin: "https://linkedin.com/in/alice"
        },
        {
          name: "Bob",
          image: "/team/bob.jpg",
          linkedin: "https://linkedin.com/in/bob"
        }
      ]
    },
    {
      name: "Tech",
      members: [
        {
          name: "Charlie",
          image: "/team/charlie.jpg",
          linkedin: "https://linkedin.com/in/charlie"
        }
      ]
    }
  ]}
/>

    </>
  );
}

export default App;
