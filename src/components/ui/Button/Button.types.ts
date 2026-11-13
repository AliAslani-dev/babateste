// src/components/ui/Button/Button.types.ts
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import type { IconButtonProps as MuiIconButtonProps } from "@mui/material/IconButton";
import type { TypographyProps } from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

// ───────────────────────────────────────────────────────────
//   Button Color
// ───────────────────────────────────────────────────────────
export type ButtonColor =
  | "primary"
  | "secondary"
  | "destructive"
  | "neutral"
  | "success"
  | "warning";

// ───────────────────────────────────────────────────────────
//   Button Appearance
// ───────────────────────────────────────────────────────────
export type ButtonAppearance =
  | "solid"
  | "soft"
  | "outlined"
  | "ghost"
  | "link";

// ───────────────────────────────────────────────────────────
//   Size / Shape / Icon Position
// ───────────────────────────────────────────────────────────
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonShape = "rounded" | "pill" | "square";
export type ButtonIconPosition = "start" | "end" | "only";

// ───────────────────────────────────────────────────────────
//   Typography Variant
// ───────────────────────────────────────────────────────────
export type ButtonTypographyVariant = TypographyProps["variant"];

// ───────────────────────────────────────────────────────────
//   Button Props
// ───────────────────────────────────────────────────────────
export interface ButtonProps
  extends Omit<MuiButtonProps, "variant" | "color" | "size"> {
  color?: ButtonColor;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  shape?: ButtonShape;
  /**
   * اگه true باشه، shape به pill تبدیل میشه
   * (مگر اینکه shape صریحاً square باشه)
   */
  rounded?: boolean;
  /**
   * variant تایپوگرافی متن دکمه.
   * اگه پاس داده نشه، بر اساس size دکمه انتخاب میشه.
   */
  typographyVariant?: ButtonTypographyVariant;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  loading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
}

// ───────────────────────────────────────────────────────────
//   IconButton Props
// ───────────────────────────────────────────────────────────
export interface IconButtonProps
  extends Omit<MuiIconButtonProps, "color" | "size"> {
  color?: ButtonColor;
  appearance?: Exclude<ButtonAppearance, "link">;
  size?: ButtonSize;
  shape?: "rounded" | "circle" | "square";
  /**
   * اگه true باشه، shape به circle تبدیل میشه
   * (مگر اینکه shape صریحاً square باشه)
   */
  rounded?: boolean;
  /**
   * variant تایپوگرافی متن (اگه متن داشته باشه).
   * اگه پاس داده نشه، بر اساس size انتخاب میشه.
   */
  typographyVariant?: ButtonTypographyVariant;
  loading?: boolean;
}

// ───────────────────────────────────────────────────────────
//   ButtonGroup Props
// ───────────────────────────────────────────────────────────
export interface ButtonGroupProps {
  children: ReactNode;
  orientation?: "horizontal" | "vertical";
  color?: ButtonColor;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}