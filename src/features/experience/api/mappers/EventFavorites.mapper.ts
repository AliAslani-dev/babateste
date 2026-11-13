
import type { EventFavoriteDto } from "../dto/EventFavorites.dto";
import type { EventFavorite } from "../model/EventFavorites.model";

export const mapEventFavorite = (
  dto: EventFavoriteDto,
): EventFavorite => ({
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
  eventType: dto.event_type,
  descriptions: dto.descriptions,
  plans: dto.plans,
  services: dto.services,
  filterTags: dto.filter_tags,
  images: (dto.images ?? []).map((image) => ({
    id: image.id,
    eventId: image.event_id,
    imageUrl: image.image_url,
  })),
  isFave: dto.is_fave,
});

export const mapEventFavorites = (
  items: EventFavoriteDto[],
): EventFavorite[] => items.map(mapEventFavorite);
