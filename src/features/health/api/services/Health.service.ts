import { apiRequest } from "@/lib/api";
import { HEALTH_ENDPOINTS } from "../endpoints/Health.endpoints";
import {
  toDoctorsList,
  toDoctorDetail,
  toFreeTime,
  toDoctorComment,
  toAppointment,
} from "../mappers";
import type {
  DoctorsListResponseDTO,
  DoctorDetailResponseDTO,
  FreeTimesResponseDTO,
  DoctorCommentResponseDTO,
  CreateAppointmentResponseDTO,
} from "../dto";
import type {
  DoctorListItem,
  DoctorDetail,
  FreeTime,
  DoctorComment,
  Appointment,
} from "../index";
import type {
  CreateCommentPayload,
  CreateAppointmentPayload,
} from "../index";

export const healthService = {
  /**
   * لیست پزشک‌ها
   * GET /doctors
   */
  async doctorsList(): Promise<DoctorListItem[]> {
    const response = await apiRequest<DoctorsListResponseDTO>({
      url: HEALTH_ENDPOINTS.doctorsList,
      method: "GET",
    });
    return toDoctorsList(response.data);
  },

  /**
   * جزئیات پزشک
   * GET /doctors/{doctor_id}/detail
   */
  async doctorDetail(doctorId: number | string): Promise<DoctorDetail> {
    const response = await apiRequest<DoctorDetailResponseDTO>({
      url: HEALTH_ENDPOINTS.doctorDetail(doctorId),
      method: "GET",
    });
    return toDoctorDetail(response.data.doctor);
  },

  /**
   * زمان‌های آزاد پزشک
   * GET /doctors/{doctor_id}/free_times
   */
  async doctorFreeTimes(doctorId: number | string): Promise<FreeTime[]> {
    const response = await apiRequest<FreeTimesResponseDTO>({
      url: HEALTH_ENDPOINTS.doctorFreeTimes(doctorId),
      method: "GET",
    });
    return response.data.free_times.map((ft) => toFreeTime(ft));
  },

  /**
   * ثبت نظر
   * POST /doctors/{doctor_id}/comment
   */
  async createComment(
    doctorId: number | string,
    payload: CreateCommentPayload,
  ): Promise<DoctorComment> {
    const response = await apiRequest<DoctorCommentResponseDTO>({
      url: HEALTH_ENDPOINTS.createComment(doctorId),
      method: "POST",
      data: payload,
    });
    return toDoctorComment(response.data);
  },

  /**
   * رزرو نوبت
   * POST /doctors/{doctor_id}/appointment/new
   */
  async createAppointment(
    doctorId: number | string,
    payload: CreateAppointmentPayload,
  ): Promise<Appointment> {
    const response = await apiRequest<CreateAppointmentResponseDTO>({
      url: HEALTH_ENDPOINTS.createAppointment(doctorId),
      method: "POST",
      data: payload,
    });
    return toAppointment(response.data);
  },
};
