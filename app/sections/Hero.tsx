import type { JSX } from "react";
import { Section } from "../components";

export function Hero(): JSX.Element {
  return (
    <Section id="hero" showTitle={false}>
      <h1 className="mb-0">Eesha Jain</h1>
      <p className="section-text mt-0">
        software engineer driven by <b>curiosity</b>, <b>rigor</b>, 
        and <b>passion</b> to tackle <b>hard problems</b>
      </p>
    </Section>
  );
}
