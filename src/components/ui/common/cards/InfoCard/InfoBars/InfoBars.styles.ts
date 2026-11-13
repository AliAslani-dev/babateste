import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const infoBarsStyles: SxProps<Theme> = {
  width: "100%",
  height: 69,
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",

  px: "16px",
  py: "4px",

  borderRadius: "16px",
  border: `2px solid ${semanticColors.border.default}`,
  backgroundColor: semanticColors.background.default,
};
export const infoBarsContentStyles: SxProps<Theme> = {
  display: "contents",
};
export const infoBarsItemStyles: SxProps<Theme> = {
  flex: "1 1 0",
  minWidth: 0,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
};

export const infoBarsIconStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: semanticColors.background.primary,

  "& svg": {
    color: "inherit",
  },
};

export const infoBarsTextStyles: SxProps<Theme> = {
  minWidth: 0,
  maxWidth: "100%",

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textAlign: "center",
  direction: "rtl",
};
export const infoBarsDividerStyles: SxProps<Theme> = {
  width: "1.5px",
  height: "57px",
  flexShrink: 0,
  backgroundColor: semanticColors.background.secondary,
  opacity: 1,
};
