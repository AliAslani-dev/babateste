/**
 * Model = شکل نهایی که کامپوننت‌ها استفاده می‌کنن (camelCase)
 */

export interface Medicine {
  id: number;
  medicineName: string;
  amount: string;
  shouldTakeAtMorning: boolean;
  shouldTakeAtNoon: boolean;
  shouldTakeAtNight: boolean;
  startDate: string;
  endDate: string | null;
  reminder: boolean;
  notes: string | null;
  createdAt: string;
}
