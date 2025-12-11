import type { CSSProperties } from "react";

interface WaveDecorationProps {
  className?: string;
  style?: CSSProperties;
}

export function WaveDecoration({ className = "", style }: WaveDecorationProps): JSX.Element {
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-20 ${className}`.trim()} style={style} aria-hidden="true">
      <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="wave-svg-decorative">
        <path fill="var(--sage-400)" fillOpacity="0.3" d="M0,200 L0,100 Q180,60 360,100 T720,100 T1080,100 T1440,100 L1440,200 Z" />
        <path fill="var(--sage-500)" fillOpacity="0.3" d="M0,200 L0,130 Q180,100 360,130 T720,130 T1080,130 T1440,130 L1440,200 Z" />
        <path fill="var(--sage-600)" fillOpacity="0.3" d="M0,200 L0,160 Q180,140 360,160 T720,160 T1080,160 T1440,160 L1440,200 Z" />
      </svg>
    </div>
  );
}
