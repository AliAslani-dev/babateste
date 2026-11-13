export interface DoctorListItem {
  id: number;
  name: string;
  score: number;
  specialityText: string;
  location: string;
  profileImage: string | null;
  is_fave:boolean;
}