
export const CourseFavoriteKeys = {
  all: ["Course-favorites"] as const,
  lists: () => [...CourseFavoriteKeys.all, "list"] as const,
};
