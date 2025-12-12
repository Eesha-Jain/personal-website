import type { JSX } from "react";
import { AnimatedSection, GitHubIcon, ExternalLinkIcon, Tag } from "../components";
import type { Project } from "../types";

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "iDrop Calendar",
    description:
      "Conceptualized, designed, & developed patient eye-drop medication reminder app, incorporating push notifications, gamification features, usage statistics, & printable tracking reports. Published to App Store & Google Play. Helped patients improve medication adherence & enabled doctors to monitor patient compliance more effectively.",
    technologies: ["React Native", "Adobe Illustrator"],
    github: "https://github.com/Eesha-Jain/iDropCalendar",
  },
];

export function Projects(): JSX.Element {
  return (
    <AnimatedSection id="projects" className="section-container snap-section">
      <div className="section-content">
        <div className="section-title">
          <h2>projects</h2>
        </div>
        <div className="grid gap-6">
          {PROJECTS.map((project) => (
            <article key={project.id} className="card-elevated text-left stagger-item" style={{ opacity: 0 }}>
              <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                <h3>{project.title}</h3>
                <div className="flex gap-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GitHubIcon size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLinkIcon size={18} />
                    </a>
                  )}
                </div>
              </header>
              <p className="section-text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Tag key={tech} size="sm">{tech}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
