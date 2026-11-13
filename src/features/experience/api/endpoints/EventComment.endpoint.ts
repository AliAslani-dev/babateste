export const EVENT_COMMENT_ENDPOINTS = {
  comment: (eventId: number | string) => `/events/${eventId}/comment`,
  comments: (eventId: number | string) => `/events/${eventId}/comments`,
} as const;