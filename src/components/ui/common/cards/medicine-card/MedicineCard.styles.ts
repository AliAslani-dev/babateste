import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

const ACCENT = "#0A8EA6";

export const medicineCardStyles: SxProps<Theme> = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row-reverse", // with rtl: first child (toggle column) on the left
  alignItems: "stretch",
  width: "100%",
  borderRadius: "12px",
  border: `1px solid ${semanticColors.border.default}`,
  backgroundColor: semanticColors.background.default,
  padding: "16px",
  gap: "12px",
  direction: "rtl",
};

export const medicineCardContentStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // rtl: flex-start = right
  justifyContent: "space-between",
  flex: 1,
  borderInlineStart: `2px solid ${ACCENT}`, // rtl: inline-start = right
  paddingInlineStart: "8px",
};

export const medicineCardGroupStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

export const medicineCardNameStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
};

export const medicineCardSecondaryTextStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
};

export const medicineCardTertiaryTextStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
};

export const medicineCardLeftStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // edit icon is centered under the toggle
  justifyContent: "space-between",
  flexShrink: 0,
};

export const medicineCardEditIconStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    color: semanticColors.text.secondary,
  },
};