import type {
  MyEventDTO,
  MyEventImageDTO,
  MyEventsResponseDTO,
} from "../dto/MyEvents.dto";

import type {
  MyEvent,
  MyEventImage,
  MyEvents,
} from "../model/MyEvents.model";

const toMyEventImage = (dto: MyEventImageDTO): MyEventImage => ({
  id: dto.id,
  eventId: dto.event_id,
  imageUrl: dto.image_url,
  createdAt: dto.created_at,
  updatedAt: dto.updated_at,
});

const toMyEvent = (dto: MyEventDTO): MyEvent => ({
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
  images: dto.images?.map(toMyEventImage) ?? [],
});

export const toMyEvents = (
  dto: MyEventsResponseDTO["data"],
): MyEvents => ({
  items: dto.items.map(toMyEvent),
});