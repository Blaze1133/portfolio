import React, { useRef } from "react";
import "./Education.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Education = () => {
  gsap.registerPlugin(ScrollTrigger);

  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);

  const data = [
    {
      institution: "Chandigarh University, Mohali",
      degree: "Bachelor's Degree, Computer Science",
      duration: "2021 - 2025",
      score: "CGPA: 7.94",
      board: "Chandigarh University",
    },
    {
      institution: "Narayana Junior College, Visakhapatnam",
      degree: "Intermediate",
      duration: "2019 - 2021",
      score: "Score: 86.2%",
      board: "Andhra Pradesh State Board",
    },
    {
      institution: "Bhashyam Public School, Visakhapatnam",
      degree: "Secondary Education",
      duration: "2018 - 2019",
      score: "CGPA: 9.20",
      board: "Andhra Pradesh State Board",
    },
  ];

  useGSAP(() => {
    // Animate title
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      }
    );

    // Animate each timeline item - just fade in
    itemsRef.current.forEach((item, index) => {
      if (!item) return;

      gsap.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          delay: index * 0.15,
        }
      );
    });
  }, []);

  return (
    <div id="education" className="education-section">
      <h2 className="section-title" ref={titleRef}>
        Education
      </h2>
      <div className="timeline-container" ref={timelineRef}>
        {data.map((edu, index) => (
          <div
            className="timeline-item"
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            {/* Timeline circle */}
            <div className="timeline-circle"></div>

            {/* Content card */}
            <div className="education-card">
              {/* Header with institution and duration side by side */}
              <div className="card-header">
                <h3 className="institution">{edu.institution}</h3>
                <span className="duration">{edu.duration}</span>
              </div>

              {/* Degree title */}
              <h4 className="degree">{edu.degree}</h4>

              {/* Score and board info */}
              <p className="details">
                {edu.score} • {edu.board}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
