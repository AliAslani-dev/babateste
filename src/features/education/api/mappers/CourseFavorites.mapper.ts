import type { CourseFavoriteDto } from "../dto/CourseFavorites.dto";
import type { CourseFavorite } from "../model/CourseFavorites.model";

export const mapCourseFavorite = (dto: CourseFavoriteDto): CourseFavorite => ({
  id: dto.id,
  title: dto.title,
  startTime: dto.start_time,
  endTime: dto.end_time,
  location: dto.location,
  capacity: dto.capacity,
  usedCapacity: dto.used_capacity,
  status: dto.status,
  priceInIrt: dto.price_in_irt,
  priceText: dto.price_text,
  CourseType: dto.Course_type,
  descriptions: dto.descriptions,
  plans: dto.plans,
  services: dto.services,
  filterTags: dto.filter_tags,
  thumbnail: dto.image_url||null ,
  images: (dto.images ?? []).map((image) => ({
    id: image.id,
    CourseId: image.Course_id,
    imageUrl: image.image_url,
  })),
  isFave: dto.is_fave,
});

export const mapCourseFavorites = (
  items: CourseFavoriteDto[],
): CourseFavorite[] => items.map(mapCourseFavorite);
