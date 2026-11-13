import type { SxProps, Theme } from "@mui/material";
import { INPUT_COLORS } from "@/components/ui/Input";

const CARD_RADIUS = "16px";
export const ACTION_COLOR = "#0093BB";

// ─── Page wrapper ─────────────────────────────────────────────────────────────
export const pageRootSx: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  py: "16px",
  px: "20px",
  boxSizing: "border-box",
};

// ─── Illustration wrapper (centered) ──────────────────────────────────────────
export const illustrationSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  mt: "8px",
  "& img": {
    width: 220,
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
  },
};

// ─── Title ────────────────────────────────────────────────────────────────────
export const titleSx: SxProps<Theme> = {
  textAlign: "center",
  color: "text.primary",
  mt: "12px",
};

// ─── Subtitle ─────────────────────────────────────────────────────────────────
export const subtitleSx: SxProps<Theme> = {
  textAlign: "center",
  color: "text.secondary",
  mt: "-8px",
  mb: "16px",
  lineHeight: 2,
  px: "4px",
};

// ─── Stepper ──────────────────────────────────────────────────────────────────
// Rendered LTR on purpose: first step sits on the left, as in the design.
export const stepperSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  direction: "ltr",
  width: "100%",
  mb: "12px",
};

export const stepItemSx: SxProps<Theme> = {
  position: "relative",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// Line from this step's circle center to the next one
export const stepLineSx = (active: boolean): SxProps<Theme> => ({
  position: "absolute",
  top: "11px",
  left: "50%",
  width: "100%",
  height: "1.5px",
  backgroundColor: active ? ACTION_COLOR : INPUT_COLORS.border.default,
});

export const stepCircleSx = (completed: boolean): SxProps<Theme> => ({
  position: "relative",
  zIndex: 1,
  width: 24,
  height: 24,
  boxSizing: "border-box",
  borderRadius: "50%",
  border: `1px solid ${completed ? ACTION_COLOR : INPUT_COLORS.border.default}`,
  backgroundColor: completed ? ACTION_COLOR : "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

export const stepDotSx: SxProps<Theme> = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  backgroundColor: "#9E9E9E",
};

export const stepLabelSx: SxProps<Theme> = {
  textAlign: "center",
  mt: "8px",
  direction: "rtl",
  color: "text.secondary",
  fontSize: 11,
  whiteSpace: "nowrap",
};

// ─── Mentor card ──────────────────────────────────────────────────────────────
export const mentorCardSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  p: "8px",
  borderRadius: CARD_RADIUS,
  border: `1px solid ${INPUT_COLORS.border.default}`,
  backgroundColor: "#FFFFFF",
  direction: "rtl",
};

export const mentorImageSx: SxProps<Theme> = {
  width: 72,
  height: 72,
  borderRadius: "14px",
  objectFit: "cover",
  flexShrink: 0,
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.12)",
};

export const mentorInfoSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flex: 1,
  minWidth: 0,
  textAlign: "right",
};

// ─── Detail card (bordered container for rows) ────────────────────────────────
export const detailCardSx: SxProps<Theme> = {
  width: "100%",
  boxSizing: "border-box",
  border: `1px solid ${INPUT_COLORS.border.default}`,
  borderRadius: CARD_RADIUS,
  overflow: "hidden",
  mb: "16px",
};

// ─── Detail row (key / value) ─────────────────────────────────────────────────
export const detailRowSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  direction: "rtl",
  px: "16px",
  py: "20px",
  gap: "8px",
  "& + &": {
    borderTop: `1px solid ${INPUT_COLORS.border.default}`,
  },
};

// Last row (amount) — same look as the other rows in the design
export const totalRowSx: SxProps<Theme> = {
  ...detailRowSx,
};

// ─── Submit wrapper ───────────────────────────────────────────────────────────
export const submitWrapperSx: SxProps<Theme> = {
  mt: "8px",
};

export const backButtonSx: SxProps<Theme> = {
  width: "100%",
  height: 44,
  backgroundColor: ACTION_COLOR,
  color: "#FFFFFF",
  border: "none",
  borderRadius: "999px",
  fontFamily: "inherit",
  fontSize: "15px",
  fontWeight: 500,
  cursor: "pointer",
};