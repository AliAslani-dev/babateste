"use client";

import { useMemo } from "react";
import {
  type CourseCardItem,
  type CourseSortKey,
  inferCategory,
} from "../types/courses.types";

type Params = {
  search: string;
  activeChipIds: string[];
  allChipId: string;
  courses: CourseCardItem[];
  sortKey: CourseSortKey | null;
};

export function useFilteredCourses({
  search,
  activeChipIds,
  allChipId,
  courses,
  sortKey,
}: Params) {
  return useMemo(() => {
    let result = [...courses];

    // ۱. فیلتر چیپ‌ها
    const activeChips = activeChipIds.filter((id) => id !== allChipId);
    if (activeChips.length > 0) {
      result = result.filter((course) => {
        const category = inferCategory(course.title);
        return activeChips.includes(category);
      });
    }

    // ۲. فیلتر search
    const q = search.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.shortDescription?.toLowerCase().includes(q)
      );
    }

    // ۳. مرتب‌سازی
    if (sortKey) {
      result.sort((a, b) => {
        switch (sortKey) {
          case "hours":
            return b.totalHours - a.totalHours;
          case "date":
            return (
              new Date(b.createdAt).getTime() -
              new Date(a.createdAt).getTime()
            );
          case "learners":
            return b.totalLearners - a.totalLearners;
          default:
            return 0;
        }
      });
    }

    return result;
  }, [search, activeChipIds, allChipId, courses, sortKey]);
}