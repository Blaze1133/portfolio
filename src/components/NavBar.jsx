import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  const navItems = ["Home", "About", "Education", "Projects", "Contact"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <ul className="nav-menu">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="active"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
