import { semanticColors } from "@/theme";
import { SxProps, Theme } from "@mui/material";

export const DayTimeCardStyles: SxProps<Theme> = {
  width: "100%",
  aspectRatio: "328 / 82",
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

export const DayTimeCardImageStyles: SxProps<Theme> = {
  width: "19.51%",
  aspectRatio: "1 / 1",

  flex: "0 0 19.51%",

  borderRadius: "20px",
  overflow: "hidden",
};

export const DayTimeCardContentStyles: SxProps<Theme> = {
  minWidth: 0,
  flex: 1,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",

  gap: "4px",
};

export const DayTimeCardTitleStyles: SxProps<Theme> = {
  width: "100%",

  textAlign: "right",

  color: semanticColors.text.primary,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const DayTimeCardSubtitleStyles: SxProps<Theme> = {
  width: "100%",

  color: semanticColors.text.secondary,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const DayTimeCardButtonStyles: SxProps<Theme> = {
  width: "26.22%",
  minWidth: "26.22%",
  aspectRatio: "86 / 32",

  flex: "0 0 26.22%",

  padding: "4px 8px",

  gap: "2px",

  "& .MuiButton-endIcon": {
    margin: 0,
    marginInlineStart: "2px",

    color: semanticColors.text.primaryColor,
  },

  "& .MuiButton-endIcon svg": {
    width: 16,
    height: 16,
    color: semanticColors.text.primaryColor,
  },
};