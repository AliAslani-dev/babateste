"use client";

import { Box } from "@mui/material";

import type { SliderPaginationProps } from "./Slider.types";

import {
  sliderPaginationStyles,
  sliderPaginationSmallStyles,
  sliderPaginationLargeStyles,
  sliderPaginationDotStyles,
  sliderPaginationActiveStyles,
} from "./SliderPagination.styles";

export default function SliderPagination({
  count,
  activeIndex,
  variant = "small",
  onChange,
}: SliderPaginationProps) {
  if (count <= 1) {
    return null;
  }

  const maxDots = variant === "small" ? 3 : 9;

  const visibleCount = Math.min(count, maxDots);

  const activePosition =
    activeIndex >= visibleCount
      ? visibleCount - 1
      : activeIndex;

  const paginationSizeStyles =
    variant === "small"
      ? sliderPaginationSmallStyles
      : sliderPaginationLargeStyles;

  return (
    <Box
      sx={{
        ...sliderPaginationStyles,
        ...paginationSizeStyles,
      }}
    >
      {Array.from({ length: visibleCount }).map((_, index) => {
        const isActive = index === activePosition;

        return (
          <Box
            key={index}
            component="button"
            type="button"
            aria-label={`اسلاید ${index + 1}`}
            onClick={() => onChange?.(index)}
            sx={
              isActive
                ? sliderPaginationActiveStyles
                : sliderPaginationDotStyles
            }
          />
        );
      })}
    </Box>
  );
}