export const TourCommentKeys = {
  all: ["tours"] as const,
  comments: (tourId: number | string) =>
    [...TourCommentKeys.all, "comments", tourId] as const,
};
