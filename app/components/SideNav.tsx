"use client";

import type { JSX } from "react";
import type { NavItem } from "../types";

interface SideNavProps {
  items: readonly NavItem[];
  activeId: string;
  visible: boolean;
}

export function SideNav({ items, activeId, visible }: SideNavProps): JSX.Element {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="side-nav"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity var(--transition-slow)",
      }}
      aria-label="Section navigation"
    >
      {items.map((item) => (
        <div key={item.id} className="relative">
          <button
            className={`side-nav-item ${activeId === item.id ? "active" : ""}`}
            onClick={() => handleClick(item.id)}
            aria-label={`Navigate to ${item.label}`}
            aria-current={activeId === item.id ? "true" : undefined}
          />
          <span className="side-nav-label">{item.label}</span>
        </div>
      ))}
    </nav>
  );
}
