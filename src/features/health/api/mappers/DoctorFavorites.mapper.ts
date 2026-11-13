import type { DoctorFavoriteDto } from "../dto";
import type { DoctorFavorite } from "../model";

export const mapDoctorFavorite = (dto: DoctorFavoriteDto): DoctorFavorite => ({
  id: dto.id,

  // نام و تصویر واقعی دکتر از API
  name: dto.name,
  profilePictureUrl: dto.profile_picture_url,
  specialityText: dto.speciality_text,

  // سازگاری با کامپوننت‌های فعلی
  title: dto.name,
  thumbnail: dto.profile_picture_url,

  startTime: dto.start_time,
  endTime: dto.end_time,
  location: dto.location,
  capacity: dto.capacity,
  usedCapacity: dto.used_capacity,
  status: dto.status,
  priceInIrt: dto.price_in_irt,
  priceText: dto.price_text,
  DoctorType: dto.Doctor_type,
  descriptions: dto.descriptions,
  plans: dto.plans,
  services: dto.services,
  filterTags: dto.filter_tags,

  images: (dto.images ?? []).map((image) => ({
    id: image.id,
    DoctorId: image.Doctor_id,
    imageUrl: image.image_url,
  })),

  isFave: dto.is_fave,
});

export const mapDoctorFavorites = (
  items: DoctorFavoriteDto[],
): DoctorFavorite[] => items.map(mapDoctorFavorite);
