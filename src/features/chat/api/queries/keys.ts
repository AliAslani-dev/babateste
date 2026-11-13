export const hamdamKeys = {
  all: ["hamdam"] as const,
  history: () => [...hamdamKeys.all, "history"] as const,
};