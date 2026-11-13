import { createMapper, mapList } from "@/lib/api";
import type {
  MedicationItemDTO,
  GetMedicationsResponseDTO,
  GetMedicationsMetaDTO,
} from "../dto";
import type {
  MedicationItem,
  MedicationsPage,
} from "../model";

export const toMedicationItem = createMapper<MedicationItemDTO, MedicationItem>(
  (dto) => ({
    id: dto.id,
    title: dto.title,
    amount: dto.amount,
    shouldTakeAtMorning: dto.should_take_at_morning,
    shouldTakeAtNoon: dto.should_take_at_noon,
    shouldTakeAtNight: dto.should_take_at_night,
    startDate: dto.start_date,
    endDate: dto.end_date,
    hasReminder: dto.has_reminder,
    notes: dto.descriptions,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
  }),
);

export const toMedicationsPage = (
  data: GetMedicationsResponseDTO,
  meta: GetMedicationsMetaDTO,
): MedicationsPage => ({
  items: mapList(toMedicationItem, data.items),
  pagination: {
    currentPage: meta.pagination.current_page,
    perPage: meta.pagination.per_page,
    total: meta.pagination.total,
    lastPage: meta.pagination.last_page,
    hasMorePages: meta.pagination.has_more_pages,
  },
});
