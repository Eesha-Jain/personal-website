import type { CSSProperties, JSX } from "react";
import type { WaveColor } from "../types";

interface WaveLayerProps {
  colors: readonly WaveColor[];
  className?: string;
  style?: CSSProperties;
  viewBox?: string;
  svgClassName?: string;
}

export function WaveLayer({
  colors,
  className = "",
  style,
  viewBox = "0 0 1440 900",
  svgClassName = "wave-svg",
}: WaveLayerProps): JSX.Element {
  return (
    <div className={`wave-container ${className}`.trim()} style={style}>
      <svg viewBox={viewBox} preserveAspectRatio="none" className={svgClassName}>
        {colors.map((color, index) => (
          <path key={index} fill={color.fill} fillOpacity={color.opacity ?? 1} d={color.path} />
        ))}
      </svg>
    </div>
  );
}

// SVG path definitions for wave shapes
export const WAVE_PATHS = {
  decorative: {
    layer1: "M0,200 L0,100 Q180,60 360,100 T720,100 T1080,100 T1440,100 L1440,200 Z",
    layer2: "M0,200 L0,130 Q180,100 360,130 T720,130 T1080,130 T1440,130 L1440,200 Z",
    layer3: "M0,200 L0,160 Q180,140 360,160 T720,160 T1080,160 T1440,160 L1440,200 Z",
  },
  rising: {
    light: {
      top: "M0,900 L0,350 Q180,280 360,350 T720,350 T1080,350 T1440,350 L1440,900 Z",
      mid: "M0,900 L0,420 Q180,360 360,420 T720,420 T1080,420 T1440,420 L1440,900 Z",
      bottom: "M0,900 L0,500 Q180,450 360,500 T720,500 T1080,500 T1440,500 L1440,900 Z",
    },
    medium: {
      top: "M0,900 L0,380 Q240,300 480,380 T960,380 T1440,380 L1440,900 Z",
      mid: "M0,900 L0,460 Q240,400 480,460 T960,460 T1440,460 L1440,900 Z",
      bottom: "M0,900 L0,540 Q240,490 480,540 T960,540 T1440,540 L1440,900 Z",
    },
    dark: {
      top: "M0,900 L0,320 Q300,240 600,320 T1200,320 T1440,320 L1440,900 Z",
      mid: "M0,900 L0,400 Q300,340 600,400 T1200,400 T1440,400 L1440,900 Z",
      bottom: "M0,900 L0,480 Q300,430 600,480 T1200,480 T1440,480 L1440,900 Z",
    },
    darkest: {
      top: "M0,900 L0,280 Q360,200 720,280 T1440,280 L1440,900 Z",
      mid: "M0,900 L0,380 Q360,320 720,380 T1440,380 L1440,900 Z",
      bottom: "M0,900 L0,480 Q360,430 720,480 T1440,480 L1440,900 Z",
    },
  },
} as const;
