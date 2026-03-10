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
      <div className="projects-header" ref={titleRef}>
        <h2 className="project-title">My Projects</h2>
        <p className="project-subtitle">Showcasing my latest work</p>
      </div>
      
      <div className="project-grid">
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              className="project-item"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <div className="project-image-wrapper">
                  <img src={item.img} alt={item.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-info">
                      <h3 className="project-name">{item.title}</h3>
                      <p className="project-desc">{item.description}</p>
                      <span className="view-project">
                        View Project
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
