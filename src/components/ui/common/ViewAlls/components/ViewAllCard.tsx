
"use client";

import { Box, Typography } from "@mui/material";

import type { ViewAllProps } from "./ViewAllCard.types";

import {
  ViewAllStyles,
  ViewAllLayersIconStyles,
  ViewAllContentStyles,
  ViewAllTitleStyles,
  ViewAllSubtitleStyles,
  ViewAllChevronStyles,
} from "./ViewAllCard.styles";

import ChevronLeftIcon from "@/components/ui/icons/arrows/ChevronLefticon";
import { semanticColors } from "@/theme";
import DoctorListIcon from "@/components/ui/icons/health/DoctorListIcon";

export default function ViewAll({
  title = "همه پزشکان",
  subtitle = "جستجو در میان پزشکان و متخصص ها",
  className,
  onClick,
  icon,
}: ViewAllProps) {
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      className={className}
      sx={ViewAllStyles}
    >
      <Box sx={ViewAllLayersIconStyles}>
        {icon ?? (
          <DoctorListIcon
            color={semanticColors.background.primary}
          />
        )}
      </Box>

      <Box sx={ViewAllContentStyles}>
        <Typography
          variant="demiboldSm"
          component="span"
          sx={ViewAllTitleStyles}
        >
          {title}
        </Typography>

        <Typography
          variant="regularXs"
          component="span"
          sx={ViewAllSubtitleStyles}
        >
          {subtitle}
        </Typography>
      </Box>

      <Box sx={ViewAllChevronStyles}>
        <ChevronLeftIcon />
      </Box>
    </Box>
  );
}
