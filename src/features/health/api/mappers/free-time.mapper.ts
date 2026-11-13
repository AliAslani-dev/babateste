import { createMapper } from "@/lib/api";
import type { FreeTimeDTO } from "../dto";
import type { FreeTime } from "../model";

export const toFreeTime = createMapper<FreeTimeDTO, FreeTime>(
  (dto) => ({
    dayOfWeek: dto.day_of_week,
    date: dto.date,
    startTime: dto.start_time,
    endTime: dto.end_time,
    startAt: dto.start_at,
    isAvailable: dto.is_available,
  }),
);