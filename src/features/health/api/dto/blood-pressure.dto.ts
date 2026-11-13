/**
 * DTO = Data Transfer Object
 * شکل خام پاسخ سرور (snake_case)
 * هیچ‌وقت مستقیماً تو UI استفاده نشه!
 */

export interface BloodPressureRecordResponseDTO {
  time_of_measurement: string;
  systolic_pressure: number;
  diastolic_pressure: number;
  heart_rate: number;
  descriptions: string | null;
}