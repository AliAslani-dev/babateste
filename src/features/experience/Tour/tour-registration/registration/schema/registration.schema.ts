import { z } from "zod";

const passengerSchema = z.object({
  fullName: z.string().trim().min(1, "نام و نام خانوادگی را وارد کنید"),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
});

export const registrationSchema = z.object({
  passengers: z
    .array(passengerSchema)
    .min(1, "حداقل یک مسافر باید وارد شود"),
  addCompanion: z.boolean(),
  travelInsurance100: z.boolean(),
  travelInsurance80: z.boolean(),
});

export type RegistrationSchemaValues = z.infer<
  typeof registrationSchema
>;