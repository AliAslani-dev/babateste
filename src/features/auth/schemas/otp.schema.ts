import { z } from "zod";

export const otpSchema = z.object({
  phone: z
    .string()
    .min(1, "شماره موبایل الزامی است")
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
  otp_code: z
    .string()
    .min(4, "کد تایید باید حداقل ۴ رقم باشد")
    .max(6, "کد تایید حداکثر ۶ رقم است"),
});

export type OtpFormValues = z.infer<typeof otpSchema>;