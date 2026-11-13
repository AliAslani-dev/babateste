"use client";

import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import type { DoctorDetail, FreeTime } from "@/features/health/api";
import type { AppointmentPickerProps } from "./AppointmentPicker.types";

import {
  AppointmentPickerBox,
  AppointmentTitleRowStyles,
  AppointmentTitleStyles,
  AppointmentBackButtonStyles,
  DoctorCardBoxStyles,
  DoctorCardImageWrapperStyles,
  DoctorCardInfoStyles,
  DoctorCardNameStyles,
  DoctorCardSpecialityStyles,
  DaysRowStyles,
  DayChipStyles,
  TimeSectionTitleStyles,
  TimeGridStyles,
  TimeChipStyles,
  ContinueButtonStyles,
} from "./AppointmentPicker.styles";

interface AppointmentPickerFullProps extends AppointmentPickerProps {
  doctor: DoctorDetail;
  onBack?: () => void;
}

const toPersianDigits = (value: string | number): string =>
  String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

const DAY_NAMES = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
];

/**
 * از day_of_week (0=یکشنبه ... 6=شنبه) تاریخ‌های آینده‌ی این هفته رو می‌سازه.
 * فرض: امروز = شنبه ۵ آبان.
 */

function buildUpcomingDays(freeTimes: FreeTime[]): {
  iso: string;
  dayOfWeek: number;
  label: string;
  subLabel: string;
}[] {
  const today = new Date();

  const days: {
    iso: string;
    dayOfWeek: number;
    label: string;
    subLabel: string;
  }[] = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    const jsDay = d.getDay();

    const hasFree = freeTimes.some((ft) => ft.dayOfWeek === jsDay);

    if (!hasFree) continue;

    const iso = [
      d.getFullYear(),
      String(d.getMonth() + 1).padStart(2, "0"),
      String(d.getDate()).padStart(2, "0"),
    ].join("-");

    const dayName = DAY_NAMES[jsDay];

    const monthName = [
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
    ][d.getMonth()];

    days.push({
      iso,
      dayOfWeek: jsDay,
      label: dayName,
      subLabel: `${toPersianDigits(d.getDate())} ${monthName}`,
    });
  }

  return days;
}


function getTimesForDay(
  freeTimes: FreeTime[],
  dayOfWeek: number,
): string[] {
  const slots: string[] = [];

  freeTimes
    .filter((ft) => ft.dayOfWeek === dayOfWeek)
    .forEach((ft) => {
      const [startH, startM] = ft.startTime.split(":").map(Number);
      const [endH, endM] = ft.endTime.split(":").map(Number);

      let h = startH;
      let m = startM;

      while (h < endH || (h === endH && m < endM)) {
        slots.push(
          `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:00`,
        );

        m += 30;

        if (m >= 60) {
          m = 0;
          h += 1;
        }
      }
    });

  return [...new Set(slots)].sort();
}


function groupTimes(times: string[]) {
  const morning: string[] = [];
  const afternoon: string[] = [];
  const evening: string[] = [];

  times.forEach((t) => {
    const h = Number(t.split(":")[0]);
    if (h < 12) morning.push(t);
    else if (h < 17) afternoon.push(t);
    else evening.push(t);
  });

  return { morning, afternoon, evening };
}

export default function AppointmentPicker({
  doctor,
  freeTimes,
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
  onContinue,
  onBack,
}: AppointmentPickerFullProps) {
  const days = buildUpcomingDays(freeTimes);
  const activeDay = days.find((d) => d.iso === selectedDate) ?? days[0];
  const times = activeDay ? getTimesForDay(freeTimes, activeDay.dayOfWeek) : [];
  const { morning, afternoon, evening } = groupTimes(times);

  const renderTimeGrid = (items: string[]) => (
    <Box sx={TimeGridStyles}>
      {items.map((t) => (
        <Box
          key={t}
          onClick={() => onTimeChange(t)}
          sx={TimeChipStyles(selectedTime === t)}
        >
          <Typography variant="mediumBase">
            {toPersianDigits(t.slice(0, 5))}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box sx={AppointmentPickerBox}>
      {/* عنوان + دکمه بازگشت */}
      <Box sx={AppointmentTitleRowStyles}>
        <Typography variant="boldXl" sx={AppointmentTitleStyles}>
          انتخاب نوبت
        </Typography>
        <Box
          component="button"
          type="button"
          onClick={onBack}
          sx={AppointmentBackButtonStyles}
        >
          <ArrowForwardIcon />
        </Box>
      </Box>

      {/* کارت پزشک */}
      <Box sx={DoctorCardBoxStyles}>
        <Box sx={DoctorCardImageWrapperStyles}>
          <Image
            src={
              doctor.profileImage ?? "/images/health/doctors/doctor-woman.png"
            }
            alt={doctor.name}
            fill
            sizes="64px"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box sx={DoctorCardInfoStyles}>
          <Typography variant="boldBase" sx={DoctorCardNameStyles}>
            {doctor.name}
          </Typography>
          <Typography variant="mediumSm" sx={DoctorCardSpecialityStyles}>
            {doctor.specialityText}
          </Typography>
        </Box>
      </Box>

      {/* روزها */}
      <Box sx={DaysRowStyles}>
        {days.map((d) => (
          <Box
            key={d.iso}
            onClick={() => {
              onDateChange(d.iso);
              onTimeChange("");
            }}
            sx={DayChipStyles(selectedDate === d.iso)}
          >
            <Typography variant="mediumSm">{d.label}</Typography>
            <Typography variant="mediumSm">{d.subLabel}</Typography>
          </Box>
        ))}
      </Box>

      {/* صبح */}
      {morning.length > 0 && (
        <>
          <Typography variant="boldBase" sx={TimeSectionTitleStyles}>
            صبح
          </Typography>
          {renderTimeGrid(morning)}
        </>
      )}

      {/* ظهر */}
      {afternoon.length > 0 && (
        <>
          <Typography variant="boldBase" sx={TimeSectionTitleStyles}>
            ظهر
          </Typography>
          {renderTimeGrid(afternoon)}
        </>
      )}

      {/* شب */}
      {evening.length > 0 && (
        <>
          <Typography variant="boldBase" sx={TimeSectionTitleStyles}>
            شب
          </Typography>
          {renderTimeGrid(evening)}
        </>
      )}

      {/* دکمه ادامه */}
      <Button
        fullWidth
        onClick={onContinue}
        disabled={!selectedDate || !selectedTime}
        sx={ContinueButtonStyles}
      >
        ادامه
      </Button>
    </Box>
  );
}
