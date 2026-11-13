// src/features/auth/styles/login-slide.styles.ts
import type { SxProps, Theme } from "@mui/material/styles";

export const loginSlideRootSx: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: "100dvh",
  flexShrink: 0,
  overflow: "hidden",
};

export const loginSlideContentSx: SxProps<Theme> = {
  position: "relative",
  zIndex: 1,
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  px: 2.5,
  pt: 6,
  pb: "240px",
  direction: "rtl",
};

export const loginSlideHeaderSx: SxProps<Theme> = {
  width: "100%",
  textAlign: "center",
  color: "#FFFFFF",
  mb: 4,
};

export const loginSlideTitleSx = (isActive: boolean): SxProps<Theme> => ({
  fontSize: { xs: 18, sm: 20 },
  fontWeight: 800,
  lineHeight: 1.6,
  mb: 1.5,
  textAlign: "center",
  opacity: isActive ? 1 : 0,
  transform: isActive ? "translateY(0)" : "translateY(10px)",
  transition: "opacity 400ms ease, transform 400ms ease",
});

export const loginSlideDescriptionSx = (
  isActive: boolean
): SxProps<Theme> => ({
  fontSize: 11,
  lineHeight: 2,
  textAlign: "center",
  color: "rgba(255, 255, 255, 0.9)",
  opacity: isActive ? 1 : 0,
  transform: isActive ? "translateY(0)" : "translateY(10px)",
  transition: "opacity 400ms ease 100ms, transform 400ms ease 100ms",
});

export const loginSlideIllustrationSx = (
  isActive: boolean
): SxProps<Theme> => ({
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: isActive ? 1 : 0,
  transform: isActive ? "scale(1)" : "scale(0.92)",
  transition: "opacity 500ms ease 150ms, transform 500ms ease 150ms",
});

export const loginSlideIllustrationImageSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: 290,
  height: "auto",
  objectFit: "contain",
  userSelect: "none",
  pointerEvents: "none",
};