"use client";

import { Box, Typography } from "@mui/material";

import { FeaturedTourCard } from "@/components/ui/common/cards/TourCards/FeaturedCard";

import type { Tour } from "../types/tours.types";
import {
  toursListWrapperStyles,
  toursListEmptyStyles,
} from "../styles/ToursList.styles";

interface ToursListGridProps {
  tours: Tour[];
  isLoading?: boolean;
  isError?: boolean;
  onRetry?: () => void;
  onBookmarkClick?: (tourId: string) => void;
  onCardClick?: (tourId: string) => void;
}

export default function ToursListGrid({
  tours,
  isLoading,
  isError,
  onRetry,
  onBookmarkClick,
  onCardClick,
}: ToursListGridProps) {
  if (isLoading) {
    return (
      <Box sx={toursListEmptyStyles}>
        <Typography variant="mediumSm">در حال دریافت تورها...</Typography>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={toursListEmptyStyles}>
        <Typography variant="mediumSm">
          دریافت تورها با خطا مواجه شد.
        </Typography>

        <button type="button" onClick={() => onRetry?.()}>
          تلاش مجدد
        </button>
      </Box>
    );
  }

  if (tours.length === 0) {
    return (
      <Box sx={toursListEmptyStyles}>
        <Typography variant="boldSm" color="text.secondary">
          توری با این فیلترها پیدا نشد 🥲
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={toursListWrapperStyles}>
      {tours.map((tour) => (
        <FeaturedTourCard
          key={tour.id}
          image={tour.image}
          title={tour.title}
          badge={tour.badge}
          date={tour.date}
          remaining={tour.remaining}
          price={tour.price}
          isBookmarked={tour.is_fave}
          onBookmarkClick={() => onBookmarkClick?.(tour.id)}
          onCardClick={() => onCardClick?.(tour.id)}
        />
      ))}
    </Box>
  );
}