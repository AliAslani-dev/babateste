import { alpha } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { INPUT_COLORS, INPUT_RADIUS } from "@/components/ui/Input";

// ─── Page wrapper ─────────────────────────────────────────────────────────────
export const pageRootSx: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  py: "16px",
  px: "16px",
};

// ─── Form wrapper ─────────────────────────────────────────────────────────────
export const formSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
};

// ─── Page title ───────────────────────────────────────────────────────────────
export const pageTitleSx: SxProps<Theme> = {
  textAlign: "center",
  display: "block",
  mb: "4px",
};

// ─── Mentor mini card ─────────────────────────────────────────────────────────
// RTL row: image sits on the right, text block to its left (right-aligned)
export const mentorCardSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "12px",
  p: "8px",
  borderRadius: `${INPUT_RADIUS}px`,
  border: `1px solid ${INPUT_COLORS.border.default}`,
  backgroundColor: INPUT_COLORS.background.default,
  direction: "rtl",
};

export const mentorCardImageSx: SxProps<Theme> = {
  position: "relative",
  width: 120,
  height: 72,
  borderRadius: "14px",
  overflow: "hidden",
  flexShrink: 0,
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
};

export const mentorCardInfoSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  flex: 1,
  minWidth: 0,
  textAlign: "right",
};

// ─── Section label ────────────────────────────────────────────────────────────
export const sectionLabelSx: SxProps<Theme> = {
  display: "block",
  textAlign: "right",
  mb: "8px",
};

// ─── Radio group ──────────────────────────────────────────────────────────────
export const radioGroupSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 0,
  direction: "rtl",
};

// RTL row: radio circle on the right, label to its left
export const radioRowSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  direction: "rtl",
  py: "12px",
  px: "10px",
  cursor: "pointer",
  "&:not(:last-child)": {
    borderBottom: `1px solid ${INPUT_COLORS.border.default}`,
  },
};

export const radioCircleSx = (selected: boolean): SxProps<Theme> => ({
  width: 24,
  height: 24,
  borderRadius: "50%",
  border: "2px solid",
  borderColor: selected ? "primary.main" : INPUT_COLORS.border.default,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  transition: "border-color 0.2s",
});

export const radioInnerDotSx: SxProps<Theme> = {
  width: 12,
  height: 12,
  borderRadius: "50%",
  backgroundColor: "primary.main",
};

// ─── Time grid ────────────────────────────────────────────────────────────────
// Grid flows right → left (RTL); the last row stays right-aligned
export const timeGridSx: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "8px",
  direction: "rtl",
};

export const timeChipSx = (selected: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "54px",
  borderRadius: `${INPUT_RADIUS}px`,
  border: "2px solid",
  borderColor: selected ? "primary.main" : INPUT_COLORS.border.default,
  backgroundColor: selected
    ? (theme: Theme) => alpha(theme.palette.primary.main, 0.08)
    : INPUT_COLORS.background.default,
  cursor: "pointer",
  transition: "all 0.15s",
  // keep the "08:30" digit order correct inside the RTL grid
  direction: "ltr",
  color: selected ? "primary.main" : INPUT_COLORS.text.primary,
  userSelect: "none",
  "&:hover": {
    borderColor: "primary.main",
  },
  // use theme variant instead of hardcoded font values (mediumSm: weight 500, size 0.875rem)
  fontFamily: (theme: Theme) => theme.typography.mediumSm.fontFamily,
  fontSize: (theme: Theme) => theme.typography.mediumSm.fontSize,
  fontWeight: (theme: Theme) => theme.typography.mediumSm.fontWeight,
  lineHeight: (theme: Theme) => theme.typography.mediumSm.lineHeight,
});

// ─── Description field ────────────────────────────────────────────────────────
export const textareaWrapperSx: SxProps<Theme> = {
  position: "relative",
};

// Pencil icon, bottom-left inside the textarea
export const textareaIconSx: SxProps<Theme> = {
  position: "absolute",
  left: "16px",
  bottom: "14px",
  fontSize: 20,
  color: "text.primary",
  pointerEvents: "none",
};

// Counter sits under the textarea, on the left
export const descriptionCounterSx: SxProps<Theme> = {
  display: "block",
  textAlign: "left",
  color: "text.secondary",
  fontSize: "12px",
  mt: "8px",
};

// ─── Submit button wrapper ────────────────────────────────────────────────────
export const submitWrapperSx: SxProps<Theme> = {
  mt: "12px",
};