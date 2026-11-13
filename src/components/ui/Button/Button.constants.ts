// src/components/ui/Button/Button.constants.ts
import { alpha } from "@mui/material/styles";
import type { TypographyProps } from "@mui/material/Typography";
import { colors } from "@/theme";
import type { ButtonColor, ButtonSize } from "./Button.types";

// ─── Heights ───
export const BUTTON_HEIGHTS = {
  xs: 28,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
} as const;

// ─── Padding X ───
export const BUTTON_PADDING_X = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
} as const;

// ─── Font Size ───
export const BUTTON_FONT_SIZE = {
  xs: 12,
  sm: 13,
  md: 14,
  lg: 15,
  xl: 16,
} as const;



// ─── Radius ───
export const BUTTON_RADIUS = {
  rounded: 8,
  pill: 128,
  square: 0,
} as const;

// ─── Typography Variant پیش‌فرض بر اساس سایز دکمه ───
export const BUTTON_TYPOGRAPHY_VARIANT: Record<
  ButtonSize,
  TypographyProps["variant"]
> = {
  xs: "medium2xs",
  sm: "body2",
  md: "body2",
  lg: "body1",
  xl: "body1",
};

// ───────────────────────────────────────────────────────────
//   Palette
// ───────────────────────────────────────────────────────────
export interface ButtonColorTokens {
  main: string;
  hover: string;
  active: string;
  contrast: string;

  soft: string;
  softHover: string;
  softActive: string;
  softContrast: string;

  border: string;
  borderHover: string;
}

export const BUTTON_PALETTE: Record<ButtonColor, ButtonColorTokens> = {
  // ═══════════════════════════════════════════════════════
  //  🔵 PRIMARY
  // ═══════════════════════════════════════════════════════
  primary: {
    main: colors.cyan[500],
    hover: colors.neutral[800],
    active: colors.neutral[950],
    contrast: colors.neutral[0],

    soft: alpha(colors.cyan[500], 0.1),
    softHover: alpha(colors.cyan[500], 0.18),
    softActive: alpha(colors.cyan[500], 0.24),
    softContrast: colors.cyan[500],

    border: colors.cyan[500],
    borderHover: colors.neutral[800],
  },

  // ═══════════════════════════════════════════════════════
  //  ⚫ SECONDARY
  // ═══════════════════════════════════════════════════════
  secondary: {
    main: colors.neutral[50],
    hover: colors.neutral[200],
    active: colors.neutral[300],
    contrast: colors.neutral[950],

    soft: alpha(colors.neutral[950], 0.06),
    softHover: alpha(colors.neutral[950], 0.1),
    softActive: alpha(colors.neutral[950], 0.14),
    softContrast: colors.neutral[950],

    border: colors.neutral[200],
    borderHover: colors.neutral[300],
  },

  // ═══════════════════════════════════════════════════════
  //  🔴 DESTRUCTIVE
  // ═══════════════════════════════════════════════════════
  destructive: {
    main: colors.red[500],
    hover: alpha(colors.red[700], 0.8),
    active: colors.red[700],
    contrast: colors.neutral[0],

    soft: alpha(colors.red[500], 0.1),
    softHover: alpha(colors.red[500], 0.18),
    softActive: alpha(colors.red[500], 0.24),
    softContrast: colors.red[700],

    border: colors.red[500],
    borderHover: colors.red[700],
  },

  // ═══════════════════════════════════════════════════════
  //  ⚪ NEUTRAL
  // ═══════════════════════════════════════════════════════
  neutral: {
    main: colors.neutral[50],
    hover: colors.neutral[100],
    active: colors.neutral[300],
    contrast: colors.neutral[950],

    soft: alpha(colors.neutral[950], 0.06),
    softHover: alpha(colors.neutral[950], 0.1),
    softActive: alpha(colors.neutral[950], 0.14),
    softContrast: colors.neutral[950],

    border: colors.neutral[100],
    borderHover: colors.neutral[300],
  },

  // ═══════════════════════════════════════════════════════
  //  🟢 SUCCESS
  // ═══════════════════════════════════════════════════════
  success: {
    main: colors.green[500],
    hover: alpha(colors.green[500], 0.85),
    active: alpha(colors.green[500], 0.7),
    contrast: colors.neutral[0],

    soft: alpha(colors.green[500], 0.1),
    softHover: alpha(colors.green[500], 0.18),
    softActive: alpha(colors.green[500], 0.24),
    softContrast: colors.green[500],

    border: colors.green[500],
    borderHover: alpha(colors.green[500], 0.85),
  },

  // ═══════════════════════════════════════════════════════
  //  🟠 WARNING
  // ═══════════════════════════════════════════════════════
  warning: {
    main: colors.orange[500],
    hover: alpha(colors.orange[500], 0.85),
    active: alpha(colors.orange[500], 0.7),
    contrast: colors.neutral[0],

    soft: alpha(colors.orange[500], 0.12),
    softHover: alpha(colors.orange[500], 0.2),
    softActive: alpha(colors.orange[500], 0.28),
    softContrast: colors.orange[500],

    border: colors.orange[500],
    borderHover: alpha(colors.orange[500], 0.85),
  },
};

export const BUTTON_TRANSITION = "all 150ms ease";