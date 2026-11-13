export interface TeacherDTO {
  id: number;
  fullname: string;
  profile_picture_url: string | null;
  descriptions: string | null;
  created_at?: string;
  updated_at?: string;
}