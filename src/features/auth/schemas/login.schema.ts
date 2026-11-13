// این فایل رو نگه دار اگه جایی import می‌شه
// ولی LoginForm جدید از phoneSchema و otpSchema استفاده می‌کنه
import { z } from "zod";

export const loginSchema = z.object({
  phone: z
    .string()
    .min(1, "شماره موبایل الزامی است")
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
  otp_code: z.string().optional(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;