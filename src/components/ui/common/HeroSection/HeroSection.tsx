// src/components/ui/common/HeroSection/HeroSection.tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

import { HeroSliderPagination } from "@/components/ui/HeroSliderPagination";

import type { HeroSectionProps } from "./types";
import {
  getSlideWrapperSx,
  heroRootSx,
  paginationWrapperSx,
  slideBgImgSx,
  slideTextSx,
} from "./styles";

// ─── Swipe threshold ───────────────────────────────────────
const SWIPE_THRESHOLD = 40; // px

//  Component
export function HeroSection({
  slides,
  timer,
  activeBulletColor,
  inactiveBulletColor,
  sx,
}: HeroSectionProps) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  // ─── Auto-play ──────────────────────────────────────────
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timer && timer > 0) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % total);
      }, timer);
    }
  }, [timer, total]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetInterval]);

  // ─── Swipe / Drag ───────────────────────────────────────
  const pointerStartX = useRef<number | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    const delta = e.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(delta) < SWIPE_THRESHOLD) return;

    if (delta < 0) {
      setCurrent((prev) => (prev + 1) % total);
    } else {
      setCurrent((prev) => (prev - 1 + total) % total);
    }
    resetInterval();
  };

  // ─── Navigate ───────────────────────────────────────────
  const goTo = (index: number) => {
    setCurrent(index);
    resetInterval();
  };

  if (total === 0) return null;

  const currentSlide = slides[current];
  const resolvedActiveColor =
    currentSlide.activeBulletColor ?? activeBulletColor;

  return (
    <Box
      sx={[heroRootSx, ...(Array.isArray(sx) ? sx : [sx])]}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {/* ── اسلایدها — روی هم، فقط active نمایش دارد ────── */}
      {slides.map((slide, i) => (
        <Box key={i} sx={getSlideWrapperSx(i === current)}>
          {/* تصویر پس‌زمینه */}
          {slide.imageSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <Box
              component="img"
              src={slide.imageSrc}
              alt={slide.imageAlt ?? ""}
              sx={slideBgImgSx}
            />
          )}

          {/* متن — بالا سمت راست */}
          <Box sx={slideTextSx}>
            <Typography
              variant="demiboldSm"
              component="h2"
              sx={{ whiteSpace: "pre-line" }}
            >
              {slide.title}
            </Typography>
            {slide.subtitle && (
              <Typography variant="demiboldSm" component="p">
                {slide.subtitle}
              </Typography>
            )}
            {slide.description && (
              <Typography variant="medium2xs" component="p">
                {slide.description}
              </Typography>
            )}
          </Box>
        </Box>
      ))}

      {/* ── Pagination ──────────────────────────────────── */}
      {total > 1 && (
        <Box sx={paginationWrapperSx}>
          <HeroSliderPagination
            total={total}
            current={current}
            onSelect={goTo}
            activeColor={resolvedActiveColor}
            inactiveColor={inactiveBulletColor}
          />
        </Box>
      )}
    </Box>
  );
}

export default HeroSection;
