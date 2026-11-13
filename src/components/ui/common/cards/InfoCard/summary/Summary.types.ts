
import type { ReactNode } from "react";

export interface SummaryItem {
  id: string;
  icon: ReactNode;
  label: string;
  value: string;
}

export interface SummaryProps {
  items: SummaryItem[];
  buttonText?: string;
  onButtonClick?: () => void;
}
