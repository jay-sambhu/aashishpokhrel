"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand-logo" aria-label="Aashish Pokhrel Homepage">
              <span className="logo-icon">AP</span>
              <span className="logo-text">Aashish Pokhrel</span>
            </a>
            <p className="footer-tagline">
              Crafted with Next.js, React &amp; Modern Vanilla CSS. Connected with live GitHub projects.
            </p>
          </div>

          <div className="footer-links-group">
            <a href="#about" className="footer-link">About</a>
            <a href="#dashboard" className="footer-link">Dashboard</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#youtube" className="footer-link">YouTube</a>
            <a href="#contact" className="footer-link">Contact</a>
            <a href="https://github.com/jay-sambhu" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://www.linkedin.com/in/aashishpokhrel01/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://www.instagram.com/owl.91381990/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Aashish Pokhrel (Jay Sambhu). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <span>Back to top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
