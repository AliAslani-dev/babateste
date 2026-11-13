import type { TeacherDTO } from "./teacher.dto";

export interface CourseListItemDTO {
  id: number;
  title: string;
  descriptions: string;
  short_descriptions: string;
  total_hours: number;
  total_learners: number;
  table_of_contents: string;
  price_in_irt: string;
  price_text: string;
  teacher_id: number;
  image_url: string | null;
  created_at: string;
  updated_at: string;
  teacher: TeacherDTO;
  is_fave:boolean;
}

export interface CoursesListResponseDTO {
  items: CourseListItemDTO[];
}