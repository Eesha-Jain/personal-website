"use client";

import { useState } from "react";
import type { JSX } from "react";
import { AnimatedSection, Tag, GitHubIcon, ChevronDownIcon } from "../components";
import type { Experience as ExperienceType } from "../types";

const EXPERIENCES: ExperienceType[] = [
  {
    id: "1",
    company: "FOUND Team, Husky Satellite Lab",
    role: "Software Developer",
    period: "Sep 2025 - Present",
    description:
      "Implementing Zernike moments for sub-pixel precision of edge detection, with comparable performance to NASA mission. Contributing to open-source satellite navigation system enabling CubeSats to autonomously determine orbital position through edge detection of Earth's horizon in camera imagery, set to deploy in 2028.",
    technologies: ["C++", "Docker"],
    github: ["https://github.com/UWCubeSat/found"],
  },
  {
    id: "2",
    company: "Hannaford BioRobotics Lab (UW)",
    role: "Software Developer, Researcher",
    period: "Jan 2024 – Jan 2025",
    description:
      "Lead novel research in the autonomous medical surgery robotics sector that evaluated & compared the performance of standard computer vision algorithms for segmenting and tracking medical instruments within a video. Determined these practices do not meet necessary speed & accuracy thresholds, deeming it insufficient for real-world implementation.",
    technologies: ["OpenCV", "Kalman Filtering", "FilterPy", "DeepSORT"],
    github: ["https://github.com/Eesha-Jain/robot-surgery-segmentation"],
  },
  {
    id: "3",
    company: "Stuber Neurology Lab (UW)",
    role: "Software Developer",
    period: "Jun 2023 – Aug 2023",
    description:
      "Developed data analysis program to transform experimental data from all of Stuber Lab's studies into interactive diagrams utilized in research publications. Migrated \"simap3,\" the lab's core Python data processing package, to Python 3 and implemented multi-threading to improve processing speed.",
    technologies: ["Django", "Matplotlib", "Plotly", "Google Drive APIs"],
    github: [
      "https://github.com/Eesha-Jain/nape-visualizer",
      "https://github.com/Eesha-Jain/simap3",
    ],
  },
  {
    id: "4",
    company: "Zweifel Neurology Lab (UW)",
    role: "Software Developer, Lab Assistant",
    period: "Jun 2022 – Aug 2022",
    description:
      "Optimized the lab's MATLAB data analysis program to process all experimental lab data more efficiently. Performed experimental procedures including brain slicing, gel electrophoresis, & PCR for PhD candidates' research.",
    technologies: ["MATLAB"],
  },
  {
    id: "5",
    company: "Mustang Math",
    role: "Technology Lead",
    period: "May 2022 – May 2025",
    description:
      "Engineered a tournament management platform handling problem writing, test development, registration, real-time collaborative test-taking, & grading. Utilized by 3+ tournament organizations, each organizing 5+ tournaments each year and helping 1000+ students.",
    technologies: ["Svelte", "Supabase", "TypeScript"],
    github: [
      "https://github.com/comp-development/COMP",
      "https://github.com/comp-development/COMPOSE",
      "https://github.com/MustangMathTech/MMT-Website",
    ],
  },
  {
    id: "6",
    company: "LIVE, by Po-Shen Loh",
    role: "Software Developer, Math Instructor",
    period: "Jan 2022 – Aug 2025",
    description:
      "Developed program used in each of the program's 100+ classes to produce weekly personalized progress reports for students. Taught 190+ hours of math, including 2 scholarship classes for underserved communities in America.",
    technologies: ["React", "TypeScript", "Firebase"],
  },
  {
    id: "7",
    company: "FIRST Tech Challenge: 18225 High Definition",
    role: "Co-Captain (Software Developer, Business)",
    period: "Sep 2021 – Apr 2025",
    description:
      "Leveraged TensorFlow to detect markers on the field and identify the robot's coordinates. Trained a chatbot on FIRST to provide all 200+ website users with real-time answers.",
    technologies: ["TensorFlow", "OpenAI APIs", "Supabase"],
    github: ["https://github.com/HiiDeff/HighDefinition.github.io"],
  },
];

export function Experience(): JSX.Element {
  // First item expanded by default
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <AnimatedSection id="experience" className="section-container snap-section">
      <div className="section-content">
        <div className="section-title">
          <h2>experience</h2>
        </div>
        <div className="space-y-4">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            
            return (
              <article key={exp.id} className="card text-left stagger-item" style={{ opacity: 0 }}>
                {/* Header - always visible, clickable to expand */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="w-full text-left flex items-start justify-between gap-4"
                  aria-expanded={isExpanded}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3>{exp.company}</h3>
                      {exp.github && (
                        <div className="flex items-center gap-0">
                          {exp.github.map((link, index) => (
                            <a
                              key={index}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="icon-btn p-1"
                              aria-label={`View ${exp.company} repo ${index + 1} on GitHub`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <GitHubIcon size={16} />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                      <p className="text-muted text-sm">{exp.role}</p>
                      <span className="text-subtle text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <ChevronDownIcon 
                    size={20} 
                    className={`text-muted transition-transform flex-shrink-0 mt-1 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Technologies - always visible */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech) => (
                      <Tag key={tech} size="sm">{tech}</Tag>
                    ))}
                  </div>
                )}

                {/* Expandable content - description only */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="section-text-sm">{exp.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
