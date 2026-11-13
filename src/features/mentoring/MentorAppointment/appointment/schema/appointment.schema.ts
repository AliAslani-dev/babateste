import { z } from "zod";

export const appointmentSchema = z.object({
  topic: z.string().min(1, "لطفاً موضوع مشاوره را انتخاب کنید"),
  consultationType: z.enum(["online", "in-person"], {
    errorMap: () => ({ message: "لطفاً نوع مشاوره را انتخاب کنید" }),
  }),
  date: z.string().min(1, "لطفاً تاریخ جلسه را انتخاب کنید"),
  time: z.string().min(1, "لطفاً زمان جلسه را انتخاب کنید"),
  description: z.string().max(1500, "توضیحات نباید بیشتر از ۱۵۰۰ کاراکتر باشد"),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
