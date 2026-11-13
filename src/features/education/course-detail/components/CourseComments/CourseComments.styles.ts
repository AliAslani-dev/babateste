import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const commentsWrapperStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  width: "100%",
};

export const commentFormStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
  p: 2,
  borderRadius: "16px",
  bgcolor: semanticColors.background.secondary,
};

export const commentItemStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  p: 2,
  borderRadius: "16px",
  bgcolor: semanticColors.background.secondary,
};

export const commentHeaderStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const commentAvatarStyles: SxProps<Theme> = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: semanticColors.action.primary,
  color: "#fff",
  typography: "boldSm",
  flexShrink: 0,
};

export const commentTextStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  lineHeight: 1.8,
  whiteSpace: "pre-line",
};

export const commentsEmptyStyles: SxProps<Theme> = {
  textAlign: "center",
  color: semanticColors.text.secondary,
  py: 4,
};