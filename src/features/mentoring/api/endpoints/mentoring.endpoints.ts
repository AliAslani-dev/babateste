export const MENTORS_ENDPOINTS = {
  list: "/mentors",
  detail: (mentorId: number) => `/mentors/${mentorId}/detail`,
  /** POST /mentors/{mentor_id}/session/new — رزرو جلسه مشاوره جدید */
  sessionNew: (mentorId: number) => `/mentors/${mentorId}/session/new`,
} as const;
