import { AnimatedSection, GitHubIcon, ExternalLinkIcon, Tag } from "../components";
import type { Project } from "../types";

// TODO: Update with your actual projects
const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Project One",
    description:
      "A full-stack web application that helps users manage their daily tasks with a beautiful, intuitive interface. Features real-time updates and collaborative features.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    link: "https://example.com",
    github: "https://github.com/username/project",
  },
  {
    id: "2",
    title: "Project Two",
    description:
      "An open-source library that simplifies complex data transformations with a clean, functional API. Used by developers worldwide.",
    technologies: ["TypeScript", "Node.js", "Jest", "GitHub Actions"],
    github: "https://github.com/username/project",
  },
  {
    id: "3",
    title: "Project Three",
    description:
      "A mobile-first progressive web app for tracking personal fitness goals and visualizing progress over time with beautiful charts.",
    technologies: ["React", "D3.js", "Firebase", "PWA"],
    link: "https://example.com",
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
