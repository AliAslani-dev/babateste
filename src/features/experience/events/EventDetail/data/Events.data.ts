
export interface EventSummaryItem {
  id: string;
  icon: "location" | "duration" | "capacity"| "time";
  label: string;
  value: string;
}

export interface EventDetailsData {
  id: number;
  title:string;
  heroImage: string;
  detail: string;
  images: string[];
  date: string;
  location: string;
  remaining: string;
  summaryItems: EventSummaryItem[];
}



export const EventTabs = [
  { label: "درباره رویداد", value: "about" },
  { label: "برنامه رویداد", value: "schedule" },
  { label: "خدمات", value: "services" },
  { label: "نظرات", value: "comments" },
];

