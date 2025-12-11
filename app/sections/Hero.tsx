import type { JSX } from "react";
import { Section } from "../components";

export function Hero(): JSX.Element {
  return (
    <Section id="hero" showTitle={false}>
      <h1>Eesha Jain</h1>
      <p className="section-text mt-6">
        Software engineer passionate about building elegant solutions to complex
        problems. I love crafting beautiful user experiences and exploring the
        intersection of design and technology.
      </p>
    </Section>
  );
}
