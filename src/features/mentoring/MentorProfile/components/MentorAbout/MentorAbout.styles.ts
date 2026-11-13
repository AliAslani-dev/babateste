
import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const mentorAboutStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const mentorAboutTextStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  textAlign: "right",
  direction: "rtl",
  lineHeight: 1.8,
  overflowWrap: "anywhere",
};

export const mentorAboutDividerStyles: SxProps<Theme> = {
  width: "100%",
  height: "1px",
  flexShrink: 0,
  bgcolor: semanticColors.background.secondary,
};

export const mentorPricingStyles: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  direction: "rtl",
  textAlign: "right",
};

export const mentorPricingTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
};

export const mentorPricingRowStyles: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  direction: "rtl",
  color: semanticColors.text.secondary,
};

export const mentorPricingValueStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  fontWeight: 500,
};

export const mentorSummaryStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  direction: "rtl",
};

export const mentorSummaryItemStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  gap: "8px",
  direction: "rtl",
};

export const mentorSummaryIconStyles: SxProps<Theme> = {
  width: "24px",
  height: "24px",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: semanticColors.text.secondary,
  "& svg": {
    fontSize: "20px",
  },
};

export const mentorSummaryTextStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "4px",
  minWidth: 0,
  color: semanticColors.text.primary,
  textAlign: "right",
};

export const mentorSummaryLabelStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
};

export const mentorRequestButtonStyles: SxProps<Theme> = {
  width: "100%",
  minHeight: "48px",
  borderRadius: "12px",
  bgcolor: semanticColors.background.primary,
  color: "#FFFFFF",
  fontFamily: "inherit",
  fontWeight: 600,
  boxShadow: "none",
  "&:hover": {
    bgcolor: semanticColors.background.primary,
    opacity: 0.9,
    boxShadow: "none",
  },
};
