import React, { useRef } from "react";
import "./Projects.css";
import data from "../assets/projectsData";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Animate title when it comes into view
    gsap.fromTo(
      titleRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate each card when it comes into view
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          delay: index * 0.15, // Stagger effect
        }
      );
    });
  }, []);

  return (
    <div id="projects" className="projects">
      <div className="project-title" ref={titleRef}>
        My Projects
      </div>
      <div className="project-container">
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              className="project-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              {/* Image container with overlay effect */}
              <div className="project-img-container">
                <img src={item.img} alt={item.title} className="project-img" />
              </div>

              {/* Card content */}
              <div className="card-content">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">{item.description}</p>
                <div className="card-links">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    Live Demo
                  </a>
                  {/* Optional: Add GitHub link if you have it in your data */}
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                      style={{
                        background: "rgba(30, 41, 59, 0.8)",
                        border: "1px solid rgba(41, 196, 183, 0.3)",
                      }}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
