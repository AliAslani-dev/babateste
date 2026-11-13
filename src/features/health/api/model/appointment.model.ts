export type SessionType = "online" | "in_person";

export interface Appointment {
  id: number;
  doctorId: number;
  startTime: string;
  endTime: string;
  descriptions: string | null;
  sessionType: SessionType;
}