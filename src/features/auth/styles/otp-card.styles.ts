// src/features/auth/styles/otp-card.styles.ts
import type { SxProps, Theme } from "@mui/material/styles";

// ─── OTP Inputs Row (single connected pill) ───
export const otpInputsRowSx = (anyFocused: boolean): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  mb: 2,
  direction: "ltr",
  border: `1.5px solid ${anyFocused ? "#0092B8" : "#E4E4E7"}`,
  borderRadius: "20px",
  overflow: "hidden",
  transition: "border-color 200ms ease",
});

// ─── Single OTP Cell ───
export const otpCellSx = (isLast: boolean, anyFocused: boolean): SxProps<Theme> => ({
  flex: 1,
  height: 52,
  borderRight: isLast ? "none" : `1.5px solid ${anyFocused ? "#0092B8" : "#E4E4E7"}`,
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "text",
  transition: "border-color 200ms ease",
  "& input": {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700,
    color: "#09090B",
    caretColor: "#0092B8",
    fontFamily: "inherit",
  },
});

// ─── Footer Row (resend + edit) ───
export const otpFooterRowSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  mb: 2.5,
  direction: "rtl",
};

// ─── Resend button ───
export const otpResendSx = (canResend: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  fontSize: 12,
  fontWeight: 400,
  color: canResend ? "#0092B8" : "#71717B",
  cursor: canResend ? "pointer" : "default",
  userSelect: "none",
  direction: "rtl",
});

// ─── Edit phone link ───
export const otpEditPhoneSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  fontSize: 12,
  fontWeight: 400,
  color: "#71717B",
  cursor: "pointer",
  userSelect: "none",
  direction: "rtl",
};
