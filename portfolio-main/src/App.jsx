import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero.jsx";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import { Toaster } from "sonner";
import "./App.css";
import { Analytics } from "@vercel/analytics/next";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="page-wrapper">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Analytics />

      <Toaster position="top-right" richColors />
    </div>
  );
};

export default App;
