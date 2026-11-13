"use client";

import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import { NavbarDetail } from "@/components/layout/navbar-up/components/NavbarDetail";
import {
  SESSION_FEE,
  CONSULTATION_TYPE_LABEL,
  formatPrice,
} from "@/features/mentoring/MentorAppointment/review/constants/review.constants";
import type { AppointmentFormValues } from "../appointment/schema/appointment.schema";
import { APPOINTMENT_STORAGE_KEY } from "../review/types/review.types";
import type { AppointmentReviewData } from "../review/types/review.types";
import {
  pageRootSx,
  illustrationSx,
  titleSx,
  subtitleSx,
  stepperSx,
  stepItemSx,
  stepLineSx,
  stepCircleSx,
  stepDotSx,
  stepLabelSx,
  mentorCardSx,
  mentorImageSx,
  mentorInfoSx,
  detailCardSx,
  detailRowSx,
  totalRowSx,
  submitWrapperSx,
  backButtonSx,
} from "./Success.styles";
import { useMentorDetail } from "@/features/mentoring/api";

// TODO: replace with your own images
const SUCCESS_ILLUSTRATION_SRC = "/images/mentor-section/mentoring-cooperation.png";
const MENTOR_IMAGE_SRC = "/images/mentors/MentorProfile/mentor-profile.jpg";

const STEPS = [
  { label: "در انتظار بررسی", completed: true },
  { label: "تایید منتور", completed: false },
  { label: "برگزاری جلسه", completed: false },
  { label: "پایان جلسه", completed: false },
];

const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const toPersianDigits = (n: number) => String(n).padStart(2, "0").replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)]);

export interface SuccessPageProps {
  mentorId: number;
}

export default function SuccessPage({ mentorId }: SuccessPageProps) {
  const router = useRouter();
  const { data: mentor, isLoading: mentorLoading } = useMentorDetail(mentorId);
  const [appointmentData, setAppointmentData] = useState<AppointmentReviewData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(APPOINTMENT_STORAGE_KEY);
      if (raw) setAppointmentData(JSON.parse(raw) as AppointmentReviewData);
    } catch {
      // corrupted storage — will show empty values
    } finally {
      setIsLoading(false);
    }
    // Clean up storage after reading so it doesn't persist
    sessionStorage.removeItem(APPOINTMENT_STORAGE_KEY);
  }, []);

  if (isLoading || mentorLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  const appointment = appointmentData?.appointment ?? ({} as AppointmentFormValues);
  const mentorName = mentor?.name || appointmentData?.mentor.name || "منتور";
  const mentorSubtitle = mentor?.areaOfExpertise || appointmentData?.mentor.subtitle || "";

  // Jalali date as DD/MM/YYYY with Persian digits: ۱۳/۰۷/۱۴۰۵
  const jalaliDate = (() => {
    if (!appointment.date) return "—";
    const en = appointment.date.replace(/[۰-۹]/g, (d) => String(PERSIAN_DIGITS.indexOf(d)));
    const parts = en.split("/");
    const ordered =
      parts.length === 3 && parts[0].length === 4
        ? [parts[2], parts[1], parts[0]] // YYYY/MM/DD -> DD/MM/YYYY
        : parts;
    const padded = ordered.map((p) => (p.length < 2 ? p.padStart(2, "0") : p));
    return padded.join("/").replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)]);
  })();

  // Time range like "۱۰:۰۰ الی ۱۱:۰۰" with Persian digits
  const timeRange = (() => {
    if (!appointment.time) return "—";
    const enTime = appointment.time.replace(/[۰-۹]/g, (d) => String(PERSIAN_DIGITS.indexOf(d)));
    const [startHour, startMinute] = enTime.split(":").map(Number);
    const endTotalMinutes = startHour * 60 + startMinute + 60;
    const endHour = Math.floor(endTotalMinutes / 60);
    const endMinute = endTotalMinutes % 60;
    return `${toPersianDigits(startHour)}:${toPersianDigits(startMinute)} الی ${toPersianDigits(endHour)}:${toPersianDigits(endMinute)}`;
  })();

  const handleBackToHome = () => {
    router.push("/home");
  };

  return (
    <AppShell navbar={<NavbarDetail title="درخواست مشاوره" hideActions />} contentPadding={0}>
      <Box sx={pageRootSx}>
        {/* Illustration */}
        <Box sx={illustrationSx}>
          <img src={SUCCESS_ILLUSTRATION_SRC} alt="" />
        </Box>

        {/* Title */}
        <Typography variant="bold2xl" sx={titleSx}>
          درخواست شما ثبت شد
        </Typography>

        {/* Subtitle */}
        <Typography variant="regularSm" sx={subtitleSx}>
          درخواست مشاوره شما برای آقای {mentorName} ثبت شد. پس از بررسی و تایید توسط منتور، از طریق پیامک و اعلان در
          اپلیکیشن به شما اطلاع داده خواهد شد.
        </Typography>

        {/* Stepper */}
        <Box sx={stepperSx}>
          {STEPS.map((step, index) => {
            const isLast = index === STEPS.length - 1;
            return (
              <Box key={index} sx={stepItemSx}>
                {!isLast && <Box sx={stepLineSx(step.completed)} />}
                <Box sx={stepCircleSx(step.completed)}>
                  {step.completed ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <Box sx={stepDotSx} />
                  )}
                </Box>
                <Typography variant="lightXs" sx={stepLabelSx}>
                  {step.label}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Mentor card */}
        <Box sx={mentorCardSx}>
          <Box component="img" src={MENTOR_IMAGE_SRC} alt={mentorName} sx={mentorImageSx} />
          <Box sx={mentorInfoSx}>
            <Typography variant="mediumSm" sx={{ fontWeight: 700 }}>
              {mentorName}
            </Typography>
            <Typography variant="lightXs" color="text.secondary">
              {mentorSubtitle}
            </Typography>
          </Box>
        </Box>

        {/* Details */}
        <Box sx={detailCardSx}>
          <Box sx={detailRowSx}>
            <Typography variant="mediumSm">نوع جلسه</Typography>
            <Typography variant="mediumSm" color="text.secondary">
              {CONSULTATION_TYPE_LABEL[appointment.consultationType as keyof typeof CONSULTATION_TYPE_LABEL] ?? appointment.consultationType ?? "—"}
            </Typography>
          </Box>
          <Box sx={detailRowSx}>
            <Typography variant="mediumSm">تاریخ جلسه</Typography>
            <Typography variant="mediumSm" color="text.secondary">
              {jalaliDate}
            </Typography>
          </Box>
          <Box sx={detailRowSx}>
            <Typography variant="mediumSm">ساعت جلسه</Typography>
            <Typography variant="mediumSm" color="text.secondary">
              {timeRange}
            </Typography>
          </Box>
          <Box sx={detailRowSx}>
            <Typography variant="mediumSm">مدت جلسه</Typography>
            <Typography variant="mediumSm" color="text.secondary">۶۰ دقیقه</Typography>
          </Box>
          <Box sx={totalRowSx}>
            <Typography variant="mediumSm">مبلغ پرداخت شده</Typography>
            <Typography variant="mediumSm" color="text.secondary">
              {formatPrice(SESSION_FEE)}
            </Typography>
          </Box>
        </Box>

        {/* Action button */}
        <Box sx={submitWrapperSx}>
          <Box component="button" onClick={handleBackToHome} sx={backButtonSx}>
            بازگشت به صفحه اصلی
          </Box>
        </Box>
      </Box>
    </AppShell>
  );
}
