"use client";

import { Box, Typography } from "@mui/material";

import type { TitleBarProps } from "./TitleBar.types";
import { titleBarStyles } from "./TitleBar.styles";
import { semanticColors } from "@/theme";

export default function TitleBar({
  title,
  actionLabel,
  icon,
  onActionClick,
}: TitleBarProps) {
  const hasAction = Boolean(actionLabel || icon);

  return (
    <Box sx={titleBarStyles.root}>
      <Typography
        variant="boldBase"
        component="h2"
        sx={titleBarStyles.title}
      >
        {title}
      </Typography>

      {hasAction && (
        <Box
          component="button"
          type="button"
          onClick={onActionClick}
          sx={titleBarStyles.action}
        >
          {actionLabel && (
            <Typography variant="mediumSm" color={semanticColors.text.primary}>
              {actionLabel}
            </Typography>
          )}

          {icon && (
            <Box component="span" sx={titleBarStyles.icon}>
              {icon}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}