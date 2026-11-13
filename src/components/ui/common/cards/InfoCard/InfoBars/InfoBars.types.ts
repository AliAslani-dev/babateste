import type { ReactNode } from "react";

export interface InfoBarsProps {
  dateText: string;
  locationText: string;
  userText: string;

  dateIcon: ReactNode;
  locationIcon: ReactNode;
  userIcon: ReactNode;
}