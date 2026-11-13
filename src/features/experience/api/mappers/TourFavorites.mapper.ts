
import type { TourFavoriteDto } from "../dto/TourFavorites.dto";
import type { TourFavorite } from "../model/TourFavorites.model";

export const mapTourFavorite = (
  dto: TourFavoriteDto,
): TourFavorite => ({
  id: dto.id,
  title: dto.title,
  thumbnail: dto.thumbnail,
  startTime: dto.start_time,
  endTime: dto.end_time,
  location: dto.location,
  capacity: dto.capacity,
  usedCapacity: dto.used_capacity,
  status: dto.status,
  priceInIrt: dto.price_in_irt,
  priceText: dto.price_text,
  tourType: dto.tour_type,
  descriptions: dto.descriptions,
  plans: dto.plans,
  services: dto.services,
  filterTags: dto.filter_tags,
  images: (dto.images ?? []).map((image) => ({
    id: image.id,
    tourId: image.tour_id,
    imageUrl: image.image_url,
  })),
  isFave: dto.is_fave,
});

export const mapTourFavorites = (
  items: TourFavoriteDto[],
): TourFavorite[] => items.map(mapTourFavorite);
