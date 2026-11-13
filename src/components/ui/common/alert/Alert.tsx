import { Box, Typography } from "@mui/material";

import InfoIcon from "@/components/ui/icons/cards/health-card/alertIcon";
import type { AlertProps } from "./Alert.types";
import {
  alertStyles,
  alertTitleRowStyles,
  alertIconStyles,
  alertTitleStyles,
  alertDescriptionStyles,
} from "./Alert.styles";

export default function Alert({
  title,
  description,
  icon,
  className,
}: AlertProps) {
  return (
    <Box sx={alertStyles} className={className}>
      {/* Title row: icon + title */}
      <Box sx={alertTitleRowStyles}>
        <Box sx={alertIconStyles}>
          {icon ?? <InfoIcon />}
        </Box>
        <Typography variant="demiboldSm" sx={alertTitleStyles}>
          {title}
        </Typography>
      </Box>

      {/* Description */}
      <Typography variant="mediumSm" sx={alertDescriptionStyles}>
        {description}
      </Typography>
    </Box>
  );
}
