import { createMapper } from "@/lib/api";
import type { CourseEnrollDTO } from "../dto";
import type { CourseEnroll } from "../model";

export const toCourseEnroll = createMapper<CourseEnrollDTO, CourseEnroll>(
  (dto) => ({
    id: dto.id,
    title: dto.title,
    descriptions: dto.descriptions,
    totalHours: dto.total_hours,
    totalLearners: dto.total_learners,
    tableOfContents: dto.table_of_contents,
    shortDescription: dto.short_descriptions,
    price: Number(dto.price_in_irt),
    priceText: dto.price_text,
    teacherId: dto.teacher_id,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    imageUrl: dto.image_url,
  }),
);