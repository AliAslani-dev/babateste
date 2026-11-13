// src/providers/MuiProvider.tsx
"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { darkTheme, lightTheme, useThemeMode } from "@/theme";

export default function MuiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode } = useThemeMode();
  const muiTheme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}