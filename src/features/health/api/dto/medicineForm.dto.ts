/**
 * DTO = Data Transfer Object
 * شکل خام پاسخ سرور (snake_case)
 * هیچ‌وقت مستقیم تو UI استفاده نشه!
 */

export interface AddMedicineResponseDTO {
  id: number;
  title: string;
  amount: string;
  should_take_at_morning: boolean;
  should_take_at_noon: boolean;
  should_take_at_night: boolean;
  start_date: string;
  end_date: string | null;
  reminder: boolean;
  descriptions: string | null;
  created_at: string;
}
