import { semanticColors } from "@/theme";
import { SxProps, Theme } from "@mui/material";

export const progressCardStyles: SxProps<Theme> = {
  width: "100%",
  minHeight: 82,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "8px",
  gap: "8px",
  borderRadius: "16px",
  border: `1px solid var(--border-brand-subtle, ${semanticColors.border.default})`,
  background: semanticColors.background.default,
  overflow: "hidden",
  "@media (min-width: 600px)": {
    maxWidth: "none",
  },
};

export const progressCardImageStyles: SxProps<Theme> = {
  width: 64,
  height: 64,

  flex: "0 0 64px",

  borderRadius: "20px",
  overflow: "hidden",
};

export const progressCardContentStyles: SxProps<Theme> = {
  minWidth: 0,
  flex: 1,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",

  gap: "4px",
};

export const progressCardTitleStyles: SxProps<Theme> = {
  width: "100%",

  textAlign: "right",

  color: semanticColors.text.primary,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const progressCardButtonStyles: SxProps<Theme> = {
  width: "clamp(70px, 26.22%, 86px)",
  minWidth: 70,
  maxWidth: 86,
  height: 32,

  flex: "0 1 86px",

  padding: "4px 6px",
  gap: "2px",

  whiteSpace: "nowrap",
  overflow: "hidden",

  "& .MuiButton-endIcon": {
    margin: 0,
    marginInlineStart: "2px",
    flexShrink: 0,

    color: semanticColors.background.default,
  },

  "& .MuiButton-endIcon svg": {
    width: 16,
    height: 16,
    flexShrink: 0,
    color: semanticColors.background.primary,
  },
};