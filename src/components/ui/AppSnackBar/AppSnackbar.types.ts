
import type { ReactNode } from "react";

export type AppSnackbarType =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "loading";

export interface AppSnackbarProps {
  open: boolean;
  message: string;
  type?: AppSnackbarType;
  icon?: ReactNode;
  onClose: () => void;
  autoHideDuration?: number | null;
}
