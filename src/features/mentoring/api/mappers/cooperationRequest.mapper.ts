import { createMapper, mapList } from "@/lib/api";
import type {
  CooperationRequestResponseDTO,
  ExpertiseTagDTO,
} from "../dto/cooperationRequest.dto";
import type {
  CooperationRequest,
  ExpertiseTag,
} from "../model/cooperationRequest.model";

export const toCooperationRequest = createMapper<
  CooperationRequestResponseDTO,
  CooperationRequest
>((dto) => ({
  id: dto.id,
  userId: dto.user_id,
  jobTitle: dto.job_title,
  city: dto.city,
  workExperienceInYears: dto.work_experience_in_years,
  areaOfExpertise: dto.area_of_expertise,
  descriptions: dto.descriptions,
  cooperationFormat: dto.cooperation_format,
  daysOfWeek: dto.days_of_week,
  status: dto.status,
  createdAt: dto.created_at,
  updatedAt: dto.updated_at,
}));

export const toExpertiseTag = createMapper<ExpertiseTagDTO, ExpertiseTag>(
  (dto) => ({ title: dto.title }),
);

export const toExpertiseTags = (dtos: ExpertiseTagDTO[]): ExpertiseTag[] =>
  mapList(toExpertiseTag, dtos);
