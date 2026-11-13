// src/components/ui/Button/Button.styles.ts
import type { SxProps, Theme } from "@mui/material/styles";
import type { CSSProperties } from "react";
import type {
  ButtonAppearance,
  ButtonColor,
  ButtonShape,
  ButtonSize,
} from "./Button.types";
import {
  BUTTON_HEIGHTS,
 
  BUTTON_PADDING_X,
  BUTTON_PALETTE,
  BUTTON_RADIUS,
  BUTTON_TRANSITION,
} from "./Button.constants";

// ───────────────────────────────────────────────────────────
//  Type Alias — CSSProperties + Pseudo Selectors
// ───────────────────────────────────────────────────────────
type StyleObject = CSSProperties & {
  [key: `&${string}`]: StyleObject | string | number;
  [key: `@${string}`]: StyleObject | string | number;
};

// ───────────────────────────────────────────────────────────
//  Style Args
// ───────────────────────────────────────────────────────────
export interface ButtonStyleArgs {
  color?: ButtonColor;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  shape?: ButtonShape;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

// ───────────────────────────────────────────────────────────
//  Merge Helper
// ───────────────────────────────────────────────────────────
const mergeStyles = (...styles: StyleObject[]): StyleObject =>
  styles.reduce<StyleObject>((acc, style) => ({ ...acc, ...style }), {});

// ───────────────────────────────────────────────────────────
//  Base Styles
// ───────────────────────────────────────────────────────────
const getBaseStyles = ({
  size = "md",
  shape = "rounded",
  fullWidth = false,
  color = "primary",
}: Pick<
  ButtonStyleArgs,
  "size" | "shape" | "fullWidth" | "color"
>): StyleObject => {
  const height = BUTTON_HEIGHTS[size];
  const paddingX = BUTTON_PADDING_X[size];
  const radius = BUTTON_RADIUS[shape];

  const palette = BUTTON_PALETTE[color];

  return {
    minHeight: height,
    height,
    paddingInline: `${paddingX}px`,
    paddingBlock: 0,
    width: fullWidth ? "100%" : "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    fontWeight: "inherit",
    letterSpacing: 0,
    lineHeight: 1,
    textTransform: "none",
    borderRadius: `${radius}px`,
    boxShadow: "none",
    transition: BUTTON_TRANSITION,

    // 👇 وسط‌چین شدن دقیق
    verticalAlign: "middle",
    textAlign: "center",

    // 👇 آیکون‌ها block بشن تا baseline رو خراب نکنن
    "& svg": {
    
      flexShrink: 0,
      display: "block",
    },

    // 👇 لیبل MUI رو فلکس می‌کنیم
    "& .MuiButton-label": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: 1,
      gap: "8px",
    },

    "&.MuiButton-root": {
      minWidth: "unset",
    },

    "& .MuiButton-startIcon": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginInlineEnd: "8px",
      marginInlineStart: 0,
    },
    "& .MuiButton-endIcon": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginInlineStart: "8px",
      marginInlineEnd: 0,
    },
    "&:focus-visible": {
      outline: `2px solid ${palette.main}`,
      outlineOffset: "2px",
    },
  };
};

// ───────────────────────────────────────────────────────────
//  Color × Appearance Styles
// ───────────────────────────────────────────────────────────
const getColorAppearanceStyles = (
  color: ButtonColor,
  appearance: ButtonAppearance
): StyleObject => {
  const palette = BUTTON_PALETTE[color];

  switch (appearance) {
    // ─── Solid ───
    case "solid":
      return {
        backgroundColor: palette.main,
        color: palette.contrast,
        border: "1px solid transparent",
        "&:hover": {
          backgroundColor: palette.hover,
        },
        "&:active": {
          backgroundColor: palette.active,
        },
      };

    // ─── Soft ───
    case "soft":
      return {
        backgroundColor: palette.soft,
        color: palette.softContrast,
        border: "1px solid transparent",
        "&:hover": {
          backgroundColor: palette.softHover,
        },
        "&:active": {
          backgroundColor: palette.softActive,
        },
      };

    // ─── Outlined ───
    case "outlined":
      return {
        backgroundColor: "transparent",
        color: palette.softContrast,
        border: `1px solid ${palette.border}`,
        "&:hover": {
          backgroundColor: palette.soft,
          borderColor: palette.borderHover,
        },
        "&:active": {
          backgroundColor: palette.softActive,
          borderColor: palette.borderHover,
        },
      };

    // ─── Ghost ───
    case "ghost":
      return {
        backgroundColor: "transparent",
        color: palette.softContrast,
        border: "1px solid transparent",
        "&:hover": {
          backgroundColor: palette.soft,
        },
        "&:active": {
          backgroundColor: palette.softActive,
        },
      };

    // ─── Link ───
    case "link":
      return {
        backgroundColor: "transparent",
        color: palette.softContrast,
        border: "none",
        padding: 0,
        minHeight: "auto",
        height: "auto",
        textDecoration: "underline",
        textUnderlineOffset: "4px",
        "&:hover": {
          color: palette.hover,
          backgroundColor: "transparent",
        },
      };

    default:
      return {};
  }
};

// ───────────────────────────────────────────────────────────
//  State Styles (disabled / loading)
// ───────────────────────────────────────────────────────────
const getStateStyles = ({
  disabled = false,
  loading = false,
  color = "primary",
  appearance = "solid",
}: Pick<
  ButtonStyleArgs,
  "disabled" | "loading" | "color" | "appearance"
>): StyleObject => {
  const state: StyleObject = {};

  if (disabled) {
    const palette = BUTTON_PALETTE[color];

    state.opacity = 0.4;
    state.cursor = "not-allowed";
    state.pointerEvents = "none";

    const textColor =
      appearance === "solid" ? palette.contrast : palette.softContrast;

    state.color = textColor;
    state.WebkitTextFillColor = textColor;

    state["&.Mui-disabled"] = {
      color: textColor,
      WebkitTextFillColor: textColor,
    };
  }

  if (loading) {
    state.cursor = "wait";
    state.pointerEvents = "none";
  }

  return state;
};

// ───────────────────────────────────────────────────────────
//  Main Export
// ───────────────────────────────────────────────────────────
export const getButtonStyles = (args: ButtonStyleArgs): SxProps<Theme> => {
  const {
    color = "primary",
    appearance = "solid",
    size = "md",
    shape = "rounded",
    fullWidth = false,
    loading = false,
    disabled = false,
  } = args;

  const base = getBaseStyles({ size, shape, fullWidth, color });
  const colorAppearance = getColorAppearanceStyles(color, appearance);
  const state = getStateStyles({ disabled, loading, color, appearance });

  return mergeStyles(base, colorAppearance, state) as SxProps<Theme>;
};