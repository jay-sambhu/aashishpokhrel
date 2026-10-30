"use client";

import { useState, useMemo, useEffect } from "react";
import { Project, REAL_GITHUB_PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

type CategoryFilter = "all" | "fullstack" | "frontend" | "robotics" | "python" | "systems";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [totalRepos, setTotalRepos] = useState<number>(60);
  const [liveSynced, setLiveSynced] = useState<boolean>(false);

  useEffect(() => {
    // Attempt client fetch of live github info
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (data.totalPublicRepos) {
          setTotalRepos(data.totalPublicRepos);
          setLiveSynced(true);
        }
      })
      .catch(() => {
        // Fallback already pre-configured
      });
  }, []);

  const totalStars = useMemo(() => {
    return REAL_GITHUB_PROJECTS.reduce((acc, p) => acc + (p.stars || 0), 0) + 15; // Including profile repos
  }, []);

  const filteredProjects = useMemo(() => {
    return REAL_GITHUB_PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.language.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryFilter, number> = {
      all: REAL_GITHUB_PROJECTS.length,
      fullstack: 0,
      frontend: 0,
      robotics: 0,
      python: 0,
      systems: 0,
    };
    REAL_GITHUB_PROJECTS.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });
    return counts;
  }, []);

  return (
    <section id="dashboard" className="dashboard-section">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Interactive Hub</p>
          <h2 className="section-title">Projects &amp; GitHub Dashboard</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Directly connected to my public GitHub repositories. Browse, search, inspect source code, or clone any project with one click.
          </p>
        </div>

        {/* GitHub Overview Stat Cards */}
        <div className="dashboard-stats-grid">
          <div className="dashboard-stat-card card">
            <div className="dashboard-stat-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div className="dashboard-stat-info">
              <span className="dashboard-stat-value">{totalRepos}+</span>
              <span className="dashboard-stat-title">
                Public Repositories {liveSynced ? "(Live Synced)" : ""}
              </span>
            </div>
          </div>

          <div className="dashboard-stat-card card">
            <div className="dashboard-stat-icon" style={{ background: "rgba(234, 179, 8, 0.12)", color: "#eab308" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div className="dashboard-stat-info">
              <span className="dashboard-stat-value">{totalStars}+</span>
              <span className="dashboard-stat-title">GitHub Stars Earned</span>
            </div>
          </div>

          <div className="dashboard-stat-card card">
            <div className="dashboard-stat-icon" style={{ background: "rgba(6, 182, 212, 0.12)", color: "var(--accent-cyan)" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div className="dashboard-stat-info">
              <span className="dashboard-stat-value">8+</span>
              <span className="dashboard-stat-title">Languages &amp; Stacks</span>
            </div>
          </div>

          <div className="dashboard-stat-card card">
            <div className="dashboard-stat-icon" style={{ background: "rgba(16, 185, 129, 0.12)", color: "var(--success)" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div className="dashboard-stat-info">
              <span className="dashboard-stat-value">100%</span>
              <span className="dashboard-stat-title">Open Source Repos</span>
            </div>
          </div>
        </div>

        {/* Dashboard Controls: Search & Filter Tabs */}
        <div className="dashboard-controls">
          <div className="dashboard-search-wrapper">
            <svg
              className="dashboard-search-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search by name, tag, or language (e.g. TypeScript, Robotics)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="dashboard-search-input"
            />
            {searchQuery && (
              <button
                className="dashboard-search-clear"
                onClick={() => setSearchQuery("")}
                title="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>

          <div className="filter-tabs">
            <button
              className={`filter-tab-btn ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              All Projects <span className="filter-count">{categoryCounts.all}</span>
            </button>
            <button
              className={`filter-tab-btn ${activeCategory === "fullstack" ? "active" : ""}`}
              onClick={() => setActiveCategory("fullstack")}
            >
              Full-Stack &amp; Web <span className="filter-count">{categoryCounts.fullstack}</span>
            </button>
            <button
              className={`filter-tab-btn ${activeCategory === "frontend" ? "active" : ""}`}
              onClick={() => setActiveCategory("frontend")}
            >
              Frontend &amp; TS <span className="filter-count">{categoryCounts.frontend}</span>
            </button>
            <button
              className={`filter-tab-btn ${activeCategory === "robotics" ? "active" : ""}`}
              onClick={() => setActiveCategory("robotics")}
            >
              Robotics &amp; IoT <span className="filter-count">{categoryCounts.robotics}</span>
            </button>
            <button
              className={`filter-tab-btn ${activeCategory === "python" ? "active" : ""}`}
              onClick={() => setActiveCategory("python")}
            >
              Python &amp; Crypto <span className="filter-count">{categoryCounts.python}</span>
            </button>
            <button
              className={`filter-tab-btn ${activeCategory === "systems" ? "active" : ""}`}
              onClick={() => setActiveCategory("systems")}
            >
              Systems (C / Java) <span className="filter-count">{categoryCounts.systems}</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div id="projects">
          {filteredProjects.length === 0 ? (
            <div className="empty-state card">
              <div className="empty-state-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3>No matching projects found</h3>
              <p>Try searching for different keywords or clear the category filter.</p>
              <button
                className="btn btn-secondary"
                style={{ marginTop: "1rem" }}
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
