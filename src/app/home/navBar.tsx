"use client";

import Link from 'next/link';

const NavBar = () => (
  <nav className="navbar">
    <div className="container">
      <a href="/" className="logo">
        JSTaStudio
      </a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <style jsx>{`
      .navbar {
        background-color: #0070f3;
        padding: 20px;
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
    `}</style>
  </nav>
);

export default NavBar;