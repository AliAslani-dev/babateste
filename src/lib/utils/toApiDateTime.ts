import { toGregorianDate } from "./toGregorianDate";
import { toEnglishNumber } from "./toEnglishNumber";

/**
 * تبدیل تاریخ و ساعت از فرم (صورتی/جلالی) به فرمت API Y-m-d H:i{s} (میلادی)
 * ورودی Example: "۱۴۰۴/۰۸/۱۲ ۱۰:۳۰" یا "1404/08/12 10:30"
 * خروجی: "2026-10-18 12:00:00"
 * اگر مقدار خالی باشد، null برمی‌گرداند (سرور زمان جاری را در نظر می‌گیرد)
 */
export function toApiDateTime(value: string | null | undefined): string | null {
  if (!value) return null;

  const normalized = toEnglishNumber(value.trim());

  // جدا کردن بخش تاریخ و ساعت
  const [datePart, timePart] = normalized.split(/\s+/);

  if (!datePart || !/^\d{4}\/\d{2}\/\d{2}$/.test(datePart)) {
    return null;
  }

  const gregorianDate = toGregorianDate(datePart); // "YYYY-MM-DD"

  if (timePart && /^\d{2}:\d{2}$/.test(timePart)) {
    return `${gregorianDate} ${timePart}:00`;
  }

  return `${gregorianDate} 00:00:00`;
}
