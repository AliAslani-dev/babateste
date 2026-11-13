"use client";

import { Box } from "@mui/material";

import LoginSlide from "./LoginSlide";
import type { LoginSliderProps } from "../../types";
import { loginSliderSx, loginSliderItemSx } from "../../styles";

export default function LoginSlider({
  slides,
  currentSlide,
}: LoginSliderProps) {
  return (
    <Box sx={loginSliderSx(slides.length, currentSlide)}>
      {slides.map((slide, index) => (
        <Box key={slide.id} sx={loginSliderItemSx(slides.length)}>
          <LoginSlide
            slide={slide}
            isActive={index === currentSlide}
            isFirst={index === 0}
          />
        </Box>
      ))}
    </Box>
  );
}