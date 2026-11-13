// src/components/ui/common/HeroSection/styles.ts
import type { SxProps, Theme } from "@mui/material/styles";

// ─── ابعاد ───────────────────────────────────────────────
export const HERO_BORDER_RADIUS = "20px";
export const HERO_HEIGHT = 160; // px — ارتفاع ثابت کارت

// ─── Wrapper اصلی ────────────────────────────────────────
export const heroRootSx: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  borderRadius: HERO_BORDER_RADIUS,
  overflow: "hidden",
  height: `${HERO_HEIGHT}px`,
  bgcolor: "#EDF4FB",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "pan-y",
};

export const getSlideWrapperSx = (isActive: boolean): SxProps<Theme> => ({
  position: "absolute",
  inset: 0,
  opacity: isActive ? 1 : 0,
  transition: "opacity 400ms ease",
  pointerEvents: isActive ? "auto" : "none",
  zIndex: isActive ? 1 : 0,
});

// ─── تصویر پس‌زمینه ──────────────────────────────────────
export const slideBgImgSx: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "left center",
  display: "block",
};

// ─── ناحیه متن — بالا سمت راست روی تصویر ────────────────
export const slideTextSx: SxProps<Theme> = {
  position: "absolute",
  top: 24,
  right: 16,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 0.5,
  zIndex: 1,
  maxWidth: "55%",
};

// ─── ناحیه Pagination (پایین وسط) ────────────────────────
export const paginationWrapperSx: SxProps<Theme> = {
  position: "absolute",
  bottom: 12,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 2,
  direction: "rtl",
};
