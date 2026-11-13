"use client";

import { useMemo } from "react";

import type { event, eventCategory } from "../types/events.types";
import { ALL_CHIP_ID } from "../types/events.types";

import { formatPersianDate } from "@/lib/utils/toJalaliDate";
import { toPersianDigits } from "@/lib/utils/toPersianNumber";
import { useAllEvents } from "@/features/experience/api";

interface UseFilteredEventsArgs {
  search: string;
  activeChipIds: string[];
  allChipId?: string;
}

const DEFAULT_EVENT_IMAGE = "/images/cards/eventeCard/featured.png";

// شناسه چیپ‌ها به مقادیر filterTag در API
const FILTER_TAG_MAP: Record<Exclude<eventCategory, never>, string[]> = {
  "one-day": ["یک روزه", "یک‌روزه"],
  "multi-day": ["چندروزه", "چند روزه", "چند‌روزه"],
  nature: ["طبیعت گردی", "طبیعت‌گردی"],
  sport: ["ورزشی"],
};

const normalizeText = (value: string) =>
  value
    .replace(/\u200c/g, " ")
    .trim()
    .toLowerCase();

export function useFilteredEvents({
  search,
  activeChipIds,
  allChipId = ALL_CHIP_ID,
}: UseFilteredEventsArgs) {
  const { data, isLoading, isError, refetch } = useAllEvents();

  const events = useMemo(() => {
    const normalizedSearch = normalizeText(search);

    const selectedCategories = activeChipIds.filter(
      (id) => id !== allChipId,
    ) as eventCategory[];

    const mappedEvents: event[] = (data?.items ?? []).map((apiEvent) => {
      const filterTag = normalizeText(apiEvent.filterTag ?? "");

      // تشخیص دسته‌بندی با استفاده از برچسب واقعی API
      const tagCategory = (
        Object.entries(FILTER_TAG_MAP) as [eventCategory, string[]][]
      ).find(([, tags]) =>
        tags.some((tag) => normalizeText(tag) === filterTag),
      )?.[0];

      // برای رویدادهایی که برچسب نوع ندارند، دسته‌بندی قبلی حفظ می‌شود
      const isNatureEvent = /طبیعت|جنگل|کویر|آبشار/.test(apiEvent.title);

      const isMultiDay =
        apiEvent.startTime.slice(0, 10) !== apiEvent.endTime.slice(0, 10);

      const category: eventCategory =
        tagCategory ??
        (isNatureEvent ? "nature" : isMultiDay ? "multi-day" : "one-day");

      const badge =
        category === "sport"
          ? "ورزشی"
          : category === "nature"
            ? "طبیعت گردی"
            : category === "multi-day"
              ? "چندروزه"
              : "یک روزه";

      const remainingCount = Math.max(
        0,
        apiEvent.capacity - apiEvent.usedCapacity,
      );

      return {
        id: String(apiEvent.id),
        image: apiEvent.thumbnail || DEFAULT_EVENT_IMAGE,
        title: apiEvent.title,
        badge,
        category,
        date: formatPersianDate(apiEvent.startTime),
        remaining: `${toPersianDigits(remainingCount)} نفر باقی مانده`,
        price: toPersianDigits(apiEvent.priceText),
        is_fave: Boolean(apiEvent.is_fave),
        tags: [
          apiEvent.title,
          apiEvent.location,
          apiEvent.filterTag,
          badge,
        ].filter((tag): tag is string => Boolean(tag)),
      };
    });

    return mappedEvents.filter((event) => {
      
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(event.category);

      const matchesSearch =
        !normalizedSearch ||
        normalizeText(event.title).includes(normalizedSearch) ||
        normalizeText(event.badge).includes(normalizedSearch) ||
        (event.tags ?? []).some((tag) =>
          normalizeText(tag).includes(normalizedSearch),
        );

      return matchesCategory && matchesSearch;
    });
  }, [data?.items, search, activeChipIds, allChipId]);

  return {
    events,
    isLoading,
    isError,
    refetch,
  };
}
