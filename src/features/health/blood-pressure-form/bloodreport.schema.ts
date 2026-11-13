import { z } from "zod";

export const bloodReportSchema = z.object({
  measuredAt: z
    .string()
    .min(1, "تاریخ و ساعت الزامی است"),

  systolic: z
    .number({ invalid_type_error: "عدد معتبر وارد کنید" })
    .int("عدد باید صحیح باشد")
    .min(60, "فشارخون سیستول نمی‌تواند کمتر از ۶۰ باشد")
    .max(300, "فشارخون سیستول نمی‌تواند بیشتر از ۳۰۰ باشد")
    .nullable(),

  diastolic: z
    .number({ invalid_type_error: "عدد معتبر وارد کنید" })
    .int("عدد باید صحیح باشد")
    .min(40, "فشارخون دیاستول نمی‌تواند کمتر از ۴۰ باشد")
    .max(200, "فشارخون دیاستول نمی‌تواند بیشتر از ۲۰۰ باشد")
    .nullable(),

  heartRate: z
    .number({ invalid_type_error: "عدد معتبر وارد کنید" })
    .int("عدد باید صحیح باشد")
    .min(30, "ضربان قلب نمی‌تواند کمتر از ۳۰ باشد")
    .max(250, "ضربان قلب نمی‌تواند بیشتر از ۲۵۰ باشد")
    .nullable(),

  note: z
    .string()
    .max(500, "یادداشت نمی‌تواند بیشتر از ۵۰۰ حرف باشد")
    .optional(),
});

export type BloodReportFormValues = z.infer<typeof bloodReportSchema>;
