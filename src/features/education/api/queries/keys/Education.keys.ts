export const coursesKeys = {
  all: ["courses"] as const,
  lists: () => [...coursesKeys.all, "list"] as const,
  list: () => [...coursesKeys.lists()] as const,
  my: () => [...coursesKeys.all, "my"] as const,
  details: () => [...coursesKeys.all, "detail"] as const,
  detail: (courseId: number | string) =>
    [...coursesKeys.details(), courseId] as const,
  episodes: (courseId: number | string) =>
    [...coursesKeys.all, "episodes", courseId] as const,
  comments: (courseId: number | string) =>
    [...coursesKeys.all, "comments", courseId] as const,
};