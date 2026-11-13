
export const Course_FAVORITE_ENDPOINTS = {
  list: "/courses/favs",
  add: (id: number | string) => `/courses/favs/${id}`,
  remove: (id: number | string) => `/courses/favs/${id}/delete`,
} as const;
