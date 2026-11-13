import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const toggleBarsStyles = (
  gap: string | number = 16,
): SxProps<Theme> => ({
  width: "100%",
  height: 40,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  columnGap: typeof gap === "number" ? `${gap}px` : gap,
  p: "4px",
  borderRadius: "16px",
  bgcolor: semanticColors.background.secondary,
});

export const toggleBarsItemStyles = (active: boolean): SxProps<Theme> => ({
  flex: "1 1 0",
  minWidth: 0,
  height: 32,
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  px: "8px",

  border: 0,
  borderRadius: "12px",
  bgcolor: active ? semanticColors.background.default : "transparent",

  color: active ? semanticColors.text.primary : semanticColors.text.secondary,

  cursor: "pointer",
  whiteSpace: "nowrap",

  transition: "background-color 150ms ease, color 150ms ease",

  "&:focus-visible": {
    outline: `2px solid ${semanticColors.action.primary}`,
    outlineOffset: -2,
  },
});
