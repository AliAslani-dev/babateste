import { createMapper } from "@/lib/api";
import type { DoctorDetailDTO } from "../dto";
import type { DoctorDetail } from "../model";
import { toFreeTime } from "./index";

export const toDoctorDetail = createMapper<DoctorDetailDTO, DoctorDetail>(
  (dto) => ({
    name: dto.name,
    score: Number(dto.score),
    specialityText: dto.speciality_text,
    descriptions: dto.descriptions,
    location: dto.location,
    profileImage: dto.profile_picture_url ,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    specialityTag: dto.speciality_tag,
    freeTimes: dto.free_times.map((ft) => toFreeTime(ft)),
  }),
);