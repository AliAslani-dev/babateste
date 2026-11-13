import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const teacherCardStyles: SxProps<Theme> = {
  width: "100%",
  p: { xs: 2, sm: 2.5 },
  borderRadius: "20px",
  bgcolor: semanticColors.background.secondary,
  border: "1px solid",
  borderColor: "divider",
  display: "flex",
  flexDirection: "column",
  gap: 2.5,
};

export const teacherHeaderStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: { xs: 2, sm: 3 },
};

/* عکس مربعی بزرگ و خوشگل */
export const teacherAvatarWrapperStyles: SxProps<Theme> = {
  position: "relative",
  width: { xs: 96, sm: 120 },
  height: { xs: 96, sm: 120 },
  flexShrink: 0,
  borderRadius: "16px",
  overflow: "hidden",
  bgcolor: semanticColors.background.default,
  border: "1px solid",
  borderColor: "divider",
  boxShadow: "0 8px 24px -12px rgba(0,0,0,0.25)",
};

export const teacherAvatarFallbackStyles: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  typography: "boldXl",
  color: semanticColors.action.primary,
  bgcolor: semanticColors.background.secondary,
};

export const teacherInfoStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  minWidth: 0,
  flex: 1,
};

export const teacherNameStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  lineHeight: 1.4,
};

export const teacherRoleChipStyles: SxProps<Theme> = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.5,
  alignSelf: "flex-start",
  px: 1,
  py: "2px",
  borderRadius: "999px",
  bgcolor: semanticColors.background.default,
  color: semanticColors.text.secondary,
  typography: "mediumXs",
};

export const teacherRoleDotStyles: SxProps<Theme> = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  bgcolor: semanticColors.action.primary,
};

export const teacherDescriptionBoxStyles: SxProps<Theme> = {
  position: "relative",
  p: 2,
  pt: 2.5,
  borderRadius: "14px",
  bgcolor: semanticColors.background.default,
  border: "1px solid",
  borderColor: "divider",
};

export const teacherQuoteMarkStyles: SxProps<Theme> = {
  position: "absolute",
  top: 4,
  right: 10,
  fontSize: 36,
  lineHeight: 1,
  color: semanticColors.action.primary,
  opacity: 0.25,
  fontFamily: "serif",
  pointerEvents: "none",
};

export const teacherDescriptionStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  lineHeight: 1.9,
  whiteSpace: "pre-line",
};