import type { Teacher } from "./teacher.model";

export interface CourseDetail {
  id: number;
  title: string;
  descriptions: string;
  shortDescription: string;
  totalHours: number;
  totalLearners: number;
  tableOfContents: string;
  price: number;
  priceText: string;
  imageUrl: string | null;
  teacher: Teacher;
  subjectTags: string[];
  episodes: unknown[];
  createdAt: string;
  updatedAt: string;
}