// src/theme/index.ts

// ─── Theme ───
export { theme, lightTheme, darkTheme } from "./theme";

// ─── Theme Provider ───
export { AppThemeProvider, useThemeMode } from "./ThemeProvider";
export type { ThemeMode } from "./ThemeProvider";

// ─── Colors ───
export {
  colors,
  semanticColors,
  lightSemanticColors,
  darkSemanticColors,
} from "./colors";
export type { SemanticColors } from "./colors/semantic";

// ─── Typography ───
export { typography, fontWeights } from "./typography";

// ─── Palette ───
export { palette, lightPalette, darkPalette } from "./palette";