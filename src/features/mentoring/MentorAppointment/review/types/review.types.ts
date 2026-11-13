import type { MentorAppointmentInfo } from "../../appointment/types/appointment.types";
import type { AppointmentFormValues } from "../../appointment/schema/appointment.schema";

export interface AppointmentReviewData {
  mentor: MentorAppointmentInfo;
  appointment: AppointmentFormValues;
}

export type PaymentMethod = "online" | "wallet";

export const APPOINTMENT_STORAGE_KEY = "nova-mentor-appointment";
