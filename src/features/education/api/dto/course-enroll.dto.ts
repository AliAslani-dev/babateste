export interface CourseEnrollDTO {
  id: number;
  title: string;
  descriptions: string;
  total_hours: number;
  total_learners: number;
  table_of_contents: string;
  short_descriptions: string;
  price_in_irt: string;
  price_text: string;
  teacher_id: number;
  created_at: string;
  updated_at: string;
  image_url: string | null;
}

export interface CourseEnrollResponseDTO {
  data: CourseEnrollDTO;
}