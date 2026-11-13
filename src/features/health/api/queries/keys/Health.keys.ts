export const healthKeys = {
  all: ["health"] as const,

  doctors: () => [...healthKeys.all, "doctors"] as const,
  doctorsList: () => [...healthKeys.doctors(), "list"] as const,

  doctor: (doctorId: number | string) =>
    [...healthKeys.all, "doctor", doctorId] as const,
  doctorDetail: (doctorId: number | string) =>
    [...healthKeys.doctor(doctorId), "detail"] as const,
  doctorFreeTimes: (doctorId: number | string) =>
    [...healthKeys.doctor(doctorId), "free-times"] as const,
};