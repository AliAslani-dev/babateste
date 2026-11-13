"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { Box, CircularProgress } from "@mui/material";

import { formatPersianDate } from "@/lib/utils/toJalaliDate";

import { toPersianDigits } from "@/lib/utils/toPersianNumber";
import { useMyEvents } from "@/features/experience/api";
import PlanDetails from "@/features/experience/plan/PlanDetail/components/PlanDetails/PlanDetails";

// مسیر import را با محل واقعی کامپوننتت هماهنگ کن.

const DEFAULT_Plan_IMAGE = "/images/cards/PlaneCard/featured.png";

export default function PlanDetailPage() {
  const params = useParams<{ id: string }>();
  const PlanId = Number(params.id);

  const { data, isLoading, isError, refetch } = useMyEvents();

  const Plan = useMemo(() => {
    if (!Number.isInteger(PlanId) || PlanId <= 0) {
      return undefined;
    }

    const apiPlan = data?.items.find((item) => item.id === PlanId);

    if (!apiPlan) return undefined;

    const remaining = Math.max(0, apiPlan.capacity - apiPlan.usedCapacity);

    const startDate = new Date(apiPlan.startTime);
    const endDate = new Date(apiPlan.endTime);

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
      id: apiPlan.id,
      title: apiPlan.title,
      heroImage: apiPlan.thumbnail || DEFAULT_Plan_IMAGE,
      detail: apiPlan.descriptions || "توضیحاتی برای این تور ثبت نشده است.",
      // API فعلی فقط thumbnail را مشخص کرده؛
      // تا زمان دریافت تصاویر گالری، همان تصویر را نشان می‌دهیم.
      images: (apiPlan.images ?? []).map((image) => image.imageUrl),
      date: formatPersianDate(apiPlan.startTime),
      location: apiPlan.location,
      remaining: `${toPersianDigits(remaining)} نفر باقی‌مانده`,
      summaryItems: [
        {
          id: "location",
          icon: "location" as const,
          label: "موقعیت تور",
          value: apiPlan.location,
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
          value: `${toPersianDigits(apiPlan.capacity)} نفر`,
        },
      ],
    };
  }, [data?.items, PlanId]);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

 

  return <PlanDetails plan={Plan!} />;
}
