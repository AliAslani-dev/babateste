
export interface TourSummaryItem {
  id: string;
  icon: "location" | "duration" | "capacity";
  label: string;
  value: string;
}

export interface TourDetailsData {
  id: number;
  title:string;
  heroImage: string;
  detail: string;
  images: string[];
  date: string;
  location: string;
  remaining: string;
  summaryItems: TourSummaryItem[];
}



export const tourTabs = [
  { label: "درباره تور", value: "about" },
  { label: "برنامه سفر", value: "schedule" },
  { label: "خدمات", value: "services" },
  { label: "نظرات", value: "comments" },
];

