"use client";

import { useState, useEffect, useCallback } from "react";
import type { ScrollState } from "../types";

interface UseScrollProgressOptions {
  risingThreshold?: number;
  coveredThreshold?: number;
  recedingThreshold?: number;
  visibleThreshold?: number;
}

export function useScrollProgress(options: UseScrollProgressOptions = {}): ScrollState {
  const {
    risingThreshold = 0.1,
    coveredThreshold = 0.5,
    recedingThreshold = 0.7,
    visibleThreshold = 0.85,
  } = options;

  const [scrollState, setScrollState] = useState<ScrollState>({
    progress: 0,
    wavesRising: false,
    wavesFullyCovered: false,
    wavesReceding: false,
    finalContentVisible: false,
  });

  const handleScroll = useCallback((): void => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollTop / windowHeight, 1);

    setScrollState({
      progress,
      wavesRising: progress > risingThreshold,
      wavesFullyCovered: progress > coveredThreshold,
      wavesReceding: progress > recedingThreshold,
      finalContentVisible: progress > visibleThreshold,
    });
  }, [risingThreshold, coveredThreshold, recedingThreshold, visibleThreshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrollState;
}
