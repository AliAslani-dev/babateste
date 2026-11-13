
export const eventFavoriteKeys = {
  all: ["event-favorites"] as const,
  lists: () => [...eventFavoriteKeys.all, "list"] as const,
};
