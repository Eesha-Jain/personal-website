"use client";

import type { JSX } from "react";
import {
  WaveTransition,
  WaveDecoration,
  SideNav,
  MobileNav,
  ScrollIndicator,
  SectionDivider,
} from "./components";
import { Hero, About, Skills, Philosophy, Experience, Projects, Socials } from "./sections";
import { useScrollProgress, useActiveSection } from "./hooks";
import type { NavItem } from "./types";

// Navigation items - "hero" excluded since users shouldn't navigate back to it
const NAV_ITEMS: readonly NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "philosophy", label: "Philosophy" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "socials", label: "Connect" },
] as const;

// All section IDs for intersection observer tracking
const SECTION_IDS: readonly string[] = ["hero", ...NAV_ITEMS.map((item) => item.id)];

export default function Home(): JSX.Element {
  const scrollState = useScrollProgress();
  const activeSection = useActiveSection(SECTION_IDS);
  const { progress, wavesRising, finalContentVisible } = scrollState;

  return (
    <div className="relative">
      {/* Hero & Wave Transition - 300vh gives the animation enough scroll runway */}
      <div className="relative h-[300vh]">
        {/* Snap target for Hero (top) */}
        <div id="hero-snap" className="absolute top-0 h-screen snap-section" />
        
        {/* Snap target for About (after wave transition completes) */}
        <div id="about-snap" className="absolute top-[100vh] h-[200vh] snap-section" />
        
        <section 
          className="sticky top-0 min-h-screen overflow-hidden" 
          style={{ background: 'linear-gradient(to bottom, var(--sage-50), var(--sage-100))' }}
        >
          {/* Hero - fades out when waves rise */}
          <div
            className="absolute inset-0 flex items-center justify-center z-10"
            style={{
              opacity: wavesRising ? 0 : 1,
              transition: "opacity var(--transition-slow)",
            }}
          >
            <Hero />
          </div>

          <WaveTransition scrollState={scrollState} />

          {/* About - fades in after waves recede */}
          <div
            className="absolute inset-0 z-30"
            style={{
              opacity: finalContentVisible ? 1 : 0,
              transform: finalContentVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity var(--transition-wave), transform var(--transition-wave)",
              pointerEvents: finalContentVisible ? "auto" : "none",
            }}
          >
            <About />
          </div>

          <WaveDecoration
            style={{
              opacity: wavesRising ? 0 : 1,
              transition: "opacity var(--transition-wave)",
            }}
          />

          <ScrollIndicator visible={progress < 0.1} />
        </section>
      </div>

      {/* Main Content */}
      <main 
        className="relative z-10" 
        style={{ background: 'linear-gradient(to bottom, var(--sage-50), var(--sage-100))' }}
      >
        <SectionDivider />
        <Skills />

        <SectionDivider />
        <Philosophy />

        <SectionDivider />
        <Experience />

        <SectionDivider />
        <Projects />

        <SectionDivider />
        <Socials />

        <div className="h-24" />
      </main>

      {/* Navigation - appears after wave transition */}
      <SideNav
        items={NAV_ITEMS}
        activeId={activeSection}
        visible={finalContentVisible}
      />

      <MobileNav
        items={NAV_ITEMS}
        activeId={activeSection}
        visible={finalContentVisible}
      />
    </div>
  );
}
