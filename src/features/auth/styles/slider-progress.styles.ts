// src/features/auth/styles/slider-progress.styles.ts
import type { SxProps, Theme } from "@mui/material/styles";

export const sliderProgressRootSx: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  px: 2.5,
  pt: 2.5,
  direction: "rtl",
};

export const sliderProgressBarSx = (
  isActive: boolean
): SxProps<Theme> => ({
  flex: 1,
  height: 8,
  borderRadius: 999,
  cursor: "pointer",
  backgroundColor: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.55)",
  transition: "background-color 200ms ease",
});