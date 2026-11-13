import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const DoctorAboutStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const DoctorDetailTextStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  textAlign: "right",
  direction: "rtl",
  lineHeight: 1.8,
  overflowWrap: "anywhere",
  whiteSpace: "normal",
};
export const DoctorDescriptionStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  width: "100%",
  minWidth: 0,
};

export const DoctorHighlightsListStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "100%",
  minWidth: 0,
};

export const DoctorHighlightItemStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  width: "100%",
  minWidth: 0,
};

export const DoctorHighlightCheckStyles: SxProps<Theme> = {
  width: 18,
  height: 18,
  flex: "0 0 22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mt: "2px",
  boxSizing: "border-box",
  border: `1px solid ${semanticColors.action.primary}`,
  borderRadius: "50%",
  color: semanticColors.action.primary,
};

export const DoctorHighlightTextStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,
  color: semanticColors.text.primary,
  textAlign: "right",
  lineHeight: 1.8,
  overflowWrap: "anywhere",
};

export const DoctorQualificationsSectionStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
};

export const DoctorQualificationsListStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

export const DoctorQualificationItemStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  minWidth: 0,
};

export const DoctorQualificationBulletStyles: SxProps<Theme> = {
  fontSize: 7,
  flex: "0 0 7px",
  mt: "10px",
  color: semanticColors.text.secondary,
};

export const DoctorQualificationTextStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,
  color: semanticColors.text.secondary,
  textAlign: "right",
  lineHeight: 1.8,
  overflowWrap: "anywhere",
};
