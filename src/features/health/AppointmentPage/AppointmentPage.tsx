
"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { toJalaali } from "jalaali-js";

import { HorizontalTourCard } from "@/components/ui/common/cards/TourCards/CompactHorizontalCard";
import { useDoctorDetail, useDoctorFreeTimes } from "@/features/health/api";
import { toPersianDigits } from "@/lib/utils/toPersianNumber";
import { appointmentStyles } from "./AppointmentPage.styles";
import type { FreeTime } from "@/features/health/api";

const DAY_NAMES = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
];

const MONTH_NAMES = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

type AppointmentDay = {
  iso: string;
  dayName: string;
  dateLabel: string;
};

function getLocalIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getDayName(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const weekday = new Date(year, month - 1, day).getDay();

  return DAY_NAMES[weekday];
}

function getJalaliDateLabel(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const jalali = toJalaali(year, month, day);

  return `${toPersianDigits(jalali.jd)} ${MONTH_NAMES[jalali.jm - 1]}`;
}

export default function AppointmentPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedDate = searchParams.get("date");
  const selectedTime = searchParams.get("time");

  const { data: doctor, isLoading: docLoading } = useDoctorDetail(
    params.id,
  );

  const { data: freeTimes, isLoading: freeLoading } = useDoctorFreeTimes(
    params.id,
  );

  if (docLoading || freeLoading) {
    return (
      <Box sx={appointmentStyles.loading}>
        <CircularProgress />
      </Box>
    );
  }

  if (!doctor || !freeTimes) {
    return (
      <Alert severity="error" sx={appointmentStyles.error}>
        خطا در دریافت اطلاعات
      </Alert>
    );
  }

  const today = getLocalIsoDate(new Date());

  // تمام اسلات‌های تاریخ امروز به بعد را نگه می‌داریم؛
  // اسلات‌های غیرقابل رزرو هم برای نمایش در فهرست باقی می‌مانند.
  const futureSlots = freeTimes.filter(
    (slot: FreeTime) => slot.date >= today,
  );

  // استخراج روزهای یکتا از تاریخ واقعی اسلات‌ها
  const days: AppointmentDay[] = Array.from(
    new Set(futureSlots.map((slot: FreeTime) => slot.date)),
  )
    .sort()
    .map((iso) => ({
      iso,
      dayName: getDayName(iso),
      dateLabel: getJalaliDateLabel(iso),
    }));

  const activeDate =
    selectedDate && days.some((day) => day.iso === selectedDate)
      ? selectedDate
      : days[0]?.iso;

  // تمام اسلات‌های همان روز را نمایش می‌دهیم، چه آزاد باشند چه نباشند.
  const daySlots = activeDate
    ? futureSlots
        .filter((slot: FreeTime) => slot.date === activeDate)
        .sort((a: FreeTime, b: FreeTime) =>
          a.startTime.localeCompare(b.startTime),
        )
    : [];

  // جلوگیری از نمایش اسلات‌های تکراری با ساعت شروع یکسان
  const uniqueSlots = daySlots.filter(
    (slot: FreeTime, index: number, array: FreeTime[]) =>
      array.findIndex(
        (item) => item.startTime === slot.startTime,
      ) === index,
  );

  const morning = uniqueSlots.filter(
    (slot: FreeTime) => Number(slot.startTime.split(":")[0]) < 12,
  );

  const afternoon = uniqueSlots.filter((slot: FreeTime) => {
    const hour = Number(slot.startTime.split(":")[0]);
    return hour >= 12 && hour < 17;
  });

  const evening = uniqueSlots.filter(
    (slot: FreeTime) => Number(slot.startTime.split(":")[0]) >= 17,
  );

  const selectedSlotIsAvailable = uniqueSlots.some(
    (slot: FreeTime) =>
      slot.startTime === selectedTime && slot.isAvailable,
  );

  const handleDateSelect = (iso: string) => {
    const url = new URL(window.location.href);

    url.searchParams.set("date", iso);
    url.searchParams.delete("time");

    router.replace(`${url.pathname}${url.search}`, { scroll: false });
  };

  const handleTimeSelect = (slot: FreeTime) => {
    if (!slot.isAvailable || !activeDate) return;

    const url = new URL(window.location.href);

    url.searchParams.set("date", activeDate);
    url.searchParams.set("time", slot.startTime);

    router.replace(`${url.pathname}${url.search}`, { scroll: false });
  };

  const renderTimeGrid = (items: FreeTime[]) => (
    <Box sx={appointmentStyles.timeGrid}>
      {items.map((slot) => {
        const isSelected =
          selectedTime === slot.startTime && slot.isAvailable;

        return (
          <Box
            key={`${slot.date}-${slot.startTime}`}
            component="button"
            type="button"
            disabled={!slot.isAvailable}
            aria-disabled={!slot.isAvailable}
            onClick={() => handleTimeSelect(slot)}
            sx={{
              ...appointmentStyles.timeItem(isSelected),
              ...(!slot.isAvailable && {
                opacity: 0.45,
                cursor: "not-allowed",
                pointerEvents: "none",
              }),
            }}
          >
            <Typography variant="mediumSm">
              {toPersianDigits(slot.startTime.slice(0, 5))}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );

  return (
    <Box sx={appointmentStyles.page}>
      <HorizontalTourCard
        key={params.id}
        image={
          doctor.profileImage ||
          "/images/health/doctors/doctor-woman.png"
        }
        title={doctor.name}
        subtitle={doctor.specialityText}
      />

      <Box sx={appointmentStyles.daysContainer}>
        {days.map((day) => (
          <Box
            key={day.iso}
            onClick={() => handleDateSelect(day.iso)}
            sx={appointmentStyles.dayItem(activeDate === day.iso)}
          >
            <Typography variant="mediumSm">{day.dayName}</Typography>
            <Typography variant="mediumSm">{day.dateLabel}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={appointmentStyles.timeSection}>
        {morning.length > 0 && (
          <Box>
            <Typography
              variant="boldBase"
              sx={appointmentStyles.timeSectionTitle}
            >
              صبح
            </Typography>
            {renderTimeGrid(morning)}
          </Box>
        )}

        {afternoon.length > 0 && (
          <Box>
            <Typography
              variant="boldBase"
              sx={appointmentStyles.timeSectionTitle}
            >
              ظهر و بعدازظهر
            </Typography>
            {renderTimeGrid(afternoon)}
          </Box>
        )}

        {evening.length > 0 && (
          <Box>
            <Typography
              variant="boldBase"
              sx={appointmentStyles.timeSectionTitle}
            >
              شب
            </Typography>
            {renderTimeGrid(evening)}
          </Box>
        )}

        {uniqueSlots.length === 0 && (
          <Typography sx={appointmentStyles.emptyTimes}>
            نوبتی برای این روز موجود نیست
          </Typography>
        )}
      </Box>

      <Button
        fullWidth
        variant="contained"
        disabled={!activeDate || !selectedSlotIsAvailable}
        onClick={() => {
          if (!activeDate || !selectedSlotIsAvailable || !selectedTime) {
            return;
          }

          const query = new URLSearchParams({
            date: activeDate,
            time: selectedTime,
          });

          router.push(
            `/health/doctors-list/doctor-detail/${params.id}/appointment/confirm?${query.toString()}`,
          );
        }}
        sx={appointmentStyles.continueButton}
      >
        ادامه
      </Button>
    </Box>
  );
}
