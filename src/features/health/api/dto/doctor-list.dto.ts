export interface DoctorListItemDTO {
  id: number;
  name: string;
  score: string;
  speciality_text: string;
  location: string;
  profile_picture_url: string | null;
  is_fave:boolean;
}

export interface DoctorsListResponseDTO {
  items: DoctorListItemDTO[];
}