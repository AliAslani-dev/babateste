import { semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

export const sliderArrowStyles: SxProps<Theme> = {
  width: "24px",
  height: "24px",
  minWidth: "24px",
  padding: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",
  zIndex: 21,

  border: `2px solid ${semanticColors.action.primary}`,
  borderRadius: "50%",
  background: semanticColors.background.default,
  color:semanticColors.action.primary,

  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1,

  cursor: "pointer",
  boxSizing: "border-box",

  "& > span": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    lineHeight: 1,
    transform: "translateY(-1px)",
  },

  "&:hover": {
    background: semanticColors.background.default,
  },

  "&:disabled": {
    opacity: 1,
    cursor: "default",
  },
};
