import type {
  SignupEventDTO,
  SignupEventImageDTO,
  SignupResponseDTO,
} from "../dto/TourRegistration.dto";

import type {
  SignupEvent,
  SignupEventImage,
  SignupResult,
} from "../model/TourRegistration.model";

export function toSignupEvent(dto: SignupEventDTO): SignupEvent {
  const images: SignupEventImage[] = (dto.images ?? []).map(
    (image: SignupEventImageDTO): SignupEventImage => ({
      id: image.id,
      eventId: image.event_id,
      imageUrl: image.image_url,
      createdAt: image.created_at,
      updatedAt: image.updated_at,
    }),
  );

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
    images,
  };
}

export function toSignupResult(dto: SignupResponseDTO): SignupResult {
  return {
    success: dto.success,
    status: dto.status,
    message: dto.message,
    paymentUrl: dto.payment_url,
  };
}
