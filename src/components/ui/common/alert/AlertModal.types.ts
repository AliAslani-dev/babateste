import type { ReactNode } from "react";

export interface AlertModalButton {
  label: string;
  onClick: () => void;
}

export interface AlertModalProps {
  open: boolean;
  onClose: () => void;
  icon?: ReactNode;
  title: string;
  description: string;
  confirmButton: AlertModalButton;
  cancelButton: AlertModalButton;
  children?: ReactNode;
}
