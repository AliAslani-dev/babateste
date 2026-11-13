import { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const horizontalTourCardStyles: SxProps<Theme> = {
  width: "100%",
  minHeight: 82,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "2.44%",
  gap: "1.22%",
  borderRadius: "16px",
  border: `1px solid var(--border-brand-subtle, ${semanticColors.border.default})`,
  background: semanticColors.background.default,
  "@media (min-width: 600px)": {
    maxWidth: "none",
  },
};

export const horizontalTourCardImageStyles: SxProps<Theme> = {
  width: "34.15%",
  aspectRatio: "112 / 64",

  flex: "0 0 34.15%",

  borderRadius: "20px",
  overflow: "hidden",
};

export const horizontalTourCardContentStyles: SxProps<Theme> = {
  minWidth: 0,
  flex: 1,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  gap: "4px",
};

export const horizontalTourCardTitleStyles: SxProps<Theme> = {
  width: "100%",

  color: semanticColors.text.primary,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const horizontalTourCardSubtitleStyles: SxProps<Theme> = {
  width: "100%",

  color: semanticColors.text.secondary,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};