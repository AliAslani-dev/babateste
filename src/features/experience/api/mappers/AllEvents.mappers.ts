import type {
  EventDto,
  EventImageDto,
  GetEventsResponseDto,
} from "../dto/AllEvents.dto";

import type {
  Event,
  EventImage,
  EventsList,
} from "../model/AllEvents.model";

const mapEventImage = (image: EventImageDto): EventImage => ({
  id: image.id,
  eventId: image.event_id,
  imageUrl: image.image_url,
  createdAt: image.created_at,
  updatedAt: image.updated_at,
});

const mapEvent = (event: EventDto): Event => ({
  id: event.id,
  title: event.title,
  thumbnail: event.thumbnail,
  startTime: event.start_time,
  endTime: event.end_time,
  location: event.location,
  capacity: event.capacity,
  usedCapacity: event.used_capacity,
  status: event.status,
  priceInIrt: event.price_in_irt,
  priceText: event.price_text,
  eventType: event.event_type,
  descriptions: event.descriptions,
  plans: event.plans,
  services: event.services,
  createdAt: event.created_at,
  updatedAt: event.updated_at,
  filterTag:event.filter_tags,
  images: event.images.map(mapEventImage),
  is_fave:event.is_fave
});

export const mapEventsResponse = (
  response: GetEventsResponseDto,
): EventsList => ({
  items: response.data.items.map(mapEvent),
});
