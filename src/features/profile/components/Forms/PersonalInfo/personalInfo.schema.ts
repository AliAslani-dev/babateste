import { z } from "zod";
import { zIranianMobile, isMelliCode } from "zod-ir";

export const personalInfoSchema = z.object({
  fullName: z
    .string()
    .min(3, "نام و نام خانوادگی باید حداقل ۳ حرف باشد")
    .max(100, "نام و نام خانوادگی نمی‌تواند بیشتر از ۱۰۰ حرف باشد"),

  nationalCode: z
    .string()
    .min(1, "کد ملی الزامی است")
    .refine((val) => isMelliCode(val), {
      message: "کد ملی وارد شده معتبر نیست",
    }),

  phoneNumber: zIranianMobile({
    strictZero: true,
    message: "شماره موبایل وارد شده معتبر نیست",
  }),

  birthDate: z.string().optional().or(z.literal("")),

  email: z.string().email("ایمیل معتبر نیست").optional().or(z.literal("")),
  isRetired: z.boolean(),
  ledgerNumber: z.string(),
});

export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;
