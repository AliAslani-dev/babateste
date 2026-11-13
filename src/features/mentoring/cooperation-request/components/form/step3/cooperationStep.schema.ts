import { z } from "zod";

export const cooperationStepSchema = z.object({
  cooperationType: z
    .array(z.string())
    .min(1, "انتخاب نوع همکاری الزامی است"),

  availableDays: z
    .array(z.string())
    .min(1, "حداقل یک روز انتخاب کنید"),

  resume: z.any().optional(),
});

export type CooperationStepFormValues = z.infer<typeof cooperationStepSchema>;
