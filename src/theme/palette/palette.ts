// src/theme/palette/palette.ts

import type { PaletteOptions } from "@mui/material/styles";

import { colors } from "../colors/colors";

export const lightPalette: PaletteOptions = {
  mode: "light",

  primary: {
    main: colors.cyan[500],
    light: colors.cyan[300],
    dark: colors.cyan[500],
    contrastText: colors.neutral[0],
  },

  secondary: {
    main: colors.neutral[800],
    light: colors.neutral[500],
    dark: colors.neutral[950],
    contrastText: colors.neutral[0],
  },

  success: {
    main: colors.green[500],
    contrastText: colors.neutral[0],
  },

  warning: {
    main: colors.orange[500],
    contrastText: colors.neutral[950],
  },

  error: {
    main: colors.red[500],
    dark: colors.red[700],
    contrastText: colors.neutral[0],
  },

  text: {
    primary: colors.neutral[950],
    secondary: colors.neutral[500],
    disabled: colors.neutral[300],
  },

  background: {
    default: colors.neutral[0],
    paper: colors.neutral[0],
  },

  divider: colors.neutral[100],
};

export const darkPalette: PaletteOptions = {
  mode: "dark",

  primary: {
    main: colors.cyan[500],
    light: colors.cyan[300],
    dark: colors.cyan[500],
    contrastText: colors.neutral[0],
  },

  secondary: {
    main: colors.neutral[100],
    light: colors.neutral[300],
    dark: colors.neutral[0],
    contrastText: colors.neutral[950],
  },

  success: {
    main: colors.green[500],
    contrastText: colors.neutral[0],
  },

  warning: {
    main: colors.orange[500],
    contrastText: colors.neutral[950],
  },

  error: {
    main: colors.red[500],
    dark: colors.red[700],
    contrastText: colors.neutral[0],
  },

  text: {
    primary: colors.neutral[0],
    secondary: colors.neutral[300],
    disabled: colors.neutral[500],
  },

  background: {
    default: colors.neutral[950],
    paper: colors.neutral[800],
  },

  divider: colors.neutral[800],
};

// برای سازگاری با کدهای قبلی
export const palette = lightPalette;