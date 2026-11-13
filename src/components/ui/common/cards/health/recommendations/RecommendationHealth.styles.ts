import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const recommendationHealthStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",

  height: 78,
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  padding: "8px",
  gap: "4px",

  borderRadius: "16px",
  border: `1px solid ${semanticColors.border.default}`,
  background: semanticColors.background.default,

  overflow: "hidden",

  "@media (min-width: 600px)": {
    height: 88,
  },
};

export const recommendationHealthImageStyles: SxProps<Theme> = {
  width: 56,
  height: 56,
  minWidth: 56,
  flex: "0 0 56px",

  borderRadius: "20px",
  overflow: "hidden",
};

export const recommendationHealthContentStyles: SxProps<Theme> = {
  minWidth: 0,
  flex: 1,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  gap: "4px",
};

export const recommendationHealthTitleStyles: SxProps<Theme> = {
  width: "100%",

  color: semanticColors.text.primary,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const recommendationHealthTextStyles: SxProps<Theme> = {
  width: "100%",

  color: semanticColors.text.secondary,

  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
};