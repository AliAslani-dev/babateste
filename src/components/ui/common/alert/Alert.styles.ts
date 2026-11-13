import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const alertStyles: SxProps<Theme> = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // rtl: flex-start = right
  width: "100%",
  borderRadius: "12px",
  border: `1px solid ${semanticColors.border.default}`,
  backgroundColor: semanticColors.background.default,
  padding: "20px 16px",
  gap: "12px",
  direction: "rtl",
};

export const alertTitleRowStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row", // rtl: icon (first child) on the right, title to its left
  alignItems: "center",
  gap: "8px",
};

export const alertIconStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: semanticColors.text.primary,
  flexShrink: 0,
};

export const alertTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
};

export const alertDescriptionStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  width: "100%",
  textAlign: "right",
  lineHeight: "28px",
};