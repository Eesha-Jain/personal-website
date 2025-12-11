"use client";

import { useState, useEffect } from "react";

// Detects when a section crosses the vertical center of the viewport
export function useActiveSection(sectionIds: readonly string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Creates a detection line at viewport center
        threshold: 0,
      }
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
