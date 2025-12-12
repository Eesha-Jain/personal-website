import type { JSX } from "react";
import { Section } from "../components";

export function About(): JSX.Element {
  return (
    <Section id="about" title="about me">
      <p className="section-text mb-6">
        Hey there! I'm a software engineer and <b>lover of all things programming</b>. 
        I'm currently pursuing a <b>Bachelor's degree in Computer Science</b> at the 
        University of Washington's Paul G. Allen School of Computer Science & 
        Engineering. My projects reflect my <b>curiosity</b> to <b>learn</b> new cutting-edge 
        technologies and build <b>impactful</b> solutions for my community. 
        When I'm not deep in code, you'll probably find me watching a
        show, exercising, reading a good book, or dancing.
      </p>
    </Section>
  );
}
