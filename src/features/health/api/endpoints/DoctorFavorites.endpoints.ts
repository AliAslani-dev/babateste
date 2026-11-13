
export const DOCTOR_FAVORITE_ENDPOINTS = {
  list: "/doctors/favs",
  add: (id: number | string) => `/doctors/favs/${id}`,
  remove: (id: number | string) => `/doctors/favs/${id}/delete`,
} as const;
