export const HEALTH_ENDPOINTS = {
  doctorsList: "/doctors",
  doctorDetail: (doctorId: number | string) =>
    `/doctors/${doctorId}/detail`,
  doctorFreeTimes: (doctorId: number | string) =>
    `/doctors/${doctorId}/free_times`,
  createComment: (doctorId: number | string) =>
    `/doctors/${doctorId}/comment`,
  getComment:(doctorId:number|string)=>
    `/doctors/${doctorId}/comments`,
  createAppointment: (doctorId: number | string) =>
    `/doctors/${doctorId}/appointment/new`,
} as const;