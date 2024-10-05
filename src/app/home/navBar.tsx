// src/app/home/navBar.tsx
"use client";

import { useState, useEffect } from "react";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <a href="/" className="logo">
          JSTaStudio
        </a>
        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>
      <style jsx>{`
        .navbar {
          background-color: #0070f3;
          padding: 20px;
          transition: top 0.3s ease-in-out;
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          color: white;
          font-size: 24px;
          text-decoration: none;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }
        .sticky {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 10;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
