"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

import { formatPersianDate } from "@/lib/utils/toJalaliDate";
import { toPersianDigits } from "@/lib/utils/toPersianNumber";

import { useAllEvents } from "@/features/experience/api";
import EventDetails from "@/features/experience/events/EventDetail/components/EventDetails/EventDetails";
import { useNavbarDetail } from "@/components/layout/navbar-up/components/NavbarDetail/NavbarDetailContext";
import { EventFavoriteService } from "@/features/experience/api";

const DEFAULT_EVENT_IMAGE = "/images/cards/eventeCard/featured.png";

export default function EventDetailPage() {
  const params = useParams<{ id: string }>();
  const eventId = Number(params.id);

  const { data, isLoading, isError, refetch } = useAllEvents();
  const { setNavbarDetail } = useNavbarDetail();

  const apiEvent = data?.items.find((item) => item.id === eventId);
  const currentEventId = apiEvent?.id;

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(Boolean(apiEvent?.is_fave));
  }, [apiEvent?.is_fave, eventId]);

  const handleSave = useCallback(async () => {
    if (
      typeof currentEventId !== "number" ||
      !Number.isInteger(currentEventId) ||
      currentEventId <= 0
    ) {
      return;
    }

    const previousValue = isSaved;
    const nextValue = !previousValue;

    // تغییر فوری وضعیت آیکون
    setIsSaved(nextValue);

    try {
      if (nextValue) {
        await EventFavoriteService.addFavorite({
          eventId: String(currentEventId),
        });
      } else {
        await EventFavoriteService.removeFavorite({
          eventId: String(currentEventId),
        });
      }
    } catch (error) {
      // در صورت خطای API، وضعیت قبلی برگردد
      setIsSaved(previousValue);
      console.error("خطا در تغییر علاقه‌مندی رویداد:", error);
    }
  }, [currentEventId, isSaved]);

  useEffect(() => {
    setNavbarDetail({
      isSaved,
      onSave: handleSave,
    });
  }, [isSaved, handleSave, setNavbarDetail]);

  useEffect(() => {
    return () => {
      setNavbarDetail({
        isSaved: false,
        onSave: undefined,
      });
    };
  }, [setNavbarDetail]);

  const event = useMemo(() => {
    if (!Number.isInteger(eventId) || eventId <= 0) {
      return undefined;
    }

    const item = data?.items.find((item) => item.id === eventId);

    if (!item) return undefined;

    const remaining = Math.max(0, item.capacity - item.usedCapacity);

    const startDate = new Date(item.startTime.replace(" ", "T"));
    const endDate = new Date(item.endTime.replace(" ", "T"));

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
      id: item.id,
      title: item.title,
      heroImage: item.thumbnail || DEFAULT_EVENT_IMAGE,
      detail: item.descriptions || "توضیحاتی برای این رخداد ثبت نشده است.",
      images: (item.images ?? []).map((image) => image.imageUrl),
      date: formatPersianDate(item.startTime),
      location: item.location,
      remaining: `${toPersianDigits(remaining)} نفر باقی‌مانده`,
      summaryItems: [
        {
          id: "location",
          icon: "location" as const,
          label: "موقعیت رخداد",
          value: item.location,
        },
        {
          id: "duration",
          icon: "duration" as const,
          label: "مدت برنامه",
          value: `${toPersianDigits(durationDays)} روز`,
        },
        {
          id: "start-time",
          icon: "time" as const,
          label: "ساعت شروع رویداد",
          value: toPersianDigits(
            new Date(item.startTime.replace(" ", "T")).toLocaleTimeString(
              "fa-IR",
              {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              },
            ),
          ),
        },
        {
          id: "capacity",
          icon: "capacity" as const,
          label: "ظرفیت کل",
          value: `${toPersianDigits(item.capacity)} نفر`,
        },
      ],
    };
  }, [data?.items, eventId]);

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
        <Typography variant="regularXs" color="error" sx={{ mb: 2 }}>
          دریافت اطلاعات رخداد با خطا مواجه شد.
        </Typography>

        <Button onClick={() => void refetch()}>تلاش مجدد</Button>
      </Box>
    );
  }

  if (!event) {
    return (
      <Box sx={{ textAlign: "center", p: 4 }}>
        <Typography variant="regularXs">اطلاعات این رخداد پیدا نشد.</Typography>
      </Box>
    );
  }

  return <EventDetails Event={event} />;
}
