import { createMapper } from "@/lib/api";
import type { CourseDetailDTO } from "../dto";
import type { CourseDetail } from "../model";
import { toTeacher } from "./teacher.mapper";

export const toCourseDetail = createMapper<CourseDetailDTO, CourseDetail>(
  (dto) => ({
    id: dto.id,
    title: dto.title,
    descriptions: dto.descriptions,
    shortDescription: dto.short_descriptions,
    totalHours: dto.total_hours,
    totalLearners: dto.total_learners,
    tableOfContents: dto.table_of_contents,
    price: Number(dto.price_in_irt),
    priceText: dto.price_text,
    imageUrl:  dto.image_url,
    teacher: toTeacher(dto.teacher),
    subjectTags: dto.subject_tags,
    episodes: dto.episodes,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
  }),
);