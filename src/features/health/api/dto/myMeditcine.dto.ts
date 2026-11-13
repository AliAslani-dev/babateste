/**
 * DTO = Data Transfer Object
 * شکل خام پاسخ سرور (snake_case)
 * هیچ‌وقت مستقیم تو UI استفاده نشه!
 */

export interface MedicationItemDTO {
  id: number;
  title: string;
  amount: string;
  should_take_at_morning: boolean;
  should_take_at_noon: boolean;
  should_take_at_night: boolean;
  start_date: string;
  end_date: string | null;
  has_reminder: boolean;
  descriptions: string | null;
  created_at: string;
  updated_at: string;
}

export interface PaginationDTO {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  has_more_pages: boolean;
}

export interface GetMedicationsResponseDTO {
  items: MedicationItemDTO[];
}

export interface GetMedicationsMetaDTO {
  pagination: PaginationDTO;
}
