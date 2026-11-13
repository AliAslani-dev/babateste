import type { Teacher } from "./teacher.model";

export interface CourseEnroll {
  id: number;
  title: string;
  descriptions: string;
  totalHours: number;
  totalLearners: number;
  tableOfContents: string;
  shortDescription: string;
  price: number;
  priceText: string;
  teacherId: number;
  createdAt: string;
  updatedAt: string;
  imageUrl: string | null;
}