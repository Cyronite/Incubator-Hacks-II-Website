import Nav from "./components/Nav";
import Circle from "./components/BgCircle";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Sponsor from "./components/Sponsor";
import FAQ from "./components/FAQ";
import MeetOurTeam from "./components/MeetOurTeam";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth"; // 👈 unified component
import AuthCallback from "./components/AuthCallback";
import  Dashboard from "./components/Dashboard";
import TallyForm from "./components/TallyForm";
import FormSubmitted from "./components/FormSubmitted";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      {/* ✅ Background circles */}
      <Circle top="-300px" right="-1000px" size="2000px" color="#F2C94C90" />
      <Circle top="-700px" left="-500px" size="2000px" color="#F2C94C80" />
      <Circle top="-1500px" left="100px" size="2000px" color="#E5E50180" />
      <Circle top="500px" left="-500px" size="1500px" color="#685FD479" />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hero"><Hero /></section>
              <section id="about"><About /></section>
              <section id="sponsor"><Sponsor /></section>
              <section id="faq"><FAQ /></section>
              <section id="team"><MeetOurTeam /></section>
            </>
          }
        />
        {/* Unified Auth component */}
        <Route path="/signup" element={<Auth mode="signup" />} />
        <Route path="/signin" element={<Auth mode="signin" />} />

        {/* OAuth callback route */}
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<TallyForm />} />
        <Route path="/form/submitted" element={<FormSubmitted />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
