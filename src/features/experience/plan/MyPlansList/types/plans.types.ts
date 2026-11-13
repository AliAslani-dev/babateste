import { StaticImageData } from "next/image";

/* ============================================================
 * Plan
 * ============================================================ */
export type PlanCategory = "one-day" | "multi-day" | "nature";

export interface Plan {
  id: string;
  image: string | StaticImageData;
  title: string;
  badge: string;
  category: PlanCategory;
  date: string;
  remaining: string;
  price: string;
  tags?: string[];
}

/* ============================================================
 * Chips
 * ============================================================ */
export interface PlanChip {
  id: "all" | PlanCategory;
  label: string;
}

export const Plan_CHIPS: PlanChip[] = [
  { id: "all", label: "همه" },
  { id: "one-day", label: "یک روزه" },
  { id: "multi-day", label: "چندروزه" },
  { id: "nature", label: "طبیعت گردی" },
];

/* ============================================================
 * Constants
 * ============================================================ */
export const ALL_CHIP_ID = "all";