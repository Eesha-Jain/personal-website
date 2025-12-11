"use client";

import type { JSX } from "react";
import type { ScrollState, WaveColor } from "../types";
import { WaveLayer, WAVE_PATHS } from "./WaveLayer";

interface WaveTransitionProps {
  scrollState: ScrollState;
}

export function WaveTransition({ scrollState }: WaveTransitionProps): JSX.Element {
  const { progress, wavesRising, wavesFullyCovered, wavesReceding, finalContentVisible } = scrollState;

  // Wave layer configurations - each layer has different colors and timing
  const waveConfigs = [
    {
      id: "light",
      zIndex: 21,
      colors: [
        { fill: "var(--sage-300)", opacity: 0.6, path: WAVE_PATHS.rising.light.top },
        { fill: "var(--sage-400)", opacity: 0.7, path: WAVE_PATHS.rising.light.mid },
        { fill: "var(--sage-400)", opacity: 0.85, path: WAVE_PATHS.rising.light.bottom },
      ] as WaveColor[],
      getTransform: () =>
        wavesRising
          ? `translateY(${wavesReceding ? "-100%" : `${Math.max(0, 100 - progress * 250)}%`})`
          : "translateY(100%)",
      delay: "0s",
    },
    {
      id: "medium",
      zIndex: 22,
      colors: [
        { fill: "var(--sage-500)", opacity: 0.7, path: WAVE_PATHS.rising.medium.top },
        { fill: "var(--sage-500)", opacity: 0.85, path: WAVE_PATHS.rising.medium.mid },
        { fill: "var(--sage-500)", opacity: 1, path: WAVE_PATHS.rising.medium.bottom },
      ] as WaveColor[],
      getTransform: () =>
        wavesRising
          ? `translateY(${wavesReceding ? "-100%" : `${Math.max(0, 120 - progress * 280)}%`})`
          : "translateY(100%)",
      delay: "0.1s",
    },
    {
      id: "dark",
      zIndex: 23,
      colors: [
        { fill: "var(--sage-600)", opacity: 0.8, path: WAVE_PATHS.rising.dark.top },
        { fill: "var(--sage-600)", opacity: 0.9, path: WAVE_PATHS.rising.dark.mid },
        { fill: "var(--sage-600)", opacity: 1, path: WAVE_PATHS.rising.dark.bottom },
      ] as WaveColor[],
      getTransform: () =>
        wavesFullyCovered ? `translateY(${wavesReceding ? "-100%" : "0"})` : "translateY(100%)",
      delay: wavesReceding ? "0.15s" : "0.2s",
    },
    {
      id: "darkest",
      zIndex: 24,
      colors: [
        { fill: "var(--sage-700)", opacity: 0.9, path: WAVE_PATHS.rising.darkest.top },
        { fill: "var(--sage-700)", opacity: 1, path: WAVE_PATHS.rising.darkest.mid },
        { fill: "var(--sage-800)", opacity: 1, path: WAVE_PATHS.rising.darkest.bottom },
      ] as WaveColor[],
      getTransform: () =>
        wavesFullyCovered ? `translateY(${wavesReceding ? "-100%" : "0"})` : "translateY(100%)",
      delay: wavesReceding ? "0.2s" : "0.3s",
    },
  ];

  return (
    <>
      {waveConfigs.map((config) => (
        <WaveLayer
          key={config.id}
          colors={config.colors}
          className={`z-${config.zIndex}`}
          style={{
            transform: config.getTransform(),
            transitionDelay: config.delay,
            opacity: finalContentVisible ? 0 : 1,
            zIndex: config.zIndex,
          }}
        />
      ))}
    </>
  );
}
