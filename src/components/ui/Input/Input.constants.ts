// src/components/ui/Input/Input.constants.ts
import { colors, semanticColors } from "@/theme";
import type { InputSize } from "./Input.types";

export const INPUT_HEIGHTS: Record<InputSize, number> = {
  sm: 36,
  md: 44,
  lg: 48,
};

export const INPUT_PADDING_X: Record<InputSize, number> = {
  sm: 12,
  md: 14,
  lg: 16,
};

export const INPUT_FONT_SIZE: Record<InputSize, number> = {
  sm: 13,
  md: 14,
  lg: 15,
};

export const INPUT_ICON_SIZE: Record<InputSize, number> = {
  sm: 16,
  md: 18,
  lg: 20,
};

export const INPUT_RADIUS = 12;

export const INPUT_COLORS = {
  text: {
    primary: semanticColors.text.primary,
    placeholder: semanticColors.text.secondary,
    disabled: colors.neutral[300],
  },
  border: {
    default: semanticColors.border.default,
    hover: semanticColors.border.secondary,
    focus: semanticColors.border.primary,
    error: semanticColors.status.error,
    success: semanticColors.status.success,
    warning: semanticColors.status.warning,
    disabled: semanticColors.border.default,
  },
  background: {
    default: colors.neutral[0],
    filled: colors.neutral[50],
    disabled: colors.neutral[50],
    ghost: "transparent",
  },
  icon: {
    default: semanticColors.text.secondary,
    focus: semanticColors.icon.primaryColor,
    error: semanticColors.status.error,
  },
  helper: {
    default: semanticColors.text.secondary,
    error: semanticColors.status.error,
    success: semanticColors.status.success,
  },
} as const;

export const INPUT_TRANSITION = "all 150ms ease";
