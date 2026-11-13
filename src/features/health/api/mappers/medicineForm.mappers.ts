import { createMapper } from "@/lib/api";
import type { AddMedicineResponseDTO } from "../dto";
import { Medicine } from "../model";

export const toMedicine = createMapper<AddMedicineResponseDTO, Medicine>(
  (dto) => ({
    id: dto.id,
    medicineName: dto.title,
    amount: dto.amount,
    shouldTakeAtMorning: dto.should_take_at_morning,
    shouldTakeAtNoon: dto.should_take_at_noon,
    shouldTakeAtNight: dto.should_take_at_night,
    startDate: dto.start_date,
    endDate: dto.end_date,
    reminder: dto.reminder,
    notes: dto.descriptions,
    createdAt: dto.created_at,
  }),
);
