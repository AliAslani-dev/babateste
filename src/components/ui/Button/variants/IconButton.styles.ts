// src/components/ui/Button/variants/IconButton.styles.ts
import type { SxProps, Theme } from "@mui/material/styles";
import type { CSSProperties } from "react";
import type {
  ButtonAppearance,
  ButtonColor,
  ButtonSize,
} from "../Button.types";
import {
  BUTTON_HEIGHTS,

  BUTTON_PALETTE,
  BUTTON_RADIUS,
  BUTTON_TRANSITION,
} from "../Button.constants";

// ───────────────────────────────────────────────────────────
//  Types
// ───────────────────────────────────────────────────────────
export type IconButtonShape = "rounded" | "circle" | "square";
export type IconButtonAppearance = Exclude<ButtonAppearance, "link">;

export interface IconButtonStyleArgs {
  color?: ButtonColor;
  appearance?: IconButtonAppearance;
  size?: ButtonSize;
  shape?: IconButtonShape;
  disabled?: boolean;
  loading?: boolean;
}

// ───────────────────────────────────────────────────────────
//  StyleObject
// ───────────────────────────────────────────────────────────
type StyleObject = CSSProperties & {
  [key: `&${string}`]: StyleObject | string | number;
  [key: `@${string}`]: StyleObject | string | number;
};

const mergeStyles = (...styles: StyleObject[]): StyleObject =>
  styles.reduce<StyleObject>((acc, style) => ({ ...acc, ...style }), {});

// ───────────────────────────────────────────────────────────
//  Base
// ───────────────────────────────────────────────────────────
const getBaseStyles = ({
  size = "md",
  shape = "rounded",
  color = "neutral",
}: Pick<
  IconButtonStyleArgs,
  "size" | "shape" | "color"
>): StyleObject => {
  const dimension = BUTTON_HEIGHTS[size];

  const radius =
    shape === "circle"
      ? "50%"
      : shape === "square"
      ? 0
      : `${BUTTON_RADIUS.rounded}px`;
  const palette = BUTTON_PALETTE[color];

  return {
    width: dimension,
    height: dimension,
    minWidth: dimension,
    minHeight: dimension,
    borderRadius: radius,
    padding: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: BUTTON_TRANSITION,

    "& svg": {
   
      display: "block",
    },

    "&:focus-visible": {
      outline: `2px solid ${palette.main}`,
      outlineOffset: "2px",
    },
  };
};

// ───────────────────────────────────────────────────────────
//  Color × Appearance
// ───────────────────────────────────────────────────────────
const getColorAppearanceStyles = (
  color: ButtonColor,
  appearance: IconButtonAppearance
): StyleObject => {
  const palette = BUTTON_PALETTE[color];

  switch (appearance) {
    case "solid":
      return {
        backgroundColor: palette.main,
        color: palette.contrast,
        "&:hover": { backgroundColor: palette.hover },
        "&:active": { backgroundColor: palette.active },
      };

    case "soft":
      return {
        backgroundColor: palette.soft,
        color: palette.softContrast,
        "&:hover": { backgroundColor: palette.softHover },
        "&:active": { backgroundColor: palette.softActive },
      };

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
        },
      };

    case "ghost":
      return {
        backgroundColor: "transparent",
        color: palette.softContrast,
        "&:hover": { backgroundColor: palette.soft },
        "&:active": { backgroundColor: palette.softActive },
      };

    default:
      return {};
  }
};

// ───────────────────────────────────────────────────────────
//  State
// ───────────────────────────────────────────────────────────
const getStateStyles = ({
  disabled = false,
  loading = false,
  color = "neutral",
  appearance = "ghost",
}: Pick<
  IconButtonStyleArgs,
  "disabled" | "loading" | "color" | "appearance"
>): StyleObject => {
  const state: StyleObject = {};

  if (disabled) {
    const palette = BUTTON_PALETTE[color];
    const textColor =
      appearance === "solid" ? palette.contrast : palette.softContrast;

    state.opacity = 0.4;
    state.cursor = "not-allowed";
    state.pointerEvents = "none";
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
export const getIconButtonStyles = (
  args: IconButtonStyleArgs
): SxProps<Theme> => {
  const {
    color = "neutral",
    appearance = "ghost",
    size = "md",
    shape = "rounded",
    disabled = false,
    loading = false,
  } = args;

  const base = getBaseStyles({ size, shape, color });
  const colorAppearance = getColorAppearanceStyles(color, appearance);
  const state = getStateStyles({ disabled, loading, color, appearance });

  return mergeStyles(base, colorAppearance, state) as SxProps<Theme>;
};