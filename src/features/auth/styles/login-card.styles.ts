// src/features/auth/styles/login-card.styles.ts
import type { SxProps, Theme } from "@mui/material/styles";

// ─── Wrapper (پوزیشن پایین صفحه) ───
export const loginCardWrapperSx: SxProps<Theme> = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 20,
  p: 2, // ✅ padding بیشتر برای فاصله از لبه‌ها
  direction: "rtl",
};

// ─── Card ───
export const loginCardSx: SxProps<Theme> = {
  width: "100%",
  borderRadius: "16px",
  backgroundColor: "#FFFFFF",
  px: 2.5,
  pt: 2.5,
  pb: 2.5,
  mb:2,
};

// ─── Title ───
export const loginCardTitleSx: SxProps<Theme> = {
  display: "block",
  textAlign: "right",
  color: "#09090B",
  mb: 0.5,
};

// ─── Description ───
export const loginCardDescriptionSx: SxProps<Theme> = {
  display: "block",
  textAlign: "right",
  color: "#71717B",
  mb: 2,
};

// ─── Input (شبیه SVG) ───
export const loginCardInputSx: SxProps<Theme> = {
  // wrapper Box styles
  height: 46,
  borderRadius: "18px",
  backgroundColor: "#FFFFFF",
  // target the native input inside
  "& input": {
    textAlign: "right",
    direction: "rtl",
  },
  "& input::placeholder": {
    textAlign: "right",
    direction: "rtl",
  },
};
