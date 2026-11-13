"use client";
import { ChevronLeft } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { HeroSection } from "@/components/ui/common/HeroSection";
import CardCategory from "@/components/ui/common/cards/card-category";
import { Slider } from "@/components/ui/slider";
import { EventCard } from "@/components/ui/common/cards/EventCard";

import {
  ExperienceHamdamComponentStyles,
  ExperienceDatyTimeStyles,
  ExperienceLoadingCircular,
  ExperienceInoTextWarapper,
} from "./styles";
import {
  EXPERIENCE_HERO_SLIDES,
  EXPERIENCE_CATEGORIES,
  EXPERIENCE_EVENTS,
  EXPERIENCE_HERO_TIMER,
  EXPERIENCE_TOUR,
} from "./data/experience.constants";
import { VerticalTourCard } from "@/components/ui/common/cards/TourCards/RegularCard";
import HamdamCard from "@/components/ui/common/cards/hamdam";
import { MicrophoneIcon } from "@/components/ui/icons";
import { DayTimeCard } from "@/components/ui/common/cards/activity-card";
import { TitleBar } from "@/components/ui/common/TitleBar";
import { formatPersianDate } from "@/lib/utils/toJalaliDate";
import { useTours } from "./api";
import { useMyEvents, useAllEvents } from "@/features/experience/api";
import { getRemainingLabel } from "@/lib/utils";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useState } from "react";
import { AlertModal } from "@/components/ui/common";

