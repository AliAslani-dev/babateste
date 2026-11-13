"use client";

import { Box, Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";

import { Slider } from "@/components/ui/slider";
import { TitleBar } from "@/components/ui/common/TitleBar";
import { SportHorizontalCard } from "@/components/ui/common/cards/EventCard/HorizontalEventCard/sport";

// مسیر را با محل واقعی export شدن useAllEvents هماهنگ کن

import { upcomingEventsSectionStyles } from "./UpcomingEventsSection.styles";
import { useAllEvents } from "@/features/experience/api";
import { formatPersianDateTime } from "@/lib/utils/toJalaliDate";
import { useRouter } from "next/navigation";

export default function UpcomingEventsSection() {
  const { data, isLoading, isError } = useAllEvents();
  const router = useRouter();
  // فقط رویدادهایی که برچسب ورزشی دارند
  const sportsEvents =
    data?.items?.filter((event) => event.filterTag === "ورزشی") ?? [];

  return (
    <Box sx={upcomingEventsSectionStyles}>
      <TitleBar
        title="همایش های پیش رو"
        actionLabel="مشاهده همه"
        icon={<ChevronLeft />}
        onActionClick={() => router.push("/experience/events-list?tag=sport")}
      />

      {isLoading ? (
        <Typography sx={{ py: 3, textAlign: "center" }}>
          در حال دریافت همایش‌ها...
        </Typography>
      ) : isError ? (
        <Typography sx={{ py: 3, textAlign: "center" }}>
          دریافت همایش‌ها با خطا مواجه شد.
        </Typography>
      ) : sportsEvents.length === 0 ? (
        <Typography sx={{ py: 3, textAlign: "center" }}>
          همایش ورزشی پیش‌رو وجود ندارد.
        </Typography>
      ) : (
        <Slider
          items={sportsEvents}
          slidesPerView={1}
          showArrows={false}
          showPagination
          paginationVariant="small"
          paginationPosition="inside"
          renderSlide={(event) => (
            <Box
              onClick={() => router.push("/experience/events-list?tag=sport")}
              sx={{ cursor: "pointer" }}
            >
              <SportHorizontalCard
                image={
                  event.thumbnail ||
                  event.images?.[0]?.imageUrl ||
                  "/images/cards/event-card/horizontal-event-card/sport-event.png"
                }
                title={event.title}
                subtitle={event.descriptions || ""}
                date={formatPersianDateTime(event.startTime)}
                time=""
                location={event.location}
              />
            </Box>
          )}
        />
      )}
    </Box>
  );
}
