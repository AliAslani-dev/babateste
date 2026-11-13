// src/features/mentoring/components/cooperation-request/steps/step1/BasicInfoStep.styles.ts
import type { SxProps, Theme } from "@mui/material";
import {
  INPUT_COLORS,
  INPUT_HEIGHTS,
  INPUT_PADDING_X,
  INPUT_RADIUS,
  INPUT_TRANSITION,
} from "@/components/ui/Input";

// ─── Form wrapper ─────────────────────────────────────────────────────────────
export const formSx: SxProps<Theme> = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

// ─── Header section ───────────────────────────────────────────────────────────
export const headerWrapperSx: SxProps<Theme> = {
  mb: "24px",
};

export const headerTitleSx: SxProps<Theme> = {
  display: "block",
  mb: "6px",
  textAlign: "right",
};

export const headerSubtitleSx: SxProps<Theme> = {
  color: "text.secondary",
  textAlign: "right",
};

// ─── Fields list ──────────────────────────────────────────────────────────────
export const fieldsWrapperSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  flex: 1,
};

// ─── Field label ──────────────────────────────────────────────────────────────
export const fieldLabelSx: SxProps<Theme> = {
  display: "block",
  mb: "8px",
  textAlign: "right",
};

// ─── Phone input — force RTL so typed digits appear on the right ──────────────
export const phoneInputSx: SxProps<Theme> = {
  "& input": {
    direction: "rtl",
    textAlign: "right",
  },
};

// ─── City trigger button ──────────────────────────────────────────────────────
export const cityTriggerSx = (hasError: boolean, hasValue: boolean): SxProps<Theme> => ({
  width: "100%",
  height: INPUT_HEIGHTS.md,
  display: "flex",
  alignItems: "center",
  // Normal row: text on the right (start), chevron on the left (end) — RTL layout
  flexDirection: "row",
  justifyContent: "space-between",
  px: `${INPUT_PADDING_X.md}px`,
  backgroundColor: INPUT_COLORS.background.default,
  border: `1px solid ${hasError ? INPUT_COLORS.border.error : INPUT_COLORS.border.default}`,
  borderRadius: `${INPUT_RADIUS}px`,
  transition: INPUT_TRANSITION,
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "14px",
  color: hasValue ? INPUT_COLORS.text.primary : INPUT_COLORS.text.placeholder,
  textAlign: "right",
  direction: "rtl",
  "&:hover": {
    borderColor: hasError ? INPUT_COLORS.border.error : INPUT_COLORS.border.hover,
  },
});

export const cityTriggerIconSx: SxProps<Theme> = {
  color: INPUT_COLORS.icon.default,
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
};

export const cityErrorSx: SxProps<Theme> = {
  display: "block",
  mt: "4px",
  fontSize: "12px",
  color: INPUT_COLORS.helper.error,
  textAlign: "right",
};

// ─── Submit wrapper ───────────────────────────────────────────────────────────
export const submitWrapperSx: SxProps<Theme> = {
  mt: "auto",
  pt: "32px",
};
