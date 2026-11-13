// src/components/ui/HeroSliderPagination/HeroSliderPagination.tsx
"use client";

import { Box } from "@mui/material";
import {
  getBulletStyles,
  getPaginationRootStyles,
} from "./styles";
import type { HeroSliderPaginationProps } from "./types";

const DEFAULT_ACTIVE_COLOR = "#0EA5E9";
const DEFAULT_INACTIVE_COLOR = "#CBD5E1";

export function HeroSliderPagination({
  total,
  current,
  activeColor = DEFAULT_ACTIVE_COLOR,
  inactiveColor = DEFAULT_INACTIVE_COLOR,
  onSelect,
  sx,
}: HeroSliderPaginationProps) {
  return (
    <Box
      component="div"
      role="tablist"
      aria-label="slide pagination"
      sx={[getPaginationRootStyles(), ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === current;
        return (
          <Box
            key={i}
            component="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`اسلاید ${i + 1}`}
            onClick={() => onSelect?.(i)}
            sx={getBulletStyles({ isActive, activeColor, inactiveColor })}
          />
        );
      })}
    </Box>
  );
}

export default HeroSliderPagination;
