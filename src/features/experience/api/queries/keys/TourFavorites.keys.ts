
export const TourFavoriteKeys = {
  all: ["tour-favorites"] as const,
  lists: () => [...TourFavoriteKeys.all, "list"] as const,
};
