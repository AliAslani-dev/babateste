export const REGISTRATION_ENDPOINTS = {
  signup: (eventId: number) => `/events/${eventId}/signup`,
} as const;