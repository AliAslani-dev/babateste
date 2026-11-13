import { z } from "zod";

export const messageSchema = z.object({
  message: z
    .string()
    .trim()
    .max(500, "پیام خیلی طولانیه"),
});

export type MessageFormValues = z.infer<typeof messageSchema>;