
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import { toEnglishNumber } from "./toEnglishNumber";

export function toGregorianDate(value: string): string {
  const normalizedValue = toEnglishNumber(value.trim());

  if (!/^\d{4}\/\d{2}\/\d{2}$/.test(normalizedValue)) {
    throw new Error("فرمت تاریخ باید YYYY/MM/DD باشد.");
  }

  const [year, month, day] = normalizedValue.split("/").map(Number);

  const date = new DateObject({
    year,
    month,
    day,
    calendar: persian,
    format: "YYYY/MM/DD",
  });

  if (
    date.year !== year ||
    date.month.number !== month ||
    date.day !== day
  ) {
    throw new Error("تاریخ شمسی معتبر نیست.");
  }

  return date.convert(gregorian).format("YYYY-MM-DD");
}
