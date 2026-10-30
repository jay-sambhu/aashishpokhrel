"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%`, height: "3px", position: "fixed", top: 0, left: 0, zIndex: 1001, background: "linear-gradient(90deg, #6366f1, #ec4899)" }}
        aria-hidden="true"
      />
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <a href="#top" className="brand-logo" aria-label="Aashish Pokhrel / Jay Sambhu Homepage" onClick={closeMenu}>
            <span className="logo-icon">AP</span>
            <span className="logo-text">Aashish Pokhrel</span>
          </a>

          <nav className={`nav-menu ${menuOpen ? "open" : ""}`} id="nav-menu" aria-label="Main Navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#dashboard" className="nav-link" onClick={closeMenu}>
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link" onClick={closeMenu}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#youtube" className="nav-link" onClick={closeMenu}>
                  YouTube
                </a>
              </li>
              <li className="nav-item">
                <a href="#social" className="nav-link" onClick={closeMenu}>
                  Connect
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
            <button
              id="nav-toggle"
              className={`hamburger-btn ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="nav-menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
