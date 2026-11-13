import { z } from "zod";

export const appSettingsSchema = z.object({
  courseUpdates: z.boolean(),
  mentoringReminders: z.boolean(),
  promotions: z.boolean(),
  emailNotifications: z.boolean(),
  smsNotifications: z.boolean(),
});

export type AppSettingsFormValues = z.infer<typeof appSettingsSchema>;