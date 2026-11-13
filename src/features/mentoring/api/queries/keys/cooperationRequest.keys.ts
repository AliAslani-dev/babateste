export const cooperationKeys = {
  all: ["cooperationRequest"] as const,
  draft: () => [...cooperationKeys.all, "draft"] as const,
  expertiseTags: () => [...cooperationKeys.all, "expertiseTags"] as const,
};
