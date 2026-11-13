"use client";

import { Box } from "@mui/material";

import type { SliderProgressProps } from "../../types";
import { sliderProgressRootSx, sliderProgressBarSx } from "../../styles";

export default function SliderProgress({
  total,
  current,
  onSelect,
}: SliderProgressProps) {
  return (
    <Box sx={sliderProgressRootSx}>
      {Array.from({ length: total }).map((_, index) => (
        <Box
          key={index}
          onClick={() => onSelect(index)}
          sx={sliderProgressBarSx(index === current)}
        />
      ))}
    </Box>
  );
}