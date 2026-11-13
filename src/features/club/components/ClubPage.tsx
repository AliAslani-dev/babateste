"use client";

import { Box, Typography } from "@mui/material";

import { HeroSection } from "@/components/ui/common/HeroSection";
import { RecentActivities } from "@/components/ui/common/cards/recent-activities";
import { TicketCard } from "@/components/ui/common/cards/ticket-card";

import {
  clubPageRootSx,
  clubSectionTitleSx,
  clubTicketsSectionSx,
} from "../styles/Club.styles";

const recentActivityItems = [
  {
    image: "/images/cards/recent-activities/education.svg",
    title: "ثبت نام در دوره ی آموزشی",
    date: "۱۱ مهر ۱۴۰۵",
    score: 90,
    iconBgColor: "#DBEAFE",
  },
  {
    image: "/images/cards/recent-activities/health.svg",
    title: "تکمیل سلامت من",
    date: "۲۲ تیر ۱۴۰۵",
    score: 110,
    iconBgColor: "#FFE4E6",
  },
  {
    image: "/images/cards/recent-activities/calendar.svg",
    title: "حضور در تور شیراز",
    date: "۲۲ تیر ۱۴۰۵",
    score: 65,
    iconBgColor: "#EDE9FE",
  },
  {
    image: "/images/cards/recent-activities/user.svg",
    title: "تکمیل پروفایل",
    date: "۱۰ فروردین ۱۴۰۵",
    score: 120,
    iconBgColor: "#DCFCE7",
  },
];

const ticketCards = [
  {
    imageSrc: "/images/cards/ticket-card/learning.png",
    imageAlt: "دوره کارآفرینی",
    title: "دوره ی کارآفرینی",
    discount: "۵۰۰ هزارتومان تخفیف",
    point: "۲۰۰۰",
  },
  {
    imageSrc: "/images/cards/ticket-card/learning.png",
    imageAlt: "تور کاشان",
    title: "تور کاشان",
    discount: "۱ میلیون تومان تخفیف",
    point: "۵۰۰۰",
  },
  {
    imageSrc: "/images/cards/ticket-card/learning.png",
    imageAlt: "دوره کارآفرینی",
    title: "دوره ی کارآفرینی",
    discount: "۵۰۰ هزارتومان تخفیف",
    point: "۲۰۰۰",
  },
];

export default function ClubPage() {
  return (
    <div className="w-full min-h-screen px-4">
      <div className="w-full max-w-[480px] mx-auto">
        <Box sx={clubPageRootSx}>
          {/* ── Hero Slider ───────────────────────────────── */}
          <HeroSection
            slides={[
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
            ]}
            timer={4000}
          />

          {/* ── Recent Activities ─────────────────────────── */}
          <RecentActivities items={recentActivityItems} viewAllHref="/club" />

          {/* ── Redeemable Prizes ─────────────────────────── */}
          <Box>
            <Typography
              variant="boldLg"
              component="h2"
              sx={clubSectionTitleSx}
              dir="rtl"
            >
              جوایز قابل دریافت
            </Typography>

            <Box sx={clubTicketsSectionSx}>
              {ticketCards.map((ticket, index) => (
                <TicketCard key={index} {...ticket} />
              ))}
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}
