// src/features/home/components/HomePage.tsx
"use client";
import { Box, CircularProgress, Alert, Button } from "@mui/material";
import { useEffect } from "react";
import { triggerNotification } from "@/features/notifications";
import { ChevronLeft } from "@mui/icons-material";
import { HeroSection } from "@/components/ui/common/HeroSection";
import { CardService } from "@/components/ui/CardService";
import HamdamCard from "@/components/ui/common/cards/hamdam";
import MicrophoneIcon from "@/components/ui/icons/cards/hamdam/Microphone";
import { ProgressCard } from "@/components/ui/common/cards/activity-card/components/progress-card";
import { HorizontalTourCard } from "@/components/ui/common/cards/TourCards/CompactHorizontalCard";
import { homePageRootSx, servicesGridSx } from "../styles";
import { Slider } from "@/components/ui/slider";
import { TitleBar } from "@/components/ui/common/TitleBar";
import { useTours } from "@/features/experience/api";
import { formatPersianDateTime } from "@/lib/utils/toJalaliDate";
import { useRouter } from "next/navigation";
const heroSlides = [
  {
    imageSrc: "/images/herosection/hero1.png",
    imageAlt: "بازنشستگی",
    title: "بازنشستگی",
    subtitle: "آغاز فرصت‌های تازه است.",
  },
  {
    imageSrc: "/images/herosection/hero2.png",
    imageAlt: "چطور امتیاز بیشتر بگیرم؟",
    title: "چطور امتیاز بیشتر بگیرم؟",
    subtitle:
      "با شرکت در دوره و رویدادها و تکمیل فعالیت‌ها امتیاز خود را بیشتر کنید.",
  },
];

const serviceCards = [
  {
    imageSrc: "/images/cards/card-service/education.png",
    imageAlt: "آموزش و کارآفرینی",
    title: "آموزش و کارآفرینی",
    subtitle: "مهارت‌های جدید و فرصت‌های تازه",
    path: "./education",
  },
  {
    imageSrc: "/images/cards/card-service/trip.png",
    imageAlt: "سفر و تجربه",
    title: "سفر و تجربه",
    subtitle: "تجربه‌های خوب کنار همدیگر",
    path: "./experience",
  },
  {
    imageSrc: "/images/cards/card-service/conversation.png",
    imageAlt: "منتورینگ",
    title: "منتورینگ",
    subtitle: "از تجربه تا آینده‌ای بهتر",
    path: "./mentoring",
  },
  {
    imageSrc: "/images/cards/card-service/health.png",
    imageAlt: "سلامت و سبک زندگی",
    title: "سلامت و سبک زندگی",
    subtitle: "زندگی سالم‌تر و شادتر",
    path: "./health",
  },
];

export default function HomePage() {
  const router = useRouter();
  const { data: tours, isLoading, isError, refetch } = useTours();

  useEffect(() => {
    let fired = false;
    const containers = Array.from(
      document.querySelectorAll<HTMLElement>(".app-scroll"),
    );

    const handleScroll = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      if (target.scrollTop <= 0 || fired) return;

      fired = true;
      triggerNotification("nova_tours_notification");
    };

    containers.forEach((container) =>
      container.addEventListener("scroll", handleScroll, { passive: true }),
    );

    return () =>
      containers.forEach((container) =>
        container.removeEventListener("scroll", handleScroll),
      );
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !tours) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={() => refetch()}>
              تلاش مجدد
            </Button>
          }
        >
          خطا در دریافت تورها
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={homePageRootSx}>
      {/* ── Hero Slider ───────────────────────────────────── */}
      <HeroSection slides={heroSlides} timer={4000} />

      {/* ── Services Section ──────────────────────────────── */}
      <Box>
        <TitleBar
          title="خدمات شریف نوا"
          actionLabel="مشاهده خدمات "
          icon={<ChevronLeft />}
          onActionClick={() => {
            router.push("./services");
          }}
          // onActionClick={handleViewAll}
        />

        <Box sx={servicesGridSx}>
          {serviceCards.map((card) => (
            <CardService
              key={card.title}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              subtitle={card.subtitle}
              onClick={() => {
                router.push(`${card.path}`);
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ── This Week Section ────────────────────────────────── */}
      <Box>
        <TitleBar
          title="این هفته در شریف نوا"
          // onActionClick={handleViewAll}
        />
        <Slider
          items={tours.items}
          slidesPerView={1}
          showArrows={false}
          showPagination
          paginationVariant="small"
          paginationPosition="inside"
          renderSlide={(tour) => (
            <HorizontalTourCard
              key={tour.id}
              image={tour.thumbnail}
              title={tour.title}
              subtitle={`${tour.location}، ${formatPersianDateTime(tour.startTime)}`}
              onClick={() =>
                router.push(`/experience/tours-list/tour-detail/${tour.id}`)
              }
            />
          )}
        />
      </Box>

      {/* ── Hamdam Section ───────────────────────────────────── */}
      <HamdamCard
        image="/images/cards/hamdam/hamdam.svg"
        imageAlt="همدم"
        title="همدم، همراه هر لحظه‌ات"
        subtitle="با همدم در هر لحظه کنارت هستیم"
        buttonText="شروع گفتگو"
        buttonIcon={<MicrophoneIcon />}
        onButtonClick={() => console.log("همدم")}
      />

      {/* ── Activity Section ─────────────────────────────────── */}
      {/* <Box>
        <TitleBar
          title="ادامه فعالیت های من"
          // onActionClick={handleViewAll}
        />
        <ProgressCard
          image="/images/cards/activity-card/progress-card.png"
          title="مدیریت زمان و سرمایه"
          percentage={60}
          buttonLabel="ادامه یادگیری"
          onButtonClick={() => console.log("ادامه یادگیری")}
        />
      </Box> */}
    </Box>
  );
}
