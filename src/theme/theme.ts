// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";
import type { Components } from "@mui/material/styles";

import {
  lightSemanticColors,
  darkSemanticColors,
} from "./colors/semantic";
import type { SemanticColors } from "./colors/semantic";
import { lightPalette, darkPalette } from "./palette";
import { typography } from "./typography";

import "./typography/typography.types";
import "./colors/semantic.types";

const sharedComponents = (semantic: SemanticColors): Components => ({
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        direction: "rtl",
      },
      body: {
        margin: 0,
        padding: 0,
        fontFamily: typography.fontFamily,
      },
      "*": {
        boxSizing: "border-box",
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: "none",
        fontWeight: 600,
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        backgroundColor: semantic.input.default,

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: semantic.border.default,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: semantic.border.secondary,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: semantic.border.primary,
        },
        "&.Mui-error .MuiOutlinedInput-notchedOutline": {
          borderColor: semantic.status.error,
        },
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        border: `1px solid ${semantic.border.default}`,
        boxShadow: "none",
      },
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 6,
      },
    },
  },

  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
});

const sharedOptions = {
  direction: "rtl" as const,
  typography,
  shape: {
    borderRadius: 8,
  },
};

export const lightTheme = createTheme({
  ...sharedOptions,
  palette: lightPalette,
  semantic: lightSemanticColors,
  components: sharedComponents(lightSemanticColors),
});

export const darkTheme = createTheme({
  ...sharedOptions,
  palette: darkPalette,
  semantic: darkSemanticColors,
  components: sharedComponents(darkSemanticColors),
});

// برای سازگاری با کدهای قبلی
export const theme = lightTheme;