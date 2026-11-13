/**
 * DTO = Data Transfer Object
 * شکل خام پاسخ سرور (snake_case)
 * هیچ‌وقت مستقیم تو UI استفاده نشه!
 */

export interface CooperationRequestResponseDTO {
  id: number;
  user_id: number;
  job_title: string;
  city: string;
  work_experience_in_years: number;
  area_of_expertise: number;
  descriptions: string;
  cooperation_format: string;
  days_of_week: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ExpertiseTagDTO {
  title: string;
}

export interface PaginationMetaDTO {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  has_more_pages: boolean;
}

export interface ExpertiseTagsDataDTO {
  items: ExpertiseTagDTO[];
}

export interface ExpertiseTagsResponseDTO {
  data: ExpertiseTagsDataDTO;
  meta: {
    pagination: PaginationMetaDTO;
  };
}
