import { ReactNode } from "react";

export interface ViewAllProps {
  title?: string;
  subtitle?: string;
  className?: string;
  onClick?: () => void;
   icon?: ReactNode;
}
