import type { JSX } from "react";
import { AnimatedSection, Tag } from "../components";
import type { Experience as ExperienceType } from "../types";

// TODO: Update with your actual experience
const EXPERIENCES: ExperienceType[] = [
  {
    id: "1",
    company: "Company Name",
    role: "Software Engineer",
    period: "2023 - Present",
    description:
      "Building scalable web applications and contributing to the development of innovative solutions. Working with cross-functional teams to deliver high-quality software.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    id: "2",
    company: "Previous Company",
    role: "Software Engineering Intern",
    period: "Summer 2023",
    description:
      "Developed and maintained features for the core product. Collaborated with senior engineers to implement new functionality and improve code quality.",
    technologies: ["Python", "Django", "React", "Docker"],
  },
  {
    id: "3",
    company: "University Project / Research",
    role: "Research Assistant",
    period: "2022 - 2023",
    description:
      "Conducted research in [area]. Built tools and systems to support research objectives and data analysis.",
    technologies: ["Python", "TensorFlow", "Jupyter", "SQL"],
  },
];

export function Experience(): JSX.Element {
  return (
    <AnimatedSection id="experience" className="section-container snap-section">
      <div className="section-content">
        <div className="section-title">
          <h2>experience</h2>
        </div>
        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <article key={exp.id} className="card text-left stagger-item" style={{ opacity: 0 }}>
              <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <div>
                  <h3>{exp.role}</h3>
                  <p className="text-muted text-sm">{exp.company}</p>
                </div>
                <span className="text-subtle text-sm whitespace-nowrap">{exp.period}</span>
              </header>
              <p className="section-text-sm mb-4">{exp.description}</p>
              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Tag key={tech} size="sm">{tech}</Tag>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
