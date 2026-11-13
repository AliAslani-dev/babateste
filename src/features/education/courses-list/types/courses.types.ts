import { CourseListItem } from "../../api";

/* ============================================================
 * Course Category
 * ============================================================ */
export type CourseCategory =
  | "personal-development"
  | "artificial-intelligence"
  | "digital-skills"
  | "entrepreneurship";

/* ============================================================
 * Chips
 * ============================================================ */
export interface CourseChip {
  id: "all" | CourseCategory;
  label: string;
}

export type CourseCardItem = Pick<
  CourseListItem,
  | "id"
  | "title"
  | "shortDescription"
  | "tableOfContents"
  | "totalHours"
  | "totalLearners"
  | "imageUrl"
  | "createdAt"
> & {
  isSaved?: boolean;
};

export type CourseSortKey = "hours" | "date" | "learners";

export const COURSE_SORT_OPTIONS: { id: CourseSortKey; label: string }[] = [
  { id: "hours", label: "ساعت" },
  { id: "date", label: "تاریخ" },
  { id: "learners", label: "دانشجو" },
];

export const COURSE_CHIPS: CourseChip[] = [
  { id: "all", label: "همه" },
  // { id: "personal-development", label: "توسعه فردی" },
  { id: "artificial-intelligence", label: "هوش مصنوعی" },
  { id: "digital-skills", label: "مهارت‌های دیجیتال" },
  { id: "entrepreneurship", label: "کارآفرینی" },
];
export const ALL_CHIP_ID = "all";

/* ============================================================
 * inferCategory — نگاشت عنوان دوره به دسته
 * ============================================================ */
export function inferCategory(title: string): CourseCategory {
  const t = title.toLowerCase();

  // ۱. هوش مصنوعی
  if (
    t.includes("هوش مصنوعی") ||
    t.includes("ai") ||
    t.includes("machine learning") ||
    t.includes("یادگیری ماشین") ||
    t.includes("داده")
  )
    return "artificial-intelligence";

  // ۲. توسعه فردی — قبل از کارآفرینی چک شود
  if (
    t.includes("توسعه فردی") ||
    t.includes("رفتار") ||
    t.includes("روان") ||
    t.includes("انگیزه") ||
    t.includes("موفقیت")
  )
    return "personal-development";

  // ۳. کارآفرینی
  if (
    t.includes("کارآفرینی") ||
    t.includes("استارت") ||
    t.includes("کسب و کار") ||
    t.includes("کسب‌وکار") ||
    t.includes("بازاریابی") ||
    t.includes("محتوا")
  )
    return "entrepreneurship";

  // ۴. مهارت‌های دیجیتال
  if (
    t.includes("دیجیتال") ||
    t.includes("digital") ||
    t.includes("پایتون") ||
    t.includes("python") ||
    t.includes("برنامه") ||
    t.includes("react") ||
    t.includes("flutter") ||
    t.includes("شبکه") ||
    t.includes("اینترنت")
  )
    return "digital-skills";

  // پیش‌فرض
  return "digital-skills";
}
