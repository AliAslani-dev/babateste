import type { TourSummaryItem } from "../../data/tours.data";

export interface TourAboutProps {
  detail: string;
  images: string[];
  summaryItems: TourSummaryItem[];
  onRegister: () => void;
}