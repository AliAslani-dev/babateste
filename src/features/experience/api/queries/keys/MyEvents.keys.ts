
export const myEventsKeys = {
  all: ["my-events"] as const,
  list: () => [...myEventsKeys.all, "list"] as const,
};
