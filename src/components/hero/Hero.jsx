import React, { useRef } from "react";
import dp from "../../assets/dp.jpg";
import dp1 from "../../assets/dpimg.jpeg";
import "./hero.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const hero = () => {
  useGSAP(() => {
    // GSAP animation
    gsap.fromTo(
      ".hero",
      {
        y: 30, // move 200px right
        opacity: 0,
      },
      {
        y: -10,
        duration: 1,
        ease: "power2.inOut",
        opacity: 1,
      }
    );
  }, []);
  return (
    <div id="home" className="hero">
      <img src={dp1} alt="image of arigato" className="dp-image" />
      <h1>
        {" "}
        <span>I'm Manikanta Tej</span>, Full Stack Developer, based in India
      </h1>
      <p>
        A Full-Stack Developer specializing in the MERN stack and Microsoft
        Azure, with experience building scalable applications and automating
      </p>
      <div className="hero-action">
        <a
          href="https://www.linkedin.com/in/manikanta-tej-1b986b272/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="hero-connect">Connect With Me</div>
        </a>
        <a
          href="https://drive.google.com/file/d/1YNrnT3BT73LqMt11nBoNKtJdDnhQtsyn/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
};

export default hero;
