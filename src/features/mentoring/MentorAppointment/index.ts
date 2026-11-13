// ─── Step 1: Appointment ───
export { default as AppointmentPage } from "./appointment/components/AppointmentPage";
export { default as AppointmentForm } from "./appointment/components/AppointmentForm";
export { default as MentorMiniCard } from "./appointment/components/MentorMiniCard";
export type { AppointmentFormValues } from "./appointment/schema/appointment.schema";
export type { MentorAppointmentInfo } from "./appointment/types/appointment.types";

// ─── Step 2: Review & Pay ───
export { default as ReviewPage } from "./review/components/ReviewPage";
export type { AppointmentReviewData } from "./review/types/review.types";
export type { ReviewFormValues } from "./review/schema/review.schema";

// ─── Step 3: Success ───
export { default as SuccessPage } from "./success/SuccessPage";
export type { SuccessPageProps } from "./success/SuccessPage";
