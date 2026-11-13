export const DoctorCommentKeys = {
  all: ["Doctors"] as const,
  comments: (DoctorId: number | string) =>
    [...DoctorCommentKeys.all, "comments", DoctorId] as const,
};
