
export function getRemainingLabel(startTime: string): string {
  const startDate = new Date(startTime.replace(" ", "T"));

  if (Number.isNaN(startDate.getTime())) {
    return "تاریخ نامشخص";
  }

  const remainingMs = startDate.getTime() - Date.now();

  if (remainingMs <= 0) {
    return "شروع شده";
  }

  const remainingDays = Math.ceil(
    remainingMs / (1000 * 60 * 60 * 24),
  );

  return `${remainingDays.toLocaleString("fa-IR")} روز دیگر`;
}
