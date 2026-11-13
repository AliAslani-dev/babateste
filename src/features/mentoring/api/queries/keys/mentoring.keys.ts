export const mentorsKeys = {
  all: ["mentors"] as const,
  paginate: (page: number) => [...mentorsKeys.all, "paginate", page] as const,
  detail: (mentorId: number) => [...mentorsKeys.all, "detail", mentorId] as const,
  session: (mentorId: number) => [...mentorsKeys.all, "session", mentorId] as const,
};
