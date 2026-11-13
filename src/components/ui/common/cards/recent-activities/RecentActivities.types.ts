import { StaticImageData } from "next/image";

export interface RecentActivityItem {
  image: string | StaticImageData;
  title: string;
  date: string;
  score: number | string;
  iconBgColor?: string;
}

export interface RecentActivitiesProps {
  items: RecentActivityItem[];
  onViewAll?: () => void;
  viewAllHref?: string;
}