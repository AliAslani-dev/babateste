import { semanticColors } from "@/theme";
import { SxProps, Theme } from "@mui/material";

export const SimpleCardStyles: SxProps<Theme> = {
  width: "100%",
  minHeight: 82,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "2.44%",
  gap: "2.44%",
  borderRadius: "16px",
  border: `1px solid var(--border-brand-subtle, ${semanticColors.border.default})`,
  background: semanticColors.background.default,

  overflow: "hidden",

  "@media (min-width: 600px)": {
    maxWidth: "none",
  },
};

export const SimpleCardImageStyles: SxProps<Theme> = {
  width: "19.51%",
  aspectRatio: "1 / 1",

  flex: "0 0 19.51%",

  borderRadius: "20px",
  overflow: "hidden",
};

export const SimpleCardContentStyles: SxProps<Theme> = {
  minWidth: 0,
  flex: 1,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",

  gap: "4px",
};

export const SimpleCardTitleStyles: SxProps<Theme> = {
  width: "100%",

  textAlign: "right",

  color: semanticColors.text.primary,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const SimpleCardSubtitleStyles: SxProps<Theme> = {
  width: "100%",

  textAlign: "right",
  verticalAlign: "middle",

  color: semanticColors.text.primary,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const SimpleCardButtonStyles: SxProps<Theme> = {
  width: "9.76%",
  minWidth: "9.76%",
  aspectRatio: "1 / 1",

  flex: "0 0 9.76%",

  padding: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& .MuiButton-endIcon": {
    margin: 0,
    color: semanticColors.background.primary,
  },

  "& .MuiButton-endIcon svg": {
    width: 18,
    height: 18,
    color: semanticColors.background.primary,
  },
};