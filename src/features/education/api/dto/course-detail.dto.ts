import type { TeacherDTO } from "./teacher.dto";

export interface CourseDetailDTO {
  id: number;
  title: string;
  descriptions: string;
  short_descriptions: string;
  total_hours: number;
  total_learners: number;
  table_of_contents: string;
  price_in_irt: string;
  price_text: string;
  image_url: string | null;
  teacher: TeacherDTO;
  subject_tags: string[];
  episodes: unknown[];
  created_at: string;
  updated_at: string;
}

export interface CourseDetailResponseDTO {
  course: CourseDetailDTO;
}