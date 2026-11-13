// src/features/mentoring/components/cooperation-request/steps/step2/expertiseStep.schema.ts
import { z } from "zod";

export const expertiseStepSchema = z.object({
  yearsOfExperience: z
    .number({ required_error: "میزان سابقه کاری الزامی است", invalid_type_error: "میزان سابقه کاری باید عدد باشد" })
    .int("سابقه کاری باید عدد صحیح باشد")
    .min(0, "سابقه کاری نمی‌تواند منفی باشد")
    .max(60, "سابقه کاری نمی‌تواند بیشتر از ۶۰ سال باشد"),

  expertise: z
    .string()
    .min(1, "انتخاب حوزه تخصص الزامی است"),

  skills: z
    .array(z.string().min(1))
    .min(1, "حداقل یک مهارت وارد کنید"),

  bio: z
    .string()
    .min(20, "توضیح تجربه باید حداقل ۲۰ حرف باشد")
    .max(1500, "توضیح تجربه نمی‌تواند بیشتر از ۱۵۰۰ حرف باشد"),
});

export type ExpertiseStepFormValues = z.infer<typeof expertiseStepSchema>;
