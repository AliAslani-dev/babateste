import { colors, semanticColors } from "@/theme";
import type { Theme } from "@emotion/react";
import type { SxProps } from "@mui/material";

export const mentorProfileBoxStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  bgcolor: semanticColors.background.default,
};

export const mentorProfileHeroStyles: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: 199,
  overflow: "hidden",
};

export const mentorProfileContentStyles: SxProps<Theme> = {
  width: "100%",
  flex: 1,
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "column",
  gap: "16px",

  padding: "16px 20px",

  position: "relative",
  mt: "-20px",
  borderTop: `1px solid ${colors.neutral[200]}`,
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",

  bgcolor: semanticColors.background.default,
};

export const mentorProfileToggleBarStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
};

export const mentorProfileActiveContentStyles: SxProps<Theme> = {
  mt: 2,
  width: "100%",
  minWidth: 0,
};
export const mentorProfileNameBox: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  textAlign: "right",
  direction: "rtl",
};

export const mentorRequestButtonWrapperStyles: SxProps<Theme> = {
  mt: "auto",
  pt: "16px",
  pb: "8px",
};
