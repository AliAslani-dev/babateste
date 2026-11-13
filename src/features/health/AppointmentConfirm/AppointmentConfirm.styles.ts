import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const AppointmentConfirmBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  boxSizing: "border-box",
  minHeight: "calc(100dvh - 56px - var(--safe-bottom, 0px) - 20px)",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  px: "16px",
  pt: "16px",
  pb: "24px",
};


export const TextareaLabelStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  textAlign: "right",
};

export const TextareaStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  minHeight: 150,
  boxSizing: "border-box",
  borderRadius: "16px",
  background: semanticColors.background.default,
  border: `1px solid ${semanticColors.border.default}`,
  p: "12px",
  fontFamily: "inherit",
  fontSize: "inherit",
};

export const HintTextStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  textAlign: "left",
};

export const NotesBoxStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  p: "16px",
  borderRadius: "16px",
  border: `1px solid ${semanticColors.border.default}`,
  bgcolor: semanticColors.background.default,
};

export const NotesListStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  listStyle: "none",
  m: 0,
  p: 0,
};

export const NoteItemStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  textAlign: "right",
  lineHeight: 1.8,
};

export const SubmitButtonStyles: SxProps<Theme> = {
  width: "100%",
  minHeight: 48,
  borderRadius: "16px",
  bgcolor: semanticColors.action.primary,
  color: semanticColors.background.default,
  mt: "auto",
};
