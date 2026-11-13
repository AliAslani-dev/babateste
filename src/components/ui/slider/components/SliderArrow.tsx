"use client";

import { Box } from "@mui/material";

import type { SliderArrowProps } from "./Slider.types";

import { sliderArrowStyles } from "./SliderArrow.styles";

export default function SliderArrow({
  direction,
  disabled = false,
  onClick,
}: SliderArrowProps) {
  const isNext = direction === "next";

  return (
    <Box
      component="button"
      type="button"
      aria-label={isNext ? "اسلاید بعدی" : "اسلاید قبلی"}
      disabled={disabled}
      onClick={onClick}
      sx={sliderArrowStyles}
    >
      <span>{isNext ? "→" : "←"}</span>
    </Box>
  );
}
