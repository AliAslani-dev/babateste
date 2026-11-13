/**
 * Model = شکل نهایی که کامپوننت‌ها استفاده می‌کنن (camelCase)
 */

export interface MedicationItem {
  id: number;
  title: string;
  amount: string;
  shouldTakeAtMorning: boolean;
  shouldTakeAtNoon: boolean;
  shouldTakeAtNight: boolean;
  startDate: string;
  endDate: string | null;
  hasReminder: boolean;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Pagination {
  currentPage: number;
  perPage: number;
  total: number;
  lastPage: number;
  hasMorePages: boolean;
}

export interface MedicationsPage {
  items: MedicationItem[];
  pagination: Pagination;
}
