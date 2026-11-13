import { z } from "zod";

export const phoneSchema = z.object({
  phone: z
    .string()
    .min(1, "شماره موبایل الزامی است")
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
});

export type PhoneFormValues = z.infer<typeof phoneSchema>;