import {  semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";
export const cardCategoryStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",

  height: 68,

  borderRadius: "16px",

  border: `2px solid var(--border-brand-subtle, ${semanticColors.border.default})`,

  background: semanticColors.background.default,

  padding: "4px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  boxSizing: "border-box",

  margin: 0,
};

export const cardCategoryIconStyles = (
  width: number | string = 36,
  height: number | string = 36,
): SxProps<Theme> => ({
  position: "relative",
  width,
  height,
  flexShrink: 0,
});

export const cardCategoryImageStyles: SxProps<Theme> = {
  objectFit: "contain",
};

export const cardCategoryTitleStyles: SxProps<Theme> = {
  padding: "0 2px 6px",
  textAlign: "center",
  whiteSpace: "nowrap",
};
