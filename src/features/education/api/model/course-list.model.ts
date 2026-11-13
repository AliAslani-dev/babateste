import type { Teacher } from "./teacher.model";

export interface CourseListItem {
  id: number;
  title: string;
  descriptions: string;
  shortDescription: string;
  totalHours: number;
  totalLearners: number;
  tableOfContents: string;
  price: number;
  priceText: string;
  teacherId: number;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  teacher: Teacher;
  is_fave:boolean;
}