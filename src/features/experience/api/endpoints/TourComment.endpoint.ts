export const TOUR_COMMENT_ENDPOINTS = {
  comment: (tourId: number | string) => `/events/${tourId}/comment`,
  comments: (tourId: number | string) => `/events/${tourId}/comments`,
} as const;
