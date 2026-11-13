"use client";

import { Box, Typography } from "@mui/material";

import type { ToggleBarsProps } from "./ToggleBars.types";
import { toggleBarsStyles, toggleBarsItemStyles } from "./ToggleBars.styles";

export default function ToggleBars({
  items,
  value,
  onChange,
  gap = 16,
}: ToggleBarsProps) {
  return (
    <Box sx={toggleBarsStyles(gap)} role="tablist" aria-label="بخش‌های اطلاعات">
      {items.map((item) => {
        const isActive = item.value === value;

        return (
          <Box
            key={item.value}
            component="button"
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.value)}
            sx={toggleBarsItemStyles(isActive)}
          >
            <Typography variant="mediumXs">{item.label}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}
