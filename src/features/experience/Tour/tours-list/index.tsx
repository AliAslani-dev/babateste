"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

import { FilterBar } from "@/components/ui/common/FilterBar";
import { useFilteredTours } from "./hooks/useFilteredTours";
import { TOUR_CHIPS, ALL_CHIP_ID } from "./types/tours.types";
import ToursListGrid from "./components/ToursListGrid";

import { TourFavoriteService } from "@/features/experience/api";

export default function ToursListPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [activeChips, setActiveChips] = useState<string[]>([ALL_CHIP_ID]);

  const {
    tours: filteredTours,
    isLoading,
    isError,
    refetch,
  } = useFilteredTours({
    search,
    activeChipIds: activeChips,
    allChipId: ALL_CHIP_ID,
  });

  const [favoriteOverrides, setFavoriteOverrides] = useState<
    Record<string, boolean>
  >({});

  const handleBookmarkClick = async (tourId: string) => {
    const selectedTour = filteredTours.find(
      (tour) => tour.id === tourId,
    );

    if (!selectedTour) return;

    const isFavorite =
      favoriteOverrides[tourId] ?? selectedTour.is_fave;

    try {
      if (isFavorite) {
        await TourFavoriteService.removeFavorite({ tourId });
      } else {
        await TourFavoriteService.addFavorite({ tourId });
      }

      setFavoriteOverrides((previous) => ({
        ...previous,
        [tourId]: !isFavorite,
      }));
    } catch (error) {
      console.error("خطا در تغییر علاقه‌مندی تور:", error);
    }
  };

  const handleTourClick = (tourId: string) => {
    router.push(`/experience/tours-list/tour-detail/${tourId}`);
  };

  return (
    <Box>
      <FilterBar
        searchValue={search}
        onSearchChange={setSearch}
        onSearchSubmit={setSearch}
        chips={TOUR_CHIPS}
        activeChipIds={activeChips}
        onChipChange={setActiveChips}
        allChipId={ALL_CHIP_ID}
        onFilterClick={() => console.log("open filter")}
        onSortClick={() => console.log("open sort")}
      />

      <ToursListGrid
        tours={filteredTours.map((tour) => ({
          ...tour,
          is_fave:
            favoriteOverrides[tour.id] ?? tour.is_fave,
        }))}
        isLoading={isLoading}
        isError={isError}
        onRetry={refetch}
        onBookmarkClick={handleBookmarkClick}
        onCardClick={handleTourClick}
      />
    </Box>
  );
}