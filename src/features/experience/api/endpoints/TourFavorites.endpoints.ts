
export const Tour_FAVORITE_ENDPOINTS = {
  list: "/events/favs",
  add: (id: number | string) => `/events/favs/${id}`,
  remove: (id: number | string) => `/events/favs/${id}/delete`,
} as const;
