import type { FreeTime } from "@/features/health/api";

export interface AppointmentPickerProps {
  freeTimes: FreeTime[];
  selectedDate: string | null;   // "2026-10-28"
  selectedTime: string | null;   // "08:00:00"
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onContinue: () => void;
}