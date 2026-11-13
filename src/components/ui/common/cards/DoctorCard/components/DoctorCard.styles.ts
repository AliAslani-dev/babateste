import { colors, semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

export const doctorCardStyles: SxProps<Theme> = {
  width: "100%",

  minHeight: 140,
  height: 140,

  boxSizing: "border-box",
  padding: "8px",

  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  gap: "8px",

  direction: "rtl",
  background: semanticColors.background.default,
  border: `1px solid var(--border-strong, ${semanticColors.border.secondary})`,
  borderRadius: "16px",

  overflow: "hidden",
  margin: 0,
};

export const doctorCardImageWrapperStyles: SxProps<Theme> = {
  position: "relative",
  width: 100,
  minWidth: 80,
  maxWidth: 100,
  height: 122,
  flex: "1 1 100px",

  borderRadius: "16px",
  overflow: "hidden",
};

export const doctorCardImageStyles: SxProps<Theme> = {
  objectFit: "cover",
};

export const doctorCardNameRowStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "4px",

  "& > .MuiTypography-root": {
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};

export const doctorCardInfoStyles: SxProps<Theme> = {
  flex: "1 1 0",
  minWidth: 0,
  height: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  gap: "4px",
  paddingBottom: "32px",
  boxSizing: "border-box",
  overflow: "hidden",
};

export const doctorCardHospitalRowStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  minWidth: 0,
  flexShrink: 0,
  overflow: "hidden",
};

export const doctorCardHospitalStyles: SxProps<Theme> = {
  minWidth: 0,
  flexShrink: 1,
  color: semanticColors.text.secondary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const doctorCardStarStyles: SxProps<Theme> = {
  fontSize: 14,
  color: colors.orange[500],
  flexShrink: 0,
};

export const doctorCardRatingStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  flexShrink: 0,
};

export const doctorCardReviewCountStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export const doctorCardAppointmentBadgeStyles: SxProps<Theme> = {
  position: "absolute",
  bottom: 0,
  left: 0,

  width: 88,
  maxWidth: "100%",
  minWidth: 0,
  height: 26,

  boxSizing: "border-box",
  padding: "2px 4px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border: `1px solid var(--border-default, ${semanticColors.border.secondary})`,
  borderRadius: "20px",
  background: semanticColors.background.default,

  overflow: "hidden",
  whiteSpace: "nowrap",
};

export const doctorCardAppointmentTextStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const doctorCardSpecialtyStyles: SxProps<Theme> = {
  minWidth: 0,
  flexShrink: 0,
  color: semanticColors.text.secondary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const doctorCardRatingRowStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: "3px",
  minWidth: 0,
  flexShrink: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
};
