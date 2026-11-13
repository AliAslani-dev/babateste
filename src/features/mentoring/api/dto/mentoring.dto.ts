/**
 * DTO = Data Transfer Object
 * شکل خام پاسخ سرور (snake_case)
 * هیچ‌وقت مستقیم تو UI استفاده نشه!
 */

export interface MentorUserDTO {
  id: number;
  name: string;
  birth_date: string;
  profile_picture?: string;
}

export interface MentorDTO {
  id: number;
  user_id: number;
  experience_since: string;
  score: string;
  area_of_expertise: string;
  descriptions: string;
  mentoring_type: string;
  city: string;
  sessions_time: string;
  cv_url: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
  user: MentorUserDTO;
}

export interface PaginationMetaMentoringDTO {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  has_more_pages: boolean;
}

export interface MentorsPaginateResponseDTO {
  items: MentorDTO[];
}

export interface MentorExperienceDTO {
  id: number;
  title: string;
  descriptions: string;
  start_at: string;
  end_at: string | null;
}

export interface MentorEducationDTO {
  id: number;
  title: string;
  location: string;
  end_at: string;
}

export interface MentorDetailInnerDTO {
  id: number;
  name: string;
  score: number;
  user_info?: {
    name: string;
    phone_number: string;
    profile_picture?: string | null;
  } | null;
  experience_since: string;
  area_of_expertise: string;
  descriptions: string;
  mentoring_type: string;
  city: string;
  sessions_time: string;
  cv_url: string;
  expertise_tags: string[];
  experiences: MentorExperienceDTO[];
  educations: MentorEducationDTO[];
}

export interface MentorDetailResponseDTO {
  mentor: MentorDetailInnerDTO;
}

/* ===================== SESSION (رزرو جلسه مشاوره) ===================== */

/** بدنه‌ی درخواست ثبت جلسه جدید (فراخوانی سرور) */
export interface CreateSessionRequestDTO {
  /** تاریخ جلسه به فرمت Y-m-d و بعداً مساوی امروز */
  date: string;
  /** شناسه/کلید تگ تخصص فعالِ این منتور (می‌تواند عدد یا رشته باشد) */
  topic: string;
  /** نوع جلسه: آنلاین یا حضوری */
  session_type: "online" | "hozoori";
  /** توضیحات اختیاری */
  descriptions?: string | null;
}

/** شکل خامِ پاسخ سرور برای یک جلسه (snake_case) */
export interface SessionDTO {
  id: number;
  mentor_id: number;
  date: string;
  topic: number;
  session_type: string;
  descriptions: string | null;
  status: string;
}

/** پاسخ استاندارد سرور (wrapper) برای ایجاد جلسه */
export interface CreateSessionResponseDTO {
  success: boolean;
  status: number;
  message: string;
  data: SessionDTO;
}