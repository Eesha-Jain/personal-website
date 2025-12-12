import type { JSX } from "react";
import { AnimatedSection } from "../components";

interface SkillGroup {
  category: string;
  items: string[];
}

// Left column: 4 skill groups
const LEFT_COLUMN: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C++", "TypeScript"],
  },
  {
    category: "Frontend",
    items: ["React", "Svelte", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "Supabase", "SQL"],
  },
  {
    category: "Libraries",
    items: ["Tensorflow", "DeepSORT", "OpenCV", "Kalman Filtering", "FilterPy"],
  },
];

// Right column: Tools + Awards
const RIGHT_COLUMN: SkillGroup[] = [
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "Linux", "Cursor", "OpenAI APIs"],
  },
  {
    category: "Awards",
    items: ["4x Top 100 Teams at FIRST Tech Challenge (FTC) Worlds", "15th nationally in 2024 American Rocketry Challenge", "Motivate Award Winner at FTC Worlds", "3x Inspire Award Winner at FTC States", "TiE Young Entrepreneurs 2022 Globals Finalist"],
  },
];

export function Skills(): JSX.Element {
  return (
    <AnimatedSection id="skills" className="section-container snap-section">
      <div className="section-content">
        <div className="section-title">
          <h2>my skillset</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
          {/* Left column */}
          <div className="space-y-6">
            {LEFT_COLUMN.map((group) => (
              <div key={group.category} className="stagger-item" style={{ opacity: 0 }}>
                <h3 className="mb-2">{group.category}</h3>
                <p className="section-text">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
          
          {/* Right column */}
          <div className="space-y-6">
            {RIGHT_COLUMN.map((group) => (
              <div key={group.category} className="stagger-item" style={{ opacity: 0 }}>
                <h3 className="mb-2">{group.category}</h3>
                <p className="section-text">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
