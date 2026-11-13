import { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const sportHorizontalCardStyles: SxProps<Theme> = {
  width: "100%",
  minHeight: 98,
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  gap: "1.22%",

  padding: "4.88% 2.44%",

  borderRadius: "16px",
  border: `1px solid var(--border-srong, ${semanticColors.border.default})`,

  background: semanticColors.background.default,

  "@media (min-width: 600px)": {
    maxWidth: "none",
  },
};

export const sportHorizontalCardImageStyles: SxProps<Theme> = {
  width: "25.61%",
  aspectRatio: "84 / 64",

  flex: "0 0 25.61%",

  borderRadius: "20px",
  overflow: "hidden",
};

export const sportHorizontalCardContentStyles: SxProps<Theme> = {
  minWidth: 0,
  flex: 1,

  display: "flex",
  flexDirection: "column",

  gap: "4px",
};

export const sportHorizontalCardTitleStyles: SxProps<Theme> = {
  width: "100%",

  color: semanticColors.text.primary,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const sportHorizontalCardSubtitleStyles: SxProps<Theme> = {
  width: "100%",

  color: semanticColors.text.secondary,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const sportHorizontalCardInfoStyles: SxProps<Theme> = {
  width: "100%",

  display: "flex",
  alignItems: "center",

  gap: "1.22%",

  minWidth: 0,
  overflow: "hidden",

  color: semanticColors.text.secondary,
};

export const sportHorizontalCardInfoItemStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",

  gap: "2px",

  minWidth: 0,

  whiteSpace: "nowrap",
};

export const sportHorizontalCardIconStyles: SxProps<Theme> = {
  width: 14,
  height: 14,

  flexShrink: 0,

  color: semanticColors.text.primary,
};

export const sportHorizontalCardInfoTextStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,

  whiteSpace: "nowrap",
};

export const sportHorizontalCardDividerStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,

  flexShrink: 0,

  userSelect: "none",
};
