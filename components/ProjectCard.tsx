"use client";

import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const getLangClass = (lang: string) => {
    const l = lang.toLowerCase();
    if (l.includes("type")) return "typescript";
    if (l.includes("java") && !l.includes("script")) return "java";
    if (l.includes("script")) return "javascript";
    if (l.includes("py")) return "python";
    if (l.includes("c++")) return "cpp";
    if (l.includes("c")) return "c";
    if (l.includes("php")) return "php";
    return "html";
  };

  return (
    <article className="project-card card">
      <div className="project-image-wrapper">
        <Image
          src={project.image || "/assets/project-1.svg"}
          alt={`Preview of ${project.title}`}
          className="project-image"
          width={600}
          height={360}
          loading="lazy"
        />
        {project.isFeatured && <div className="project-badge">Featured</div>}
      </div>

      <div className="project-content">
        <div className="project-tags">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="project-title">{project.title}</h3>

        <p className="project-desc">{project.description}</p>

        <div className="project-meta-bar">
          <div className="project-language-badge">
            <span className={`lang-dot ${getLangClass(project.language)}`} />
            <span>{project.language}</span>
          </div>
          <div className="project-stats-pills">
            <span className="stat-pill" title={`${project.stars} GitHub stars`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>{project.stars}</span>
            </span>
          </div>
        </div>

        <div className="project-actions" style={{ marginTop: "1.25rem" }}>
          <button
            onClick={() => onSelect(project)}
            className="btn btn-sm btn-primary"
            style={{ flex: 1, justifyContent: "center" }}
          >
            <span>Inspect Details</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline"
            title="Open repository in GitHub"
            aria-label={`Open ${project.title} in GitHub`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Source</span>
          </a>
        </div>
      </div>
    </article>
  );
}
