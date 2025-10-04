import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/hero/hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import { Toaster } from "sonner";
import "./App.css";
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
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default App;
