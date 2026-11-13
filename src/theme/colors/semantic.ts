// src/theme/colors/semantic.ts

import { colors } from "./colors";

export interface SemanticColors {
  background: {
    default: string;
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
    inverse: string;
    primaryColor: string;
  };
  action: {
    primary: string;
    primaryHover: string;
    secondary: string;
  };
  secondary: {
    default: string;
    hover: string;
  };
  destructive: {
    default: string;
    dark: string;
  };
  outline: {
    default: string;
    secondary: string;
  };
  input: {
    default: string;
  };
  icon: {
    primary: string;
    secondary: string;
    inverse: string;
    primaryColor: string;
  };
  border: {
    default: string;
    secondary: string;
    primary: string;
    light: string;
  };
  status: {
    success: string;
    warning: string;
    error: string;
  };
}

export const lightSemanticColors: SemanticColors = {
  background: {
    default: colors.neutral[0],
    primary: colors.cyan[500],
    secondary: colors.neutral[50],
  },

  text: {
    primary: colors.neutral[950],
    secondary: colors.neutral[500],
    inverse: colors.neutral[0],
    primaryColor: colors.cyan[500],
  },

  action: {
    primary: colors.cyan[500],
    primaryHover: colors.cyan[500],
    secondary: colors.neutral[800],
  },

  secondary: {
    default: colors.neutral[50],
    hover: colors.neutral[100],
  },

  destructive: {
    default: colors.red[500],
    dark: colors.red[700],
  },

  outline: {
    default: colors.neutral[0],
    secondary: colors.neutral[50],
  },

  input: {
    default: colors.neutral[50],
  },

  icon: {
    primary: colors.neutral[950],
    secondary: colors.neutral[500],
    inverse: colors.neutral[0],
    primaryColor: colors.cyan[500],
  },

  border: {
    default: colors.neutral[100],
    secondary: colors.neutral[300],
    primary: colors.cyan[500],
    light: colors.cyan[100],
  },

  status: {
    success: colors.green[500],
    warning: colors.orange[500],
    error: colors.red[500],
  },
};

export const darkSemanticColors: SemanticColors = {
  background: {
    default: colors.neutral[950],
    primary: colors.cyan[500],
    secondary: colors.neutral[800],
  },

  text: {
    primary: colors.neutral[0],
    secondary: colors.neutral[300],
    inverse: colors.neutral[950],
    primaryColor: colors.cyan[300],
  },

  action: {
    primary: colors.cyan[500],
    primaryHover: colors.cyan[300],
    secondary: colors.neutral[100],
  },

  secondary: {
    default: colors.neutral[800],
    hover: colors.neutral[500],
  },

  destructive: {
    default: colors.red[500],
    dark: colors.red[700],
  },

  outline: {
    default: colors.neutral[800],
    secondary: colors.neutral[500],
  },

  input: {
    default: colors.neutral[800],
  },

  icon: {
    primary: colors.neutral[0],
    secondary: colors.neutral[300],
    inverse: colors.neutral[950],
    primaryColor: colors.cyan[300],
  },

  border: {
    default: colors.neutral[800],
    secondary: colors.neutral[500],
    primary: colors.cyan[500],
    light: colors.cyan[300],
  },

  status: {
    success: colors.green[500],
    warning: colors.orange[500],
    error: colors.red[500],
  },
};

// برای سازگاری با کدهای قبلی
export const semanticColors = lightSemanticColors;