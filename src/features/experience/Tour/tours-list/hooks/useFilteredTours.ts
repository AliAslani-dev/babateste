"use client";

import { useMemo } from "react";

import type { Tour } from "../types/tours.types";
import { ALL_CHIP_ID } from "../types/tours.types";

import { formatPersianDate } from "@/lib/utils/toJalaliDate";
import { toPersianDigits } from "@/lib/utils/toPersianNumber";
import { useTours } from "@/features/experience/api";

interface UseFilteredToursArgs {
  search: string;
  activeChipIds: string[];
  allChipId?: string;
}

const DEFAULT_TOUR_IMAGE = "/images/cards/ToureCard/featured.png";

export function useFilteredTours({
  search,
  activeChipIds,
  allChipId = ALL_CHIP_ID,
}: UseFilteredToursArgs) {
  const { data, isLoading, isError, refetch } = useTours();

  const tours = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const selectedCategories = activeChipIds.filter((id) => id !== allChipId);

    // تبدیل مدل API به مدل موردنیاز کارت‌های صفحه
    const mappedTours: Tour[] = (data?.items ?? []).map((tour) => {
      const isNatureTour = /طبیعت|جنگل|کویر|آبشار/.test(tour.title);

      const isMultiDay =
        tour.startTime.slice(0, 10) !== tour.endTime.slice(0, 10);

      const category = isNatureTour
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

      const remainingCount = Math.max(0, tour.capacity - tour.usedCapacity);

      return {
        id: String(tour.id),
        image: tour.thumbnail || DEFAULT_TOUR_IMAGE,
        title: tour.title,
        badge,
        category,
        date: formatPersianDate(tour.startTime),
        remaining: `${toPersianDigits(remainingCount)} نفر باقی مانده`,
        price: toPersianDigits(tour.priceText),
        is_fave: Boolean(tour.is_fave),
        tags: [tour.title, tour.location, badge].filter(Boolean),
      };
    });

    return mappedTours.filter((tour) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(tour.category);

      const matchesSearch =
        !normalizedSearch ||
        tour.title.toLowerCase().includes(normalizedSearch) ||
        tour.badge.toLowerCase().includes(normalizedSearch) ||
        (tour.tags ?? []).some((tag) =>
          tag.toLowerCase().includes(normalizedSearch),
        );

      return matchesCategory && matchesSearch;
    });
  }, [data?.items, search, activeChipIds, allChipId]);

  return {
    tours,
    isLoading,
    isError,
    refetch,
  };
}
