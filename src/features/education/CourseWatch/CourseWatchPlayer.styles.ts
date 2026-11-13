import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const playerWrapperStyles: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "20px",
  overflow: "hidden",
  bgcolor: "#000",
  boxShadow: "0 12px 40px -12px rgba(0,0,0,0.35)",
};

export const playerVideoStyles: SxProps<Theme> = {
  width: "100%",
  aspectRatio: "16 / 9",
  maxHeight: "70vh",
  bgcolor: "#000",
  objectFit: "contain",
  display: "block",
};

export const playerInfoBarStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1,
  px: 2,
  py: 1.5,
  bgcolor: "rgba(255,255,255,0.04)",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

export const playerTitleStyles: SxProps<Theme> = {
  color: "#fff",
  textAlign: "right",
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const playerBadgeStyles: SxProps<Theme> = {
  flexShrink: 0,
  px: 1.5,
  py: 0.5,
  borderRadius: "999px",
  bgcolor: semanticColors.action.primary,
  color: "#fff",
  typography: "mediumXs",
};