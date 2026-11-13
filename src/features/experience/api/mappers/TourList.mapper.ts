import { TourDTO, TourPaginationDTO } from "../dto/TourList.dto";
import { Tour, TourPagination } from "../model/TourList.model";

export function toTour(dto: TourDTO): Tour {
  return {
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
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    is_fave:dto.is_fave,
    images: (dto.images ?? []).map((image) => ({
      id: image.id,
      eventId: image.event_id,
      imageUrl: image.image_url,
    })),
  };
}

export function toTourPagination(dto: TourPaginationDTO): TourPagination {
  return {
    currentPage: dto.current_page,
    perPage: dto.per_page,
    total: dto.total,
    lastPage: dto.last_page,
    hasMorePages: dto.has_more_pages,
  };
}
