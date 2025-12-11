import type { JSX } from "react";
import { Section } from "../components";

export function About(): JSX.Element {
  return (
    <Section id="about" title="about me">
      <p className="section-text mb-6">
        Hey there! I&apos;m a software engineer who genuinely loves what I do. 
        There&apos;s something magical about turning an idea into something real — 
        whether it&apos;s a sleek web app, a useful tool, or just some code that 
        makes someone&apos;s life a little easier.
      </p>
      
      <p className="section-text-sm mb-6">
        When I&apos;m not deep in code, you&apos;ll probably find me with a 
        coffee in hand, exploring a new hiking trail, or getting lost in a 
        good book. I&apos;m a firm believer that the best ideas come when you 
        give your mind space to wander — which is my excuse for spending way 
        too much time on YouTube rabbit holes.
      </p>

      <p className="section-text-sm">
        I&apos;m endlessly curious, a little bit of a perfectionist (working on it), 
        and always excited to learn something new. If you&apos;re building something 
        interesting, I&apos;d love to hear about it.
      </p>
    </Section>
  );
}
