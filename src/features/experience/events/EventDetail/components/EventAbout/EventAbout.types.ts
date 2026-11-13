import { EventSummaryItem } from "../../data/Events.data";

export interface EventAboutProps {
  detail: string;
  images: string[];
  summaryItems: EventSummaryItem[];
  onRegister: () => void;
}