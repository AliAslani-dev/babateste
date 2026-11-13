import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { toJalaali } from "jalaali-js";

dayjs.extend(jalaliday);

function toPersianDigits(value: string | number): string {
  return value
    .toString()
    .replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
}

export function toJalaliDate(date: string | null | undefined): string {
  if (!date) return "";

  const parsedDate = dayjs(date);

  if (!parsedDate.isValid()) return "";

  return toPersianDigits(parsedDate.calendar("jalali").format("YYYY/MM/DD"));
}

export function formatPersianDate(dateString: string): string {
  if (!dateString) return "";

  const [datePart] = dateString.split(" ");
  const [year, month, day] = datePart.split("-").map(Number);

  if (!year || !month || !day) return "";

  const persianDate = toJalaali(year, month, day);

  const months = [
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

  return `${toPersianDigits(persianDate.jd)} ${months[persianDate.jm - 1]}`;
}

export function formatPersianDateTime(
  dateString: string | null | undefined,
): string {
  if (!dateString) return "";

  const date = dayjs(dateString);

  if (!date.isValid()) return "";

  const jalaliDate = date.calendar("jalali");

  const day = toPersianDigits(jalaliDate.format("D"));
const months = [
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

const month = months[Number(jalaliDate.format("M")) - 1];
  const weekDays = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه",
  ];

  const weekDay = weekDays[date.day()];

  const hour = date.hour();
  const period = hour < 12 ? "صبح" : "بعدازظهر";

  const formattedHour = toPersianDigits(String(hour % 12 || 12));

  return `${day} ${month}، ${weekDay}، ساعت ${formattedHour} ${period}`;
}
