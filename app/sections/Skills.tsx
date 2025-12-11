import { AnimatedSection } from "../components";

interface SkillGroup {
  category: string;
  items: string[];
}

// TODO: Update with your actual skills
const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Figma", "Linux"],
  },
];

export function Skills(): JSX.Element {
  return (
    <AnimatedSection id="skills" className="section-container snap-section">
      <div className="section-content">
        <div className="section-title">
          <h2>what i work with</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="stagger-item" style={{ opacity: 0 }}>
              <h3 className="mb-2">{group.category}</h3>
              <p className="section-text-sm">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
