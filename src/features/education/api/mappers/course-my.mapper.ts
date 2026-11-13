import { createMapper } from "@/lib/api";
import type {
  CourseMyItemDTO,
  CourseMyResponseDTO,
} from "../dto";
import type { CourseMyItem } from "../model";

export const toCourseMyItem = createMapper<CourseMyItemDTO, CourseMyItem>(
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

export function toCourseMyList(
  dto: CourseMyResponseDTO,
): CourseMyItem[] {
  return dto.items.map((item) => toCourseMyItem(item));
}