import type { JSX, ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  showTitle?: boolean;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  contentClassName = "",
  showTitle = true,
}: SectionProps): JSX.Element {
  return (
    <section id={id} className={`section-container ${className}`.trim()}>
      <div className={`section-content ${contentClassName}`.trim()}>
        {showTitle && title && (
          <div className="section-title">
            <h2>{title}</h2>
            {subtitle && <p className="text-muted mt-2">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
