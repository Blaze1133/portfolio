import React from "react";
import { toast } from "sonner";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Contact.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [result, setResult] = React.useState("");

  useGSAP(() => {
    gsap.fromTo(
      ".contact",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        opacity: 1,
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%",
        },
      }
    );
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "de7285e8-5efb-46da-950a-202e5eb26d02");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form submitted successfully! 🎉");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="left-section">
          <h2 className="contact-info">Contact Information</h2>
          <p>
            Looking for someone who can code, debug, and still reply to emails?
            Congrats, you just found one
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>manikanta3.mk1@gmail.com</p>
            </div>
            <div className="contact-detail">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92V19.92C22 20.49 21.54 20.97 20.97 21C20.72 21.01 20.46 21.01 20.21 21C10.2 20.53 2.48 12.84 2 2.79C1.99 2.54 1.99 2.28 2 2.03C2.03 1.46 2.51 1 3.08 1H6.08C6.64 1 7.11 1.42 7.18 1.97C7.25 2.49 7.35 3 7.48 3.5C7.63 4.11 7.41 4.74 6.94 5.17L5.39 6.58C6.87 9.19 9.01 11.33 11.62 12.81L13.03 11.26C13.46 10.79 14.09 10.57 14.7 10.72C15.2 10.85 15.71 10.95 16.23 11.02C16.78 11.09 17.2 11.56 17.2 12.12V15.12C17.2 15.68 16.74 16.15 16.18 16.18C15.93 16.19 15.67 16.19 15.42 16.18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>+91 9133855992</p>
            </div>
            <div className="contact-detail">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Visakhapatnam, Andhra Pradesh</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="right-section">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Hello! What's up?"
            rows={8}
            required
          />

          <button className="contact-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
