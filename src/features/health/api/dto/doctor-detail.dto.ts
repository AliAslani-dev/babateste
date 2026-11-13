import type { FreeTimeDTO } from "./free-time.dto";

export interface DoctorDetailDTO {
  name: string;
  score: string;
  speciality_text: string;
  descriptions: string | null;
  location: string;
  profile_picture_url: string | null;
  created_at: string;
  updated_at: string;
  speciality_tag: string;
  free_times: FreeTimeDTO[];
}

export interface DoctorDetailResponseDTO {
  doctor: DoctorDetailDTO;
}