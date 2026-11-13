import type { ReactNode } from "react";

export interface TitleBarProps {
  title: string;
  actionLabel?: string;
  icon?: ReactNode;
  onActionClick?: () => void;
  
}