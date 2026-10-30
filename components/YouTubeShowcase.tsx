"use client";

import Image from "next/image";

export default function YouTubeShowcase() {
  return (
    <section id="youtube" className="youtube-section">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Content Creation &amp; Media</p>
          <h2 className="section-title">YouTube Channels</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Sharing tech tutorials, problem breakdowns, programming insights, and developer shorts.
          </p>
        </div>

        {/* Primary Channel Showcase: LMS Problem Solver */}
        <div className="youtube-highlight-card card" style={{ marginBottom: "2rem" }}>
          <div className="youtube-media-wrapper">
            <Image
              src="/assets/youtube-cover.svg"
              alt="LMS Problem Solver YouTube Channel Showcase"
              className="youtube-cover-image"
              width={700}
              height={420}
            />
            <a
              href="https://www.youtube.com/@LMSProblemSolver"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-play-btn-overlay"
              aria-label="Visit LMS Problem Solver YouTube Channel"
            >
              <div className="yt-play-pulse"></div>
              <div className="yt-play-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </a>
          </div>

          <div className="youtube-details">
            <div className="youtube-badge">
              <span className="badge-dot badge-red"></span>
              <span>Primary Channel • @LMSProblemSolver</span>
            </div>

            <h3 className="youtube-title">LMS Problem Solver</h3>
            <p className="youtube-desc">
              Dedicated to solving practical software engineering problems, debugging full-stack web applications, explaining algorithms, and providing clear step-by-step programming lessons.
            </p>

            <div className="youtube-metrics">
              <div className="yt-metric">
                <span className="yt-metric-number">Tutorials</span>
                <span className="yt-metric-label">Problem Solving</span>
              </div>
              <div className="yt-metric">
                <span className="yt-metric-number">Full-Stack</span>
                <span className="yt-metric-label">Web &amp; Code</span>
              </div>
              <div className="yt-metric">
                <span className="yt-metric-number">Free</span>
                <span className="yt-metric-label">Open Learning</span>
              </div>
            </div>

            <div className="youtube-cta-group">
              <a
                href="https://www.youtube.com/@LMSProblemSolver?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-youtube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>Subscribe to LMS Problem Solver</span>
              </a>
              <a
                href="https://www.youtube.com/@LMSProblemSolver"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <span>Visit Channel</span>
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Channel Showcase: developerXgmaer Shorts */}
        <div className="youtube-highlight-card card">
          <div className="youtube-details" style={{ width: "100%", padding: "2rem 2.5rem" }}>
            <div className="youtube-badge">
              <span className="badge-dot badge-red"></span>
              <span>Shorts &amp; Dev Highlights • @developerXgmaer</span>
            </div>

            <h3 className="youtube-title" style={{ fontSize: "1.6rem" }}>
              developerXgmaer Shorts &amp; Coding Snippets
            </h3>
            <p className="youtube-desc" style={{ marginBottom: "1.25rem" }}>
              Quick programming hacks, rapid technology tips, developer setups, and tech shorts designed for fast learning on the go.
            </p>

            <div className="youtube-cta-group">
              <a
                href="https://www.youtube.com/@developerXgmaer/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>Watch @developerXgmaer Shorts</span>
              </a>
              <a
                href="https://www.youtube.com/@developerXgmaer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <span>Channel Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
