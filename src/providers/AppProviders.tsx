// src/providers/AppProviders.tsx
"use client";

import { ReactNode } from "react";

import { AppThemeProvider } from "@/theme";
import MuiProvider from "./MuiProvider";
import { QueryProvider } from "./query/provider";
import { SnackbarProvider } from "./SnackbarProvider/SnackbarProvider";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <AppThemeProvider defaultMode="light">
      <QueryProvider>
        <MuiProvider>
          <SnackbarProvider>{children}</SnackbarProvider>
        </MuiProvider>
      </QueryProvider>
    </AppThemeProvider>
  );
}