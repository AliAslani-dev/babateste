import type { MentorSummaryItem } from "../../data/Mentor.data";

export interface MentorAboutProps {
  about: string;
  summaryItems: MentorSummaryItem[];
}
