import type { JSX } from "react";
import { AnimatedSection } from "../components";

const PHILOSOPHY_POINTS = [
  {
    number: "01",
    title: "Eudaimonism",
    description:
      "I believe a good life isn't just about achievement, it's about flourishing. To me, happiness comes from pursuing meaning, investing in people, and contributing to the world around me.",
  },
  {
    number: "02",
    title: "Empiricism",
    description:
      "I learn best by doing. Watching or memorizing ideas only gets you so far. Real understanding comes from trying, failing, adjusting, and trying again.",
  },
  {
    number: "03",
    title: "Stoicism",
    description:
      "Stoicism helps me focus on what I can actually control: my choices, my reactions, and the way I carry myself. I can't dictate outcomes or other people, but I can decide how I show up.",
  }
];

export function Philosophy(): JSX.Element {
  return (
    <AnimatedSection id="philosophy" className="section-container snap-section">
      <div className="section-content">
        <div className="section-title">
          <h2>life philosophy</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {PHILOSOPHY_POINTS.map((point) => (
            <div key={point.number} className="philosophy-card stagger-item" style={{ opacity: 0 }}>
              <div className="philosophy-icon">
                <span className="philosophy-number">{point.number}</span>
              </div>
              <h3 className="mb-2 text-lg">{point.title}</h3>
              <p className="text-muted leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
