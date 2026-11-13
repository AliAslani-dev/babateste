/**
 * Model = شکل نهایی که کامپوننت‌ها استفاده می‌کنن (camelCase)
 */

export interface CooperationRequest {
  id: number;
  userId: number;
  jobTitle: string;
  city: string;
  workExperienceInYears: number;
  areaOfExpertise: number;
  descriptions: string;
  cooperationFormat: string;
  daysOfWeek: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface ExpertiseTag {
  title: string;
}
