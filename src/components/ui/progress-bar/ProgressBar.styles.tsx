import { colors, semanticColors } from "@/theme";
import { SxProps, Theme } from "@mui/material";

export const progressBarContainerStyles: SxProps<Theme> = {
  width: 148,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

export const progressBarHeaderStyles: SxProps<Theme> = {
  textAlign: "left",
  color: semanticColors.background.primary,
};

export const progressBarTrackStyles: SxProps<Theme> = {
  width: 148,
  height: 8,
  borderRadius: 8,
  background: semanticColors.border.default,
  overflow: "hidden",
  flexShrink: 0,
};

export const progressBarFillStyles: SxProps<Theme> = {
  height: 8,
  borderRadius: 4,
  background: colors.cyan[500],
  transition: "width 0.3s ease",
};
