// Navigation
export interface Section {
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string;
}

export interface NavItem {
  readonly id: string;
  readonly label: string;
}

// Content
export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly description: string;
  readonly technologies?: readonly string[];
  readonly github?: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly link?: string;
  readonly github?: string;
}

export interface Social {
  readonly id: string;
  readonly platform: string;
  readonly url: string;
  readonly icon: React.ReactNode;
}

// Wave animation
export interface WaveLayerConfig {
  readonly id: string;
  readonly zIndex: number;
  readonly colors: readonly WaveColor[];
  readonly delayIn: number;
  readonly delayOut: number;
  readonly triggerProgress: number;
}

export interface WaveColor {
  readonly fill: string;
  readonly opacity?: number;
  readonly path: string;
}

// Scroll state for wave animation phases
export interface ScrollState {
  readonly progress: number;
  readonly wavesRising: boolean;
  readonly wavesFullyCovered: boolean;
  readonly wavesReceding: boolean;
  readonly finalContentVisible: boolean;
}

export type ComponentSize = "sm" | "md" | "lg";
