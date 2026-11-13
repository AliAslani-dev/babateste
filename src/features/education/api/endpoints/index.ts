export const COURSES_ENDPOINTS = {
  list: "/courses",
  myCourses: "/courses/my",
  detail: (courseId: number | string) => `/courses/${courseId}/detail`,
  enroll: (courseId: number | string) => `/courses/${courseId}/enroll`,
  episodes: (courseId: number | string) => `/courses/${courseId}/episodes`,
  comment: (courseId: number | string) => `/courses/${courseId}/comment`,
  comments: (courseId: number | string) => `/courses/${courseId}/comments`,
} as const;