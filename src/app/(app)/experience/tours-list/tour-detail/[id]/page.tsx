"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

import { formatPersianDate } from "@/lib/utils/toJalaliDate";
import { toPersianDigits } from "@/lib/utils/toPersianNumber";

import { useTours } from "@/features/experience/api";
import TourDetails from "@/features/experience/Tour/TourDetail/components/TourDetails/TourDetails";

import { useNavbarDetail } from "@/components/layout/navbar-up/components/NavbarDetail/NavbarDetailContext";
import { TourFavoriteService } from "@/features/experience/api";

const DEFAULT_TOUR_IMAGE = "/images/cards/ToureCard/featured.png";

export default function TourDetailPage() {
  const params = useParams<{ id: string }>();
  const tourId = Number(params.id);

  const { data, isLoading, isError, refetch } = useTours();
  const { setNavbarDetail } = useNavbarDetail();

  const apiTour = data?.items.find((item) => item.id === tourId);
  const currentTourId = apiTour?.id;

  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  // هماهنگ کردن وضعیت اولیه بوکمارک با اطلاعات API
  useEffect(() => {
    setIsSaved(Boolean(apiTour?.is_fave));
  }, [apiTour?.is_fave, tourId]);

  // افزودن یا حذف تور از علاقه‌مندی‌ها
  const handleSave = useCallback(async () => {
    if (
      typeof currentTourId !== "number" ||
      !Number.isInteger(currentTourId) ||
      currentTourId <= 0 ||
      isSaving
    ) {
      return;
    }

    const previousValue = isSaved;
    const nextValue = !previousValue;

    setIsSaving(true);
    setIsSaved(nextValue);

    try {
      if (nextValue) {
        await TourFavoriteService.addFavorite({
          tourId: String(currentTourId),
        });
      } else {
        await TourFavoriteService.removeFavorite({
          tourId: String(currentTourId),
        });
      }
    } catch (error) {
      setIsSaved(previousValue);

      console.error("خطا در تغییر علاقه‌مندی تور:", error);
    } finally {
      setIsSaving(false);
    }
  }, [currentTourId, isSaved, isSaving]);

  // ارسال وضعیت بوکمارک به NavbarDetail
  useEffect(() => {
    setNavbarDetail({
      isSaved,
      onSave: handleSave,
    });
  }, [isSaved, handleSave, setNavbarDetail]);

  // پاک کردن وضعیت صفحه هنگام خروج از جزئیات تور
  useEffect(() => {
    return () => {
      setNavbarDetail({
        isSaved: false,
        onSave: undefined,
      });
    };
  }, [setNavbarDetail]);

  const tour = useMemo(() => {
    if (!Number.isInteger(tourId) || tourId <= 0) {
      return undefined;
    }

    if (!apiTour) return undefined;

    const remaining = Math.max(0, apiTour.capacity - apiTour.usedCapacity);

    const startDate = new Date(apiTour.startTime.replace(" ", "T"));
    const endDate = new Date(apiTour.endTime.replace(" ", "T"));

    const durationDays =
      Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())
        ? 1
        : Math.max(
            1,
            Math.ceil(
              (new Date(
                endDate.getFullYear(),
                endDate.getMonth(),
                endDate.getDate(),
              ).getTime() -
                new Date(
                  startDate.getFullYear(),
                  startDate.getMonth(),
                  startDate.getDate(),
                ).getTime()) /
                (1000 * 60 * 60 * 24),
            ) + 1,
          );

    return {
      id: apiTour.id,
      title: apiTour.title,
      heroImage: apiTour.thumbnail || DEFAULT_TOUR_IMAGE,
      detail: apiTour.descriptions || "توضیحاتی برای این تور ثبت نشده است.",
      images: (apiTour.images ?? []).map((image) => image.imageUrl),
      date: formatPersianDate(apiTour.startTime),
      location: apiTour.location,
      remaining: `${toPersianDigits(remaining)} نفر باقی‌مانده`,
      summaryItems: [
        {
          id: "location",
          icon: "location" as const,
          label: "موقعیت تور",
          value: apiTour.location,
        },
        {
          id: "duration",
          icon: "duration" as const,
          label: "مدت برنامه",
          value: `${toPersianDigits(durationDays)} روز`,
        },
        {
          id: "capacity",
          icon: "capacity" as const,
          label: "ظرفیت کل",
          value: `${toPersianDigits(apiTour.capacity)} نفر`,
        },
      ],
    };
  }, [apiTour, tourId]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 5,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ textAlign: "center", p: 4 }}>
        <Typography variant="regularXs" color="error" sx={{ mb: 2 }}>
          دریافت اطلاعات تور با خطا مواجه شد.
        </Typography>

        <Button onClick={() => void refetch()}>تلاش مجدد</Button>
      </Box>
    );
  }

  if (!tour) {
    return (
      <Box sx={{ textAlign: "center", p: 4 }}>
        <Typography variant="regularXs">اطلاعات این تور پیدا نشد.</Typography>
      </Box>
    );
  }

  return <TourDetails tour={tour} />;
}
