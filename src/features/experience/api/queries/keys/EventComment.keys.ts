export const EventCommentKeys = {
  all: ["events"] as const,
  comments: (eventId: number | string) =>
    [...EventCommentKeys.all, "comments", eventId] as const,
};
