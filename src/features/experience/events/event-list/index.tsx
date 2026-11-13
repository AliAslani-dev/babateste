"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

import { FilterBar } from "@/components/ui/common/FilterBar";
import { useFilteredEvents } from "./hooks/useFilteredEvents";
import { Event_CHIPS, ALL_CHIP_ID } from "./types/events.types";
import EventsListGrid from "./components/EventsListGrid";

import { EventFavoriteService } from "@/features/experience/api";

export default function EventsListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialTag = searchParams.get("tag");

  const [search, setSearch] = useState("");

  const [activeChips, setActiveChips] = useState<string[]>(() => {
    if (initialTag && Event_CHIPS.some((chip) => chip.id === initialTag)) {
      return [initialTag];
    }

    return [ALL_CHIP_ID];
  });

  const {
    events: filteredEvents,
    isLoading,
    isError,
    refetch,
  } = useFilteredEvents({
    search,
    activeChipIds: activeChips,
    allChipId: ALL_CHIP_ID,
  });

  const [favoriteOverrides, setFavoriteOverrides] = useState<
    Record<string, boolean>
  >({});

  const handleBookmarkClick = async (eventId: string) => {
    const selectedEvent = filteredEvents.find(
      (event) => event.id === eventId,
    );

    if (!selectedEvent) return;

    const isFavorite =
      favoriteOverrides[eventId] ?? selectedEvent.is_fave;

    try {
      if (isFavorite) {
        await EventFavoriteService.removeFavorite({ eventId });
      } else {
        await EventFavoriteService.addFavorite({ eventId });
      }

      setFavoriteOverrides((previous) => ({
        ...previous,
        [eventId]: !isFavorite,
      }));
    } catch (error) {
      console.error("خطا در تغییر علاقه‌مندی رویداد:", error);
    }
  };

  const handleEventClick = (eventId: string) => {
    router.push(`/experience/events-list/event-detail/${eventId}`);
  };

  return (
    <Box>
      <FilterBar
        searchValue={search}
        onSearchChange={setSearch}
        onSearchSubmit={setSearch}
        chips={Event_CHIPS}
        activeChipIds={activeChips}
        onChipChange={setActiveChips}
        allChipId={ALL_CHIP_ID}
        onFilterClick={() => console.log("open filter")}
        onSortClick={() => console.log("open sort")}
      />

      <EventsListGrid
        events={filteredEvents.map((event) => ({
          ...event,
          is_fave:
            favoriteOverrides[event.id] ?? event.is_fave,
        }))}
        isLoading={isLoading}
        isError={isError}
        onRetry={refetch}
        onBookmarkClick={handleBookmarkClick}
        onCardClick={handleEventClick}
      />
    </Box>
  );
}
