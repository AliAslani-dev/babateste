
"use client";

import { Box, Typography } from "@mui/material";



import type { SmartReminderProps } from "./SmartReminder.types";

import {
  smartReminderStyles,
  smartReminderIconStyles,
  smartReminderContentStyles,
  smartReminderTitleStyles,
  smartReminderDescriptionStyles,
} from "./SmartReminder.styles";
import InfoIcon from "@/components/ui/icons/InfoIcon/InfoIcon";

export default function SmartReminder({
  title,
  description,
  className,
}: SmartReminderProps) {
  return (
    <Box
      component="section"
      sx={smartReminderStyles}
      className={className}
    >
      <Box sx={smartReminderIconStyles}>
        <InfoIcon />
      </Box>

      <Box sx={smartReminderContentStyles}>
        <Typography
          variant="demiboldSm"
          component="h3"
          sx={smartReminderTitleStyles}
        >
          {title}
        </Typography>

        <Typography
          variant="mediumSm"
          component="p"
          sx={smartReminderDescriptionStyles}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
