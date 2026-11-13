// src/features/auth/styles/login-slider.styles.ts
import type { SxProps, Theme } from "@mui/material/styles";

export const loginSliderSx = (
  totalSlides: number,
  currentSlide: number
): SxProps<Theme> => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  width: `${totalSlides * 100}%`,
  transform: `translateX(${currentSlide * (100 / totalSlides)}%)`,
  transition: "transform 350ms ease",
});

export const loginSliderItemSx = (
  totalSlides: number
): SxProps<Theme> => ({
  width: `${100 / totalSlides}%`,
  flexShrink: 0,
});