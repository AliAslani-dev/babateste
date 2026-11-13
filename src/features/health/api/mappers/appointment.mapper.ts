import { createMapper } from "@/lib/api";
import type { CreateAppointmentResponseDTO } from "../dto";
import type { Appointment } from "../model";

export const toAppointment = createMapper<
  CreateAppointmentResponseDTO,
  Appointment
>((dto) => ({
  id: dto.id,
  doctorId: dto.doctor_id,
  startTime: dto.start_time,
  endTime: dto.end_time,
  descriptions: dto.descriptions,
  sessionType: dto.session_type,
}));