import type { SxProps, Theme } from "@mui/material";

import { semanticColors } from "@/theme";

export const mentorExperienceStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  direction: "rtl",
  listStyle: "none",
  m: 0,
  p: 0,
};

export const mentorExperienceItemStyles: SxProps<Theme> = {
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  p: "12px 16px",
  border: `1px solid ${semanticColors.border.secondary}`,
  borderRadius: "12px",
  bgcolor: semanticColors.background.secondary,
  textAlign: "right",
  overflowWrap: "anywhere",
};

export const mentorExperienceTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
};

export const mentorExperienceDescriptionStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  lineHeight: 1.8,
  whiteSpace: "pre-line",
};

export const mentorExperienceDateStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
};

export const mentorExperienceEmptyStyles: SxProps<Theme> = {
  textAlign: "center",
  color: semanticColors.text.secondary,
  py: 4,
};
