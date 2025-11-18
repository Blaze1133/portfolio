import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  const navItems = ["Home", "About", "Education", "Projects", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Mobile menu toggle button */}
        <button
          className={`nav-mob-open ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Navigation menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <button
            className={`nav-mob-close ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Close menu"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="nav-overlay" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default NavBar;
