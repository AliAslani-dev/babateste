import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const DoctorDetailBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  // Match the app scroll area's visible height (navbar plus safe-area padding
  // are outside this page), so the appointment action can sit at its bottom.
  minHeight: "calc(100dvh - 56px - var(--safe-bottom, 0px) - 16px)",
  display: "flex",
  flexDirection: "column",
  bgcolor: semanticColors.background.default,
};

export const DoctorDetailHeroBox: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: 199,
  overflow: "hidden",
};

export const DoctorDetailTextBox: SxProps<Theme> = {
  width: "100%",
  flex: 1,
  minWidth: 0,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  px: "8px",
  pt: "16px",
  pb: 0,
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  bgcolor: "background.paper",
  position: "relative",
  mt: "-20px",
};

export const DoctorAppointmentButtonWrapper: SxProps<Theme> = {
  mt: "auto",
  pt: "16px",
  pb: 0,
};

export const DoctorAppointmentButtonStyles: SxProps<Theme> = {
  width: "100%",
  minHeight: 40,
  height: 40,
  boxSizing: "border-box",
  px: "16px",
  py: "8px",
  borderRadius: "16px",
  bgcolor: semanticColors.action.primary,
  color: semanticColors.background.default,
};

export const DoctorHeadingBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

export const DoctorTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  textAlign: "right",
  overflowWrap: "anywhere",
};

export const DoctorSubtitleStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  textAlign: "right",
  lineHeight: 1.8,
  overflowWrap: "anywhere",
};

export const DoctorToggleBarBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
};

export const DoctorActiveToggleBarBox: SxProps<Theme> = {
  mt: 2,
  width: "100%",
  minWidth: 0,
};
