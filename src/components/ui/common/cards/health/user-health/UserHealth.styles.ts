import { semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

export const userHealthStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",

  height: 90,

  boxSizing: "border-box",

  display: "flex",
  flexDirection: "column",

  borderRadius: "16px",
  border: `2px solid var(--border-brand-subtle, ${semanticColors.border.default})`,
  background: semanticColors.background.default,

  padding: "6px 12px",

  justifyContent: "space-between",

  overflow: "hidden",
};

export const userHealthTopStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  gap: "8px",
};

export const userHealthImageStyles: SxProps<Theme> = {
  width: 32,
  height: 32,

  flexShrink: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
};

export const userHealthTitleStyles: SxProps<Theme> = {
  position: "relative",
  top: "-4px",

  minWidth: 0,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const userHealthSubtitleWrapperStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,

  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",

  direction: "rtl",

  gap: "3px",

  position: "relative",
  top: "-4px",

  overflow: "hidden",

  "& > *": {
    minWidth: 0,
  },
};

export const userHealthBottomStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: semanticColors.text.secondary,

  gap: "4px",

  direction: "rtl",

  overflow: "hidden",

  "& > span": {
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};

export const userHealthArrowStyles: SxProps<Theme> = {
  width: "8px",
  height: "12px",

  flexShrink: 0,

  color: semanticColors.background.primary,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& svg": {
    width: "14px",
    height: "14px",
  },
};