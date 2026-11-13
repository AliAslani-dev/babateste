import { z } from "zod";

export const CONSUMPTION_TIME_OPTIONS = [
  { label: "صبح", value: "morning" },
  { label: "ظهر", value: "noon" },
  { label: "شب", value: "night" },
] as const;

export type ConsumptionTimeValue = (typeof CONSUMPTION_TIME_OPTIONS)[number]["value"];

export const medicineSchema = z.object({
  medicineName: z
    .string()
    .min(1, "نام دارو الزامی است")
    .max(100, "نام دارو نمی‌تواند بیشتر از ۱۰۰ حرف باشد"),

  amount: z
    .string()
    .min(1, "مقدار دارو الزامی است")
    .max(50, "مقدار نمی‌تواند بیشتر از ۵۰ حرف باشد"),

  consumptionTime: z.enum(["morning", "noon", "night"], {
    errorMap: () => ({ message: "زمان مصرف الزامی است" }),
  }),

  startDate: z.string().min(1, "تاریخ شروع الزامی است"),

  endDate: z.string().optional(),

  reminder: z.boolean(),

  notes: z
    .string()
    .max(500, "یادداشت نمی‌تواند بیشتر از ۵۰۰ حرف باشد")
    .optional(),
});

export type MedicineFormValues = z.infer<typeof medicineSchema>;
