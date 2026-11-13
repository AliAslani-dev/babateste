/**
 * Model = شکل نهایی که کامپوننت‌ها استفاده می‌کنن (camelCase)
 */

export interface Mentor {
  id: number;
  userId: number;
  name: string;
  areaOfExpertise: string;
  descriptions: string;
  score: number;
  experienceYears: number;
  mentoringType: string;
  city: string;
  sessionsTime: string;
  cvUrl: string;
  imageUrl?: string;
}

export interface PaginationMeta {
  currentPage: number;
  perPage: number;
  total: number;
  lastPage: number;
  hasMorePages: boolean;
}

export interface MentorsPage {
  mentors: Mentor[];
  meta: PaginationMeta;
}

export interface MentorExperience {
  id: number;
  title: string;
  descriptions: string;
  startAt: string;
  endAt: string | null;
}

export interface MentorEducation {
  id: number;
  title: string;
  location: string;
  endAt: string;
}

export interface MentorDetail {
  id: number;
  name: string;
  score: number;
  experienceYears: number;
  areaOfExpertise: string;
  descriptions: string;
  mentoringType: string;
  city: string;
  sessionsTime: string;
  cvUrl: string;
  expertiseTags: string[];
  experiences: MentorExperience[];
  educations: MentorEducation[];
  imageUrl?:string;
}

/* ===================== SESSION (رزرو جلسه مشاوره) ===================== */

/** شکل نهایی که کامپوننت‌ها استفاده می‌کنند (camelCase) */
export interface Session {
  id: number;
  mentorId: number;
  date: string;
  topic: number;
  sessionType: "online" | "hozoori";
  descriptions: string | null;
  status: string;
}
