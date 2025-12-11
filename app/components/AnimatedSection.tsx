"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  id,
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps): JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <section
      ref={ref}
      id={id}
      className={`animated-section ${isVisible ? "visible" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
