"use client";

const SKILLS = [
  "React.js & Next.js",
  "TypeScript & ES6+",
  "HTML5 & Semantic Web",
  "Modern CSS3 & Animations",
  "Node.js & Express",
  "PHP & Laravel",
  "Python & Cryptography",
  "C & C++ Robotics",
  "Java & OOP Principles",
  "IoT & Microcontrollers",
  "REST APIs & JSON",
  "Git & GitHub Workflows",
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Introduction</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            A developer passionate about high-impact web software, robotics, and creative digital engineering.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio-card card">
            <h3 className="card-heading">Engineering Digital Solutions</h3>
            <p className="card-paragraph">
              Hello! I&apos;m <strong>Aashish Pokhrel</strong> (known as <em>jay-sambhu</em> on GitHub). I focus on full-stack web engineering, building interactive and responsive interfaces with React, Next.js, and TypeScript, backed by robust backend APIs.
            </p>
            <p className="card-paragraph">
              Beyond standard web development, I build embedded robotics firmware in C++, investigate cryptographic ciphers in Python, and construct IoT hardware solutions. I believe in clean code architecture, intuitive accessibility, and building practical software that solves real-world challenges.
            </p>

            <div className="skills-block">
              <h4 className="skills-title">Core Technologies &amp; Tooling</h4>
              <div className="skills-tags">
                {SKILLS.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="stats-wrapper">
            <div className="stat-card card">
              <div className="stat-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="stat-number-box">
                <span className="stat-number">4</span>
                <span className="stat-suffix">+</span>
              </div>
              <span className="stat-label">Years of Development</span>
            </div>

            <div className="stat-card card">
              <div className="stat-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="stat-number-box">
                <span className="stat-number">60</span>
                <span className="stat-suffix">+</span>
              </div>
              <span className="stat-label">GitHub Repositories</span>
            </div>

            <div className="stat-card card">
              <div className="stat-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="stat-number-box">
                <span className="stat-number">20</span>
                <span className="stat-suffix">K+</span>
              </div>
              <span className="stat-label">Tech Community Views</span>
            </div>

            <div className="stat-card card">
              <div className="stat-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="stat-number-box">
                <span className="stat-number">100</span>
                <span className="stat-suffix">%</span>
              </div>
              <span className="stat-label">Code Quality Dedication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
