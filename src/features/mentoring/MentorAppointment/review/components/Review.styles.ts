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

// ─── Section ──────────────────────────────────────────────────────────────────
export const sectionSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

export const sectionTitleSx: SxProps<Theme> = {
  display: "block",
  textAlign: "right",
};

// ─── Card (bordered container used for rows) ──────────────────────────────────
export const cardSx: SxProps<Theme> = {
  width: "100%",
  boxSizing: "border-box",
  border: `1px solid ${INPUT_COLORS.border.default}`,
  borderRadius: `${INPUT_RADIUS}px`,
  overflow: "hidden",
};

// ─── Detail row (key / value) ─────────────────────────────────────────────────
export const detailRowSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  direction: "rtl",
  px: "16px",
  py: "14px",
  gap: "8px",
  "& + &": {
    borderTop: `1px solid ${INPUT_COLORS.border.default}`,
  },
};

// Highlighted total row
export const totalRowSx: SxProps<Theme> = {
  ...detailRowSx,
  backgroundColor: "#DBEAFE",
  "& + &": undefined,
};

// ─── Discount code row ────────────────────────────────────────────────────────
export const discountRowSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  direction: "rtl",
  gap: "8px",
  border: `1px solid ${INPUT_COLORS.border.default}`,
  borderRadius: `${INPUT_RADIUS}px`,
  px: "12px",
  height: "52px",
  overflow: "hidden",
};

export const discountInputSx: SxProps<Theme> = {
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  fontFamily: "inherit",
  textAlign: "right",
  direction: "rtl",
  color: "text.secondary",
};

// ─── Payment method ───────────────────────────────────────────────────────────

// Each option is its own bordered card (not rows inside a shared card)
export const paymentOptionsWrapperSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export const paymentOptionSx = (_selected: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  direction: "rtl",
  gap: "12px",
  px: "16px",
  py: "16px",
  cursor: "pointer",
  border: `1px solid ${INPUT_COLORS.border.default}`,
  borderRadius: `${INPUT_RADIUS}px`,
  backgroundColor: INPUT_COLORS.background.default,
});

export const paymentOptionIconSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  borderRadius: "8px",
  border: `1px solid ${INPUT_COLORS.border.default}`,
  flexShrink: 0,
  color: "text.primary",
};

// Bullseye radio: outer ring always visible, filled teal with white inner circle when selected
export const radioCircleSx = (selected: boolean): SxProps<Theme> => ({
  width: 24,
  height: 24,
  borderRadius: "50%",
  border: "2px solid",
  borderColor: selected ? "primary.main" : INPUT_COLORS.border.default,
  backgroundColor: selected ? "primary.main" : "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  transition: "all 0.2s",
});

export const radioInnerDotSx: SxProps<Theme> = {
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: "white",
};

// ─── Submit wrapper ────────────────────────────────────────────────────────────
export const submitWrapperSx: SxProps<Theme> = {
  mt: "8px",
};
