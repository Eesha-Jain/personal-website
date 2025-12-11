import type { JSX } from "react";

interface ScrollIndicatorProps {
  visible: boolean;
  text?: string;
}

export function ScrollIndicator({
  visible,
  text = "Scroll to explore",
}: ScrollIndicatorProps): JSX.Element {
  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity var(--transition-slow)",
      }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center text-subtle">
        <span className="text-sm mb-2">{text}</span>
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: "var(--color-text-subtle)" }}
        >
          <div
            className="w-1.5 h-3 rounded-full mt-2 animate-bounce"
            style={{ background: "var(--color-text-subtle)" }}
          />
        </div>
      </div>
    </div>
  );
}
