/**
 * Payload =形‌ی بدنه‌ی درخواست که به سرور می‌فرستیم
 */

export interface CreateBloodPressureRecordPayload {
  /** زمان ثبت — پیش‌فرض اکنون (nullabel) */
  time_of_measurement?: string | null;
  /** فشار سیستولی — عدد صحیح بین ۴۰ تا ۳۰۰ */
  systolic_pressure: number;
  /** فشار دیستولی — عدد صحیح بین ۲۰ تا ۲۵۰ */
  diastolic_pressure: number;
  /** ضربان قلب — عدد صحیح بین ۲۰ تا ۲۵۰ */
  heart_rate: number;
  /** توضیحات اختیاری (nullabel) */
  descriptions?: string | null;
}