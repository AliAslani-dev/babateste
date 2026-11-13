import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const verticalTourCardStyles: SxProps<Theme> = {
  width: 200,
  height: 255,
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  gap: "4px",

  borderRadius: "16px",
  border: `2px solid var(--border-brand-subtle, ${semanticColors.border.default})`,
  background: semanticColors.background.default,

  overflow: "hidden",
};

export const verticalTourCardImageStyles: SxProps<Theme> = {
  width: 196,
  height: 119,
  flex: "0 0 119px",

  overflow: "hidden",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export const verticalTourCardTitleStyles: SxProps<Theme> = {
  width: 180,

  color: semanticColors.text.primary,

  textAlign: "center",

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  marginBottom: "4px",
};

export const verticalTourCardDividerStyles: SxProps<Theme> = {
  width: 180,
  height: 0,
  flexShrink: 0,

  border: 0,
  borderTop: `1px solid var(--border-default, ${semanticColors.border.default})`,

  margin: 0,
};
export const verticalTourCardInfoStyles: SxProps<Theme> = {
  width: 180,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  gap: "8px",

  direction: "rtl",

  color: semanticColors.text.secondary,

  marginTop: "4px",
};

export const verticalTourCardInfoItemStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",

  gap: "4px",

  minWidth: 0,

  whiteSpace: "nowrap",

  color: semanticColors.text.secondary,
};


export const verticalTourCardInfoTextStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,

  whiteSpace: "nowrap",
};

export const verticalTourCardFooterStyles: SxProps<Theme> = {
  width: 180,

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  marginTop: "8px",
};

export const verticalTourCardPriceStyles: SxProps<Theme> = {
  color:semanticColors.text.primary,

  whiteSpace: "nowrap",
};

export const verticalTourCardButtonStyles: SxProps<Theme> = {
  width: 32,
  minWidth: 32,
  height: 32,

  padding: 0,

  flexShrink: 0,

  color: semanticColors.background.default,

  "& .MuiButton-startIcon": {
    margin: 0,
  },

  "& .MuiButton-endIcon": {
    margin: 0,
  },

  "& svg": {
    width: 18,
    height: 18,
    color:semanticColors.background.default,
  },
};