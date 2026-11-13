import type { PlanSummaryItem } from "../../data/plan.data";

export interface PlanAboutProps {
  detail: string;
  images: string[];
  summaryItems: PlanSummaryItem[];
  onRegister?: () => void;
}
