export type SessionType = "online" | "in_person";

export interface AppointmentDTO {
  id: number;
  doctor_id: number;
  start_time: string;
  end_time: string;
  descriptions: string | null;
  session_type: SessionType;
}

export interface CreateAppointmentResponseDTO {
  id: number;
  doctor_id: number;
  start_time: string;
  end_time: string;
  descriptions: string | null;
  session_type: SessionType;
}