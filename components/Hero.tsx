"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ROLES = [
  "Full-Stack Web Developer",
  "Robotics & IoT Enthusiast",
  "TypeScript & React Engineer",
  "Open Source Creator",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Available for new projects &amp; collaborations</span>
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-text">Aashish Pokhrel</span>
          </h1>

          <div className="hero-subtitle-wrapper" aria-label="Roles">
            <span className="static-prefix">I am a </span>
            <span id="typing-text" className="typing-role" aria-live="polite">
              {displayText || "Developer"}
            </span>
            <span className="typing-cursor" aria-hidden="true">
              |
            </span>
          </div>

          <p className="hero-bio">
            Crafting elegant, accessible, and high-performance digital experiences. Specializing in modern React &amp; Next.js web applications, IoT robotics systems, and full-stack engineering.
          </p>

          <div className="hero-cta-group">
            <a href="#dashboard" className="btn btn-primary">
              <span>Explore Dashboard</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Contact me</span>
            </a>
          </div>

          <div className="hero-quick-links">
            <span className="quick-links-label">Quick connect:</span>
            <a href="https://github.com/jay-sambhu" target="_blank" rel="noopener noreferrer" className="quick-icon-link" aria-label="GitHub Profile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://youtube.com/@jaysambhu" target="_blank" rel="noopener noreferrer" className="quick-icon-link" aria-label="YouTube Channel">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/jay-sambhu" target="_blank" rel="noopener noreferrer" className="quick-icon-link" aria-label="LinkedIn Profile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-graphic">
          <div className="avatar-card card">
            <div className="avatar-ring"></div>
            <div className="avatar-image-container">
              <Image
                src="/assets/avatar.svg"
                alt="Aashish Pokhrel Avatar Illustration"
                width={280}
                height={280}
                className="avatar-img"
                priority
              />
            </div>
            <div className="floating-pill pill-top">
              <span className="pill-indicator"></span>
              <span className="pill-text">Next.js &amp; React</span>
            </div>
            <div className="floating-pill pill-bottom">
              <span className="pill-indicator pill-cyan"></span>
              <span className="pill-text">60+ GitHub Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
