"use client";

import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";

import { FeaturedTourCard } from "@/components/ui/common/cards/TourCards/FeaturedCard";

import type { event } from "../types/events.types";
import {
  eventsListEmptyStyles,
  eventsListWrapperStyles,
} from "../styles/EventsList.styles";

interface EventsListGridProps {
  events: event[];
  isLoading?: boolean;
  isError?: boolean;
  onRetry?: () => void;
  onBookmarkClick?: (eventId: string) => void;
  onCardClick?: (eventId: string) => void;
}

export default function EventsListGrid({
  events,
  isLoading = false,
  isError = false,
  onRetry,
  onBookmarkClick,
  onCardClick,
}: EventsListGridProps) {
  if (isLoading) {
    return (
      <Box sx={eventsListEmptyStyles}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={eventsListEmptyStyles}>
        <Alert severity="error">دریافت رخدادها ناموفق بود.</Alert>

        {onRetry && (
          <Button onClick={onRetry} sx={{ mt: 2 }}>
            تلاش مجدد
          </Button>
        )}
      </Box>
    );
  }

  if (events.length === 0) {
    return (
      <Box sx={eventsListEmptyStyles}>
        <Typography variant="boldSm" color="text.secondary">
          رویدادی با این فیلترها پیدا نشد 🥲
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={eventsListWrapperStyles}>
      {events.map((event) => (
        <FeaturedTourCard
          key={event.id}
          image={event.image}
          title={event.title}
          badge={event.badge}
          date={event.date}
          remaining={event.remaining}
          price={event.price}
          isBookmarked={event.is_fave}
          onBookmarkClick={() => onBookmarkClick?.(event.id)}
          onCardClick={() => onCardClick?.(event.id)}
        />
      ))}
    </Box>
  );
}
