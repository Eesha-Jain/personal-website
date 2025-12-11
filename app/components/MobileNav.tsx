"use client";

import { useState } from "react";
import type { NavItem } from "../types";
import { ChevronDownIcon } from "./Icons";

interface MobileNavProps {
  items: readonly NavItem[];
  activeId: string;
  visible: boolean;
}

export function MobileNav({ items, activeId, visible }: MobileNavProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const activeItem = items.find((item) => item.id === activeId);

  return (
    <nav
      className="mobile-nav"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <button
        className="mobile-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Navigation menu"
      >
        <span className="mobile-nav-current">{activeItem?.label ?? "Navigate"}</span>
        <ChevronDownIcon size={20} className={`mobile-nav-chevron ${isOpen ? "open" : ""}`} />
      </button>

      <div className={`mobile-nav-dropdown ${isOpen ? "open" : ""}`}>
        {items.map((item) => (
          <button
            key={item.id}
            className={`mobile-nav-item ${activeId === item.id ? "active" : ""}`}
            onClick={() => handleClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
