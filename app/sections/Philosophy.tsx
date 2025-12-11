import type { JSX } from "react";
import { AnimatedSection } from "../components";

const PHILOSOPHY_POINTS = [
  {
    number: "01",
    title: "Stay Curious",
    description:
      "The moment you think you know everything is the moment you stop growing. I try to approach every day with the mindset of a student — there's always something new to learn, someone to learn from, or a perspective I haven't considered.",
  },
  {
    number: "02",
    title: "Done > Perfect",
    description:
      "Perfectionism can be paralyzing. I've learned that shipping something good and iterating is almost always better than waiting for perfect. The best feedback comes from the real world, not from endless planning.",
  },
  {
    number: "03",
    title: "Be Kind, Always",
    description:
      "Everyone you meet is fighting a battle you know nothing about. Whether it's in code reviews, conversations, or just daily interactions — a little kindness goes a long way. Tech is hard enough without people being difficult.",
  },
];

export function Philosophy(): JSX.Element {
  return (
    <AnimatedSection id="philosophy" className="section-container snap-section">
      <div className="section-content">
        <div className="section-title">
          <h2>how i try to live</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {PHILOSOPHY_POINTS.map((point) => (
            <div key={point.number} className="philosophy-card stagger-item" style={{ opacity: 0 }}>
              <div className="philosophy-icon">
                <span className="philosophy-number">{point.number}</span>
              </div>
              <h3 className="mb-2 text-lg">{point.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
