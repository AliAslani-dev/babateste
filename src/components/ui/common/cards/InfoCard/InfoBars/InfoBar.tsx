import { Box, Typography } from "@mui/material";

import type { InfoBarsProps } from "./InfoBars.types";

import {
  infoBarsStyles,
  infoBarsItemStyles,
  infoBarsIconStyles,
  infoBarsTextStyles,
  infoBarsDividerStyles,
  infoBarsContentStyles,
} from "./InfoBars.styles";

export default function InfoBars({
  dateText,
  locationText,
  userText,
  dateIcon,
  locationIcon,
  userIcon,
}: InfoBarsProps) {
  const items = [
    {
      id: "date",
      icon: dateIcon,
      text: dateText,
    },
    {
      id: "location",
      icon: locationIcon,
      text: locationText,
    },
    {
      id: "user",
      icon: userIcon,
      text: userText,
    },
  ];

  return (
    <Box sx={infoBarsStyles}>
      {items.map((item, index) => (
        <Box
          key={item.id}
          sx={infoBarsContentStyles}
        >
          <Box sx={infoBarsItemStyles}>
            <Box sx={infoBarsIconStyles}>{item.icon}</Box>

            <Typography variant="mediumXs" sx={infoBarsTextStyles}>
              {item.text}
            </Typography>
          </Box>

          {index < items.length - 1 && (
            <Box sx={infoBarsDividerStyles} />
          )}
        </Box>
      ))}
    </Box>
  );
}