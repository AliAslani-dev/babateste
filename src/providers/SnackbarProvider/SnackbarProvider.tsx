"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { AppSnackbar } from "@/components/ui/AppSnackBar";
import { AppSnackbarType } from "@/components/ui/AppSnackBar/AppSnackbar.types";
import { getErrorMessage } from "@/lib/api";

interface SnackbarState {
  open: boolean;
  message: string;
  type: AppSnackbarType;
}

interface SnackbarContextValue {
  show: (message: string, type?: AppSnackbarType) => void;
  showError: (error: unknown) => void;
  showSuccess: (message: string) => void;
  showInfo: (message: string) => void;
  showWarning: (message: string) => void;
  hide: () => void;
}

const SnackbarContext = createContext<SnackbarContextValue | null>(null);

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<SnackbarState>({
    open: false,
    message: "",
    type: "success",
  });

  const hide = useCallback(() => {
    setState((s) => ({ ...s, open: false }));
  }, []);

  const show = useCallback(
    (message: string, type: AppSnackbarType = "success") => {
      setState({ open: false, message, type });
      setTimeout(() => {
        setState({ open: true, message, type });
      }, 0);
    },
    [],
  );

  const showError = useCallback(
    (error: unknown) => {
      show(getErrorMessage(error), "error");
    },
    [show],
  );

  const showSuccess = useCallback((m: string) => show(m, "success"), [show]);
  const showInfo = useCallback((m: string) => show(m, "info"), [show]);
  const showWarning = useCallback((m: string) => show(m, "warning"), [show]);

  return (
    <SnackbarContext.Provider
      value={{ show, showError, showSuccess, showInfo, showWarning, hide }}
    >
      {children}
      <AppSnackbar
        open={state.open}
        message={state.message}
        type={state.type}
        onClose={hide}
      />
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  const ctx = useContext(SnackbarContext);
  if (!ctx) {
    throw new Error("useSnackbar must be used within SnackbarProvider");
  }
  return ctx;
}