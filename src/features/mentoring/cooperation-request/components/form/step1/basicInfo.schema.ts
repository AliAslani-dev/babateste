// src/features/mentoring/components/cooperation-request/steps/step1/basicInfo.schema.ts
import { z } from "zod";
import { zIranianMobile } from "zod-ir";

export const basicInfoSchema = z.object({
  fullName: z
    .string()
    .min(3, "نام و نام خانوادگی باید حداقل ۳ حرف باشد")
    .max(100, "نام و نام خانوادگی نمی‌تواند بیشتر از ۱۰۰ حرف باشد"),

  phoneNumber: zIranianMobile({
    strictZero: true,
    message: "شماره موبایل وارد شده معتبر نیست",
  }),

  jobTitle: z
    .string()
    .min(2, "عنوان حرفه‌ای باید حداقل ۲ حرف باشد")
    .max(100, "عنوان حرفه‌ای نمی‌تواند بیشتر از ۱۰۰ حرف باشد"),

  city: z
    .string()
    .min(1, "انتخاب شهر الزامی است"),
});

export type BasicInfoFormValues = z.infer<typeof basicInfoSchema>;
