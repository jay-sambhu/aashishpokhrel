"use client";

import Image from "next/image";

export default function YouTubeShowcase() {
  return (
    <section id="youtube" className="youtube-section">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Content Creation</p>
          <h2 className="section-title">YouTube Channel</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Sharing tech tutorials, project breakdowns, programming insights, and developer workflows.
          </p>
        </div>

        <div className="youtube-highlight-card card">
          <div className="youtube-media-wrapper">
            <Image
              src="/assets/youtube-cover.svg"
              alt="YouTube Channel Showcase"
              className="youtube-cover-image"
              width={700}
              height={420}
            />
            <a
              href="https://youtube.com/@jaysambhu"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-play-btn-overlay"
              aria-label="Visit YouTube Channel"
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
              <span>@jaysambhu</span>
            </div>

            <h3 className="youtube-title">Coding, Tech &amp; Engineering Tutorials</h3>
            <p className="youtube-desc">
              Dedicated to breaking down complex engineering concepts into actionable, visual explanations. From practical full-stack web applications and hardware IoT to data structures, code walkthroughs, and practical developer tips.
            </p>

            <div className="youtube-metrics">
              <div className="yt-metric">
                <span className="yt-metric-number">Tech</span>
                <span className="yt-metric-label">Tutorials &amp; Demos</span>
              </div>
              <div className="yt-metric">
                <span className="yt-metric-number">Free</span>
                <span className="yt-metric-label">Open Knowledge</span>
              </div>
              <div className="yt-metric">
                <span className="yt-metric-number">HD</span>
                <span className="yt-metric-label">Quality Production</span>
              </div>
            </div>

            <div className="youtube-cta-group">
              <a
                href="https://youtube.com/@jaysambhu?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-youtube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>Subscribe on YouTube</span>
              </a>
              <a
                href="https://youtube.com/@jaysambhu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <span>Browse Channel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
