"use client";

import { Box, Typography } from "@mui/material";

import { FeaturedTourCard } from "@/components/ui/common/cards/TourCards/FeaturedCard";

import type { Plan } from "../types/plans.types";
import {
  PlansListWrapperStyles,
  PlansListEmptyStyles,
} from "../styles/PlansList.styles";

interface PlansListGridProps {
  plans: Plan[];
  onBookmarkClick?: (planId: string) => void;
  onCardClick?: (planId: string) => void;
}

export default function PlansListGrid({
  plans,
  onBookmarkClick,
  onCardClick,
}: PlansListGridProps) {
  /* ── حالت خالی ── */
  if (plans.length === 0) {
    return (
      <Box sx={PlansListEmptyStyles}>
        <Typography variant="boldSm" color="text.secondary">
          توری با این فیلترها پیدا نشد 🥲
        </Typography>
      </Box>
    );
  }

  /* ── لیست تورها ── */
  return (
    <Box sx={PlansListWrapperStyles}>
      {plans.map((plan) => (
        <FeaturedTourCard
          key={plan.id}
          image={plan.image}
          title={plan.title}
          badge={plan.badge}
          date={plan.date}
          remaining={plan.remaining}
          price={plan.price}
          onBookmarkClick={() => onBookmarkClick?.(plan.id)}
          onCardClick={() => onCardClick?.(plan.id)}
        />
      ))}
    </Box>
  );
}