const DEFAULT_TOUR_IMAGE = "/images/cards/ToureCard/featured.png";
const CAFE_NOVA_CATEGORY_TITLE = "کافه نوا";
export default function ExperiencePage() {
  const router = useRouter();
  const [isCafeNovaAlertOpen, setIsCafeNovaAlertOpen] = useState(false);
  //events
  // events
  const {
    data: allEventsData,
    isLoading: isEventsLoading,
    isError: isEventsError,
    refetch: refetchEvents,
  } = useAllEvents();

  const events = allEventsData?.items ?? [];

  const handleViewAllEvent = () => {
    router.push("/experience/events-list");
  };

  const handleEventClick = (eventId: number) => {
    router.push(`/experience/events-list/event-detail/${eventId}`);
  };

  //plan
  const {
    data: myEventsData,
    isLoading: isMyEventsLoading,
    isError: isMyEventsError,
  } = useMyEvents();

  const myEvents = myEventsData?.items ?? [];

  const handlePlanClick = (planId: number) => {
    router.push(`/experience/my-plans/plan-detail/${planId}`);
  };

  //tour
  const {
    data: toursData,
    isLoading: isToursLoading,
    isError: isToursError,
  } = useTours();

  const tours = toursData?.items ?? [];
  const handleViewAllTour = () => {
    router.push("/experience/tours-list");
  };
  const handleTourClick = (tourId: number) => {
    router.push(`/experience/tours-list/tour-detail/${tourId}`);
  };
  return (
    <Box>
      {/* ── Hero Slider ───────────────────────────────────── */}
      <HeroSection
        slides={EXPERIENCE_HERO_SLIDES}
        timer={EXPERIENCE_HERO_TIMER}
      />
      {/* ── Category Cards (افقی، هم‌عرض) ─────────────────── */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 2,
          padding: 2,
          paddingX: { xs: 2, md: 6 },
          width: "100%",
        }}
      >
        {EXPERIENCE_CATEGORIES.map((category) => (
          <Box
            key={category.title}
            role={category.href ? "link" : undefined}
            tabIndex={category.href ? 0 : undefined}
            onClick={() => {
              if (category.href) return router.push(category.href);
              if (category.title === CAFE_NOVA_CATEGORY_TITLE) {
                setIsCafeNovaAlertOpen(true);
              }
            }}
            onKeyDown={(e) => {
              if (!category.href && category.title !== CAFE_NOVA_CATEGORY_TITLE)
                return;
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (category.href) router.push(category.href);
                else setIsCafeNovaAlertOpen(true);
              }
            }}
            sx={{
              flex: 1,
              minWidth: 0,
              cursor:
                category.href || category.title === CAFE_NOVA_CATEGORY_TITLE
                  ? "pointer"
                  : undefined,
            }}
          >
            <CardCategory title={category.title} image={category.image} />
          </Box>
        ))}
      </Box>
      {/* Events Section */}
      <Box>
        <TitleBar
          title="رویدادهای پیش رو"
          actionLabel="مشاهده همه"
          icon={<ChevronLeft />}
          onActionClick={handleViewAllEvent}
        />

        {isEventsLoading ? (
          <Box sx={ExperienceLoadingCircular}>
            <CircularProgress />
          </Box>
        ) : isEventsError ? (
          <Box sx={ExperienceInoTextWarapper}>
            <Typography variant="regularSm" color="error">
              دریافت اطلاعات رویدادها با خطا مواجه شد.
            </Typography>

            <Button onClick={() => void refetchEvents()}>تلاش مجدد</Button>
          </Box>
        ) : events.length === 0 ? (
          <Box sx={ExperienceInoTextWarapper}>
            <Typography variant="regularSm">
              در حال حاضر رویدادی برای نمایش وجود ندارد.
            </Typography>
          </Box>
        ) : (
          <Slider
            items={events}
            slidesPerView={2}
            slidesToScroll={1}
            showPagination
            paginationVariant="small"
            paginationPosition="outside"
            swipeDirection="rtl"
            autoPlay
            autoPlayInterval={4000}
            loop
            renderSlide={(event) => (
              <Box
                key={event.id}
                role="link"
                tabIndex={0}
                onClick={() => handleEventClick(event.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleEventClick(event.id);
                  }
                }}
                sx={{
                  width: "fit-content",
                  flexShrink: 0,
                  cursor: "pointer",
                }}
              >
                <EventCard
                  date={formatPersianDate(event.startTime)}
                  imageSrc={event.thumbnail || DEFAULT_TOUR_IMAGE}
                  location={event.location}
                  imageAlt={event.title}
                  title={event.title}
                  onActionClick={() => handleEventClick(event.id)}
                />
              </Box>
            )}
          />
        )}
      </Box>
      {/* TourSEction */}
      <Box>
        <TitleBar
          title="سفرهای پیش رو"
          actionLabel="مشاهده همه"
          icon={<ChevronLeft />}
          onActionClick={handleViewAllTour}
        />

        {isToursLoading ? (
          <Box sx={ExperienceLoadingCircular}>
            <CircularProgress />
          </Box>
        ) : isToursError ? (
          <Box sx={ExperienceInoTextWarapper}>
            <Typography variant="regularSm" color="error">
              دریافت اطلاعات تورها با خطا مواجه شد.
            </Typography>
          </Box>
        ) : tours.length === 0 ? (
          <Box sx={ExperienceInoTextWarapper}>
            <Typography variant="regularSm">
              در حال حاضر توری برای نمایش وجود ندارد.
            </Typography>
          </Box>
        ) : (
          <Slider
            items={tours}
            slidesPerView={tours.length === 1 ? 1 : 2}
            showPagination
            paginationVariant="small"
            paginationPosition="outside"
            renderSlide={(tour) => (
              <Box
                key={tour.id}
                onClick={() => handleTourClick(tour.id)}
                role="link"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleTourClick(tour.id);
                  }
                }}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <VerticalTourCard
                  image={tour.thumbnail || DEFAULT_TOUR_IMAGE}
                  title={tour.title}
                  date={formatPersianDate(tour.startTime)}
                  remaining={Math.max(0, tour.capacity - tour.usedCapacity)}
                  price={tour.priceText}
                />
              </Box>
            )}
          />
        )}
      </Box>
      {/* haamdam */}
      <Box sx={ExperienceHamdamComponentStyles}>
        <HamdamCard
          image="/images/cards/hamdam/hamdam.svg"
          title="همدم"
          subtitle="دستیار هوشمند شما در شریف نوا"
          buttonText="صحبت با همدم"
          buttonIcon={<MicrophoneIcon />}
          buttonHref="/hamdam"
        />
      </Box>
      {/* my plan */}

      <Box>
        <TitleBar
          title="برنامه‌های من"
          actionLabel="مشاهده همه"
          icon={<ChevronLeft />}
          onActionClick={() => router.push("/experience/my-plans")}
        />

        {isMyEventsLoading ? (
          <Box sx={ExperienceLoadingCircular}>
            <CircularProgress />
          </Box>
        ) : isMyEventsError ? (
          <Box sx={ExperienceInoTextWarapper}>
            <Typography variant="regularSm" color="error">
              دریافت برنامه‌های من با خطا مواجه شد.
            </Typography>
          </Box>
        ) : myEvents.length === 0 ? (
          <Box sx={ExperienceInoTextWarapper}>
            <Typography variant="regularSm">
              هنوز در هیچ برنامه‌ای ثبت‌نام نکرده‌اید.
            </Typography>
          </Box>
        ) : (
          <Box sx={ExperienceDatyTimeStyles}>
            {myEvents.slice(0, 3).map((event) => (
              <Box
                key={event.id}
                onClick={() => handlePlanClick(event.id)}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handlePlanClick(event.id);
                  }
                }}
                sx={{ cursor: "pointer" }}
              >
                <DayTimeCard
                  image={event.thumbnail || DEFAULT_TOUR_IMAGE}
                  title={event.title}
                  subtitle={formatPersianDate(event.startTime)}
                  buttonLabel={getRemainingLabel(event.startTime)}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <AlertModal
        open={isCafeNovaAlertOpen}
        onClose={() => setIsCafeNovaAlertOpen(false)}
        icon={
          <Image
            src="/images/notifications/calendar.svg"
            alt=""
            width={28}
            height={28}
          />
        }
        title="هنوز رویدادی ایجاد نشده است"
        description="نوایی عزیز هنوز رویداد کافه نوا ایجاد نشده است"
        confirmButton={{
          label: "آماده شد خبرم کن",
          onClick: () => setIsCafeNovaAlertOpen(false),
        }}
        cancelButton={{
          label: "انصراف",
          onClick: () => setIsCafeNovaAlertOpen(false),
        }}
      />
    </Box>
  );
}
