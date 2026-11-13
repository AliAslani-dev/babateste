
export interface PlanSummaryItem {
  id: string;
  icon: "location" | "duration" | "capacity";
  label: string;
  value: string;
}

export interface PlanDetailsData {
  id: number;
  title:string;
  heroImage: string;
  detail: string;
  images: string[];
  date: string;
  location: string;
  remaining: string;
  summaryItems: PlanSummaryItem[];
}



export const PlanTabs = [
  { label: "درباره تور", value: "about" },
  { label: "برنامه سفر", value: "schedule" },
  { label: "خدمات", value: "services" },
  { label: "نظرات", value: "comments" },
];

