// src/theme/colors/semantic.types.ts

import "@mui/material/styles";

import type { SemanticColors } from "./semantic";

declare module "@mui/material/styles" {
  interface Theme {
    semantic: SemanticColors;
  }

  interface ThemeOptions {
    semantic?: SemanticColors;
  }
}