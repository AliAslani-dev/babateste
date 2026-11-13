"use client";

import { useMemo } from "react";

import type { Plan } from "../types/plans.types";
import { ALL_CHIP_ID } from "../types/plans.types";

import { formatPersianDate } from "@/lib/utils/toJalaliDate";
import { toPersianDigits } from "@/lib/utils/toPersianNumber";
import { useMyEvents } from "@/features/experience/api";

interface UseFilteredPlanArgs {
  search: string;
  activeChipIds: string[];
  allChipId?: string;
}


export function useFilteredPlans({
  search,
  activeChipIds,
  allChipId = ALL_CHIP_ID,
}: UseFilteredPlanArgs) {
  const { data, isLoading, isError, refetch } = useMyEvents();

  const Plans = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const selectedCategories = activeChipIds.filter((id) => id !== allChipId);

    // تبدیل مدل API به مدل موردنیاز کارت‌های صفحه
    const mappedPlans: Plan[] = (data?.items ?? []).map((plan) => {
      const isNaturePlan = /طبیعت|جنگل|کویر|آبشار/.test(plan.title);

      const isMultiDay =
        plan.startTime.slice(0, 10) !== plan.endTime.slice(0, 10);

      const category = isNaturePlan
        ? "nature"
        : isMultiDay
          ? "multi-day"
          : "one-day";

      const badge =
        category === "nature"
          ? "طبیعت گردی"
          : category === "multi-day"
            ? "چندروزه"
            : "یک روزه";

      const remainingCount = Math.max(0, plan.capacity - plan.usedCapacity);

      return {
        id: String(plan.id),
        image: plan.thumbnail, 
        title: plan.title,
        badge,
        category,
        date: formatPersianDate(plan.startTime),
        remaining: `${toPersianDigits(remainingCount)} نفر باقی مانده`,
        price: toPersianDigits(plan.priceText),
        tags: [plan.title, plan.location, badge].filter(Boolean),
      };
    });

    return mappedPlans.filter((plan) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(plan.category);

      const matchesSearch =
        !normalizedSearch ||
        plan.title.toLowerCase().includes(normalizedSearch) ||
        plan.badge.toLowerCase().includes(normalizedSearch) ||
        (plan.tags ?? []).some((tag) =>
          tag.toLowerCase().includes(normalizedSearch),
        );

      return matchesCategory && matchesSearch;
    });
  }, [data?.items, search, activeChipIds, allChipId]);

  return {
    Plans,
    isLoading,
    isError,
    refetch,
  };
}
