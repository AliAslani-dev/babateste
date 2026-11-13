"use client";

import { useRef } from "react";

interface UseSwipeOptions {
  threshold?: number;
  onSwipeRight?: () => void;
  onSwipeLeft?: () => void;
}

export function useSwipe({
  threshold = 50,
  onSwipeRight,
  onSwipeLeft,
}: UseSwipeOptions = {}) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    touchStartX.current = event.clientX;
    touchStartY.current = event.clientY;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const deltaX = event.clientX - touchStartX.current;
    const deltaY = event.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaY) > Math.abs(deltaX)) return;
    if (Math.abs(deltaX) < threshold) return;

    if (deltaX > 0) {
      onSwipeRight?.();
    } else {
      onSwipeLeft?.();
    }
  };

  return { handlePointerDown, handlePointerUp };
}