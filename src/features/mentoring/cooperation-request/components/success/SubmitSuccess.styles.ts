import type { CSSProperties } from "react";
import type { SxProps, Theme } from "@mui/material";
import { colors, semanticColors } from "@/theme";

export const rootSx: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  py: "24px",
  direction: "rtl",
};

export const imageSx: SxProps<Theme> = {
  width: 180,
  height: 180,
  objectFit: "contain",
  mb: "24px",
};

export const titleSx: SxProps<Theme> = {
  display: "block",
  textAlign: "center",
  mb: "10px",
};

export const subtitleSx: SxProps<Theme> = {
  display: "block",
  textAlign: "center",
  color: "text.secondary",
  mb: "28px",
  px: "8px",
  lineHeight: 1.8,
};

// ─── Progress tracker ─────────────────────────────────────────────────────────
export const trackerWrapperSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: 360,
  mx: "auto",
  display: "flex",
  alignItems: "flex-start",
  mb: "32px",
  direction: "ltr",
};

export const trackerStepSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6px",
  width: 80,
  flexShrink: 0,
};

export const trackerDotActiveSx: SxProps<Theme> = {
  width: 28,
  height: 28,
  borderRadius: "50%",
  bgcolor: semanticColors.background.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: colors.neutral[0],
  flexShrink: 0,
};

export const trackerDotInactiveSx: SxProps<Theme> = {
  width: 28,
  height: 28,
  borderRadius: "50%",
  border: `1.5px solid ${colors.neutral[300]}`,
  bgcolor: "transparent",
  flexShrink: 0,
};

export const trackerLineSx = (active: boolean): SxProps<Theme> => ({
  flex: 1,
  height: 2,
  bgcolor: active ? semanticColors.background.primary : colors.neutral[300],
  mt: "13px",
});

export const trackerLabelSx: SxProps<Theme> = {
  fontSize: "11px",
  color: "text.secondary",
  textAlign: "center",
  whiteSpace: "nowrap",
  direction: "rtl",
};

// ─── Summary card ─────────────────────────────────────────────────────────────
export const cardSx: SxProps<Theme> = {
  width: "100%",
  border: `1px solid ${colors.neutral[100]}`,
  borderRadius: "16px",
  overflow: "hidden",
  mb: "32px",
};

export const cardRowSx = (isLast: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: "16px",
  minHeight: 52,
  borderBottom: isLast ? "none" : `1px solid ${colors.neutral[100]}`,
  gap: "12px",
});

export const cardLabelSx: SxProps<Theme> = {
  color: "text.primary",
  flexShrink: 0,
  fontWeight: 600,
};

export const cardValueSx: SxProps<Theme> = {
  color: "text.secondary",
};

export const cardValueDirectedSx = (ltr: boolean): SxProps<Theme> => ({
  color: "text.secondary",
  direction: ltr ? "ltr" : "rtl",
  textAlign: ltr ? "left" : "right",
});

export const statusBadgeSx: SxProps<Theme> = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  px: "12px",
  height: 30,
  borderRadius: "100px",
  bgcolor: "#FFF8E7",
  color: "#B45309",
  fontSize: "12px",
  fontWeight: 500,
  direction: "rtl",
};

// ─── Actions ──────────────────────────────────────────────────────────────────
export const actionsWrapperSx: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

// ─── Tracker item wrapper ─────────────────────────────────────────────────────
export const trackerItemSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  flex: 1,
};

// ─── Hero image ───────────────────────────────────────────────────────────────
export const heroImageStyle: CSSProperties = {
  objectFit: "contain",
  marginBottom: "24px",
};
