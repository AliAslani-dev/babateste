"use client";

import { Box, Typography } from "@mui/material";

import {
  progressBarContainerStyles,
  progressBarHeaderStyles,
  progressBarTrackStyles,
  progressBarFillStyles,
} from "./ProgressBar.styles";

import { ProgressBarProps } from "./ProgressBar.types";
import { toPersianNumber } from "@/lib/utils";

export default function ProgressBar({ percentage }: ProgressBarProps) {
  const normalizedPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <Box sx={progressBarContainerStyles}>
      <Box sx={progressBarHeaderStyles}>
        <Typography variant="regular2xs">
          {toPersianNumber(normalizedPercentage)}٪
          {normalizedPercentage > 0 && " تکمیل شده"}
        </Typography>
      </Box>

      <Box sx={progressBarTrackStyles}>
        <Box
          sx={{
            ...progressBarFillStyles,
            width: `${normalizedPercentage}%`,
          }}
        />
      </Box>
    </Box>
  );
}
