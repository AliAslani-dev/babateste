import { createMapper } from "@/lib/api";
import type { CourseListItemDTO, CoursesListResponseDTO } from "../dto";
import type { CourseListItem } from "../model";
import { toTeacher } from "./teacher.mapper";

export const toCourseListItem = createMapper<CourseListItemDTO, CourseListItem>(
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
    teacherId: dto.teacher_id,
    imageUrl: dto.image_url,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    teacher: toTeacher(dto.teacher),
    is_fave:dto.is_fave
  }),
);

export const toCoursesList = createMapper<
  CoursesListResponseDTO,
  CourseListItem[]
>((dto) => dto.items.map((item) => toCourseListItem(item)));
