// src/components/ui/common/HeroSection/types.ts
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

// ─── یک اسلاید ───────────────────────────────────────────
export interface HeroSlide {
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  activeBulletColor?: string;
}

export interface HeroSectionProps {
  slides: HeroSlide[];
  timer?: number;
  activeBulletColor?: string;
  inactiveBulletColor?: string;
  sx?: SxProps<Theme>;
}
