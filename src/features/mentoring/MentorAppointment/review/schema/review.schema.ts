import { z } from "zod";

export const reviewSchema = z.object({
  discountCode: z.string(),
  paymentMethod: z.enum(["online", "wallet"]),
});

export type ReviewFormValues = z.infer<typeof reviewSchema>;
