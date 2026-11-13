import { StaticImageData } from "next/image";

/* ============================================================
 * event
 * ============================================================ */
export type eventCategory = "one-day" | "multi-day" | "nature" |"sport";

export interface event {
  id: string;
  image: string | StaticImageData;
  title: string;
  badge: string;
  category: eventCategory;
  date: string;
  remaining: string;
  price: string;
  tags?: string[];
  is_fave?:boolean;
}

/* ============================================================
 * Chips
 * ============================================================ */
export interface EventChip {
  id: "all" | eventCategory;
  label: string;
}

export const Event_CHIPS: EventChip[] = [
  { id: "all", label: "همه" },
  { id: "one-day", label: "یک روزه" },
  { id: "multi-day", label: "چندروزه" },
  { id: "nature", label: "طبیعت گردی" },
  { id: "sport", label: "ورزشی" },
];

/* ============================================================
 * Constants
 * ============================================================ */
export const ALL_CHIP_ID = "all";
