"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { Box, CircularProgress, Typography } from "@mui/material";

import { SimpleCard } from "@/components/ui/common/cards/activity-card";
import { formatPersianDate } from "@/lib/utils/toJalaliDate";
import { toPersianDigits } from "@/lib/utils/toPersianNumber";

import Registration from "./Registration";
import { registrationStyles as styles } from "./Registration.styles";
import { useTours } from "@/features/experience/api";

const DEFAULT_TOUR_IMAGE = "/images/cards/ToureCard/featured.png";

export default function RegistrationPage() {
  const params = useParams<{ id: string }>();
  const tourId = Number(params.id);

  const { data, isLoading, isError, refetch } = useTours();

  const tour = useMemo(() => {
    if (!Number.isInteger(tourId) || tourId <= 0) {
      return undefined;
    }

    return data?.items.find((item) => item.id === tourId);
  }, [data?.items, tourId]);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ textAlign: "center", p: 4 }}>
        <Typography color="error" sx={{ mb: 2 }}>
          دریافت اطلاعات تور با خطا مواجه شد.
        </Typography>

        <button type="button" onClick={() => refetch()}>
          تلاش مجدد
        </button>
      </Box>
    );
  }

  if (!tour) {
    return (
      <Box sx={{ textAlign: "center", p: 4 }}>
        <Typography>تور موردنظر پیدا نشد.</Typography>
      </Box>
    );
  }

  const startDate = new Date(tour.startTime);

  const startTime = Number.isNaN(startDate.getTime())
    ? ""
    : toPersianDigits(
        startDate.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );

  const subtitle = [
    formatPersianDate(tour.startTime),
    startTime ? `حرکت ساعت ${startTime}` : "",
  ]
    .filter(Boolean)
    .join("، ");

  const image =
    tour.thumbnail || tour.images?.[0]?.imageUrl || DEFAULT_TOUR_IMAGE;

  return (
    <Box sx={styles.page}>
      <Box sx={styles.content}>
        <Box sx={{ mb: "20px" }}>
          <SimpleCard
            image={image}
            title={tour.title}
            subtitle={subtitle}
            href={`/experience/tours-list/tour-detail/${tour.id}`}
          />
        </Box>

        <Registration />
      </Box>
    </Box>
  );
}
