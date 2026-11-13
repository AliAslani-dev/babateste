import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const AppointmentPickerBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  px: "16px",
  py: "16px",
};

export const AppointmentTitleRowStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
};

export const AppointmentTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  textAlign: "right",
};

export const AppointmentBackButtonStyles: SxProps<Theme> = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  border: `1px solid ${semanticColors.text.secondary}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  background: "transparent",
};

export const DoctorCardBoxStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  gap: "12px",
  p: "12px",
  borderRadius: "16px",
  border: `1px solid ${semanticColors.text.secondary}`,
  bgcolor: semanticColors.background.default,
};

export const DoctorCardImageWrapperStyles: SxProps<Theme> = {
  position: "relative",
  width: 64,
  height: 64,
  borderRadius: "50%",
  overflow: "hidden",
  flex: "0 0 64px",
};

export const DoctorCardInfoStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  textAlign: "right",
};

export const DoctorCardNameStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
};

export const DoctorCardSpecialityStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
};

export const DaysRowStyles: SxProps<Theme> = {
  display: "flex",
  gap: "8px",
  overflowX: "auto",
  pb: "4px",
  direction: "rtl",
  "&::-webkit-scrollbar": { display: "none" },
};

export const DayChipStyles = (active: boolean): SxProps<Theme> => ({
  minWidth: 72,
  px: "12px",
  py: "8px",
  borderRadius: "12px",
  border: `1px solid ${active ? semanticColors.action.primary : semanticColors.text.secondary}`,
  bgcolor: active ? semanticColors.action.primary : "transparent",
  color: active
    ? semanticColors.background.default
    : semanticColors.text.primary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2px",
  cursor: "pointer",
  flex: "0 0 auto",
});

export const TimeSectionTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  textAlign: "right",
};

export const TimeGridStyles: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "8px",
};

export const TimeChipStyles = (active: boolean): SxProps<Theme> => ({
  py: "10px",
  borderRadius: "12px",
  border: `1px solid ${active ? semanticColors.action.primary : semanticColors.text.secondary}`,
  bgcolor: active ? semanticColors.action.primary : "transparent",
  color: active
    ? semanticColors.background.default
    : semanticColors.text.primary,
  cursor: "pointer",
  textAlign: "center",
  minHeight: 40,
});

export const ContinueButtonStyles: SxProps<Theme> = {
  width: "100%",
  minHeight: 48,
  borderRadius: "16px",
  bgcolor: semanticColors.action.primary,
  color: semanticColors.background.default,
  mt: "auto",
};