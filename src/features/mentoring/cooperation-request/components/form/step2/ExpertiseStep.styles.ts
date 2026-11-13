// src/features/mentoring/components/cooperation-request/steps/step2/ExpertiseStep.styles.ts
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

// ─── Expertise trigger button (mirrors cityTriggerSx) ────────────────────────
export const expertiseTriggerSx = (hasError: boolean, hasValue: boolean): SxProps<Theme> => ({
  width: "100%",
  height: INPUT_HEIGHTS.md,
  display: "flex",
  alignItems: "center",
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

export const expertiseTriggerIconSx: SxProps<Theme> = {
  color: INPUT_COLORS.icon.default,
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
};

export const expertiseErrorSx: SxProps<Theme> = {
  display: "block",
  mt: "4px",
  fontSize: "12px",
  color: INPUT_COLORS.helper.error,
  textAlign: "right",
};

// ─── Skills tag input ─────────────────────────────────────────────────────────
export const skillsWrapperSx = (hasError: boolean): SxProps<Theme> => ({
  width: "100%",
  height: INPUT_HEIGHTS.md,
  display: "flex",
  alignItems: "center",
  flexDirection: "row-reverse",
  gap: "8px",
  px: `${INPUT_PADDING_X.md}px`,
  backgroundColor: INPUT_COLORS.background.default,
  border: `1px solid ${hasError ? INPUT_COLORS.border.error : INPUT_COLORS.border.default}`,
  borderRadius: `${INPUT_RADIUS}px`,
  transition: INPUT_TRANSITION,
  cursor: "text",
  "&:focus-within": {
    borderColor: hasError ? INPUT_COLORS.border.error : INPUT_COLORS.border.focus,
  },
});

export const skillsTagsRowSx: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row-reverse",
  gap: "8px",
  mt: "10px",
};

export const skillsInputSx: SxProps<Theme> = {
  flex: "1 1 80px",
  minWidth: "80px",
  border: "none",
  outline: "none",
  background: "transparent",
  fontFamily: "inherit",
  fontSize: "14px",
  color: INPUT_COLORS.text.primary,
  textAlign: "right",
  direction: "rtl",
  "::placeholder": { color: INPUT_COLORS.text.placeholder },
};

export const skillTagSx: SxProps<Theme> = {
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  height: "26px",
  px: "10px",
  borderRadius: "13px",
  backgroundColor: "action.selected",
  fontSize: "12px",
  color: "text.primary",
  flexShrink: 0,
  direction: "rtl",
};

export const skillTagRemoveSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  color: "text.secondary",
  fontSize: "14px",
  lineHeight: 1,
  "&:hover": { color: "text.primary" },
};

export const skillsAddButtonSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  flexShrink: 0,
  border: "1.5px solid",
  borderColor: "divider",
  borderRadius: "8px",
  cursor: "pointer",
  color: "text.secondary",
  backgroundColor: "background.paper",
  "&:active": { opacity: 0.7 },
  "& svg": { width: 14, height: 14 },
};

export const skillsErrorSx: SxProps<Theme> = {
  display: "block",
  mt: "4px",
  fontSize: "12px",
  color: INPUT_COLORS.helper.error,
  textAlign: "right",
};

// ─── Bio char counter ─────────────────────────────────────────────────────────
export const bioCounterSx: SxProps<Theme> = {
  display: "block",
  mt: "4px",
  fontSize: "12px",
  color: "text.secondary",
  textAlign: "left",
  direction: "ltr",
};

// ─── Submit wrapper ───────────────────────────────────────────────────────────
export const submitWrapperSx: SxProps<Theme> = {
  mt: "auto",
  pt: "32px",
  pb: "16px",
};
