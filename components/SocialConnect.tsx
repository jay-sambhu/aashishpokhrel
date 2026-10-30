"use client";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    handle: "@jay-sambhu",
    desc: "Explore 60+ open-source repositories, algorithms & web experiments.",
    url: "https://github.com/jay-sambhu",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    badgeClass: "badge-github",
  },
  {
    name: "YouTube",
    handle: "@jaysambhu",
    desc: "Tech tutorials, development walkthroughs, and code breakdowns.",
    url: "https://youtube.com/@jaysambhu",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    badgeClass: "badge-youtube",
  },
  {
    name: "LinkedIn",
    handle: "jay-sambhu",
    desc: "Professional career updates, project milestones & technical writing.",
    url: "https://linkedin.com/in/jay-sambhu",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    badgeClass: "badge-linkedin",
  },
  {
    name: "X (Twitter)",
    handle: "@jaysambhu",
    desc: "Thoughts on web engineering, developer tooling, and modern tech.",
    url: "https://twitter.com/jaysambhu",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    badgeClass: "badge-x",
  },
];

export default function SocialConnect() {
  return (
    <section id="social" className="social-section">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Networks</p>
          <h2 className="section-title">Connect &amp; Follow</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Find me across digital platforms. Join discussions, review code, or say hi.
          </p>
        </div>

        <div className="social-grid">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card card"
              aria-label={`Connect on ${link.name}`}
            >
              <div className="social-icon-wrapper">{link.icon}</div>
              <div className="social-info">
                <div className="social-name-row">
                  <h3 className="social-name">{link.name}</h3>
                  <span className="social-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </span>
                </div>
                <span className="social-handle">{link.handle}</span>
                <p className="social-desc">{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
