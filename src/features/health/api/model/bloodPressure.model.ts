/**
 * Model = شکل نهایی که کامپوننت‌ها استفاده می‌کنن (camelCase)
 */

export interface BloodPressureRecord {
  timeOfMeasurement: string;
  systolicPressure: number;
  diastolicPressure: number;
  heartRate: number;
  descriptions: string | null;
}