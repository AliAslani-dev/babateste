import { StaticImageData } from "next/image";

/* ============================================================
 * Tour
 * ============================================================ */
export type TourCategory = "one-day" | "multi-day" | "nature";

export interface Tour {
  id: string;
  image: string | StaticImageData;
  title: string;
  badge: string;
  category: TourCategory;
  date: string;
  remaining: string;
  price: string;
  tags?: string[];
  is_fave?:boolean;
}

/* ============================================================
 * Chips
 * ============================================================ */
export interface TourChip {
  id: "all" | TourCategory;
  label: string;
}

export const TOUR_CHIPS: TourChip[] = [
  { id: "all", label: "همه" },
  { id: "one-day", label: "یک روزه" },
  { id: "multi-day", label: "چندروزه" },
  { id: "nature", label: "طبیعت گردی" },
];

/* ============================================================
 * Constants
 * ============================================================ */
export const ALL_CHIP_ID = "all";