import type { FreeTime } from "./free-time.model";

export interface DoctorDetail {
  name: string;
  score: number;
  specialityText: string;
  descriptions: string | null;
  location: string;
  profileImage: string | null;
  createdAt: string;
  updatedAt: string;
  specialityTag: string;
  freeTimes: FreeTime[];
}