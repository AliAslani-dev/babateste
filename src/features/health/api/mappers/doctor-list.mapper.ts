import { createMapper } from "@/lib/api";
import type {
  DoctorListItemDTO,
  DoctorsListResponseDTO,
} from "../dto";
import type { DoctorListItem } from "../model";

export const toDoctorListItem = createMapper<
  DoctorListItemDTO,
  DoctorListItem
>((dto) => ({
  id: dto.id,
  name: dto.name,
  score: Number(dto.score),
  specialityText: dto.speciality_text,
  location: dto.location,
  profileImage: dto.profile_picture_url,
  is_fave:dto.is_fave
}));

export const toDoctorsList = createMapper<
  DoctorsListResponseDTO,
  DoctorListItem[]
>((dto) => dto.items.map((item) => toDoctorListItem(item)));