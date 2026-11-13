
export const DoctorFavoriteKeys = {
  all: ["Doctor-favorites"] as const,
  lists: () => [...DoctorFavoriteKeys.all, "list"] as const,
};
