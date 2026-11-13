import { apiRequest } from "@/lib/api";
import { HEALTH_ENDPOINTS } from "../endpoints/Health.endpoints";
import {
  toDoctorComment,
  toDoctorComments,
} from "../mappers";
import type {
  DoctorCommentPayloadDTO,
  DoctorCommentResponseDTO,
  DoctorCommentsResponseDTO,
} from "../dto";
import type {
  DoctorComment,
  DoctorCommentItem,
} from "../index";

export const DoctorCommentService = {
  /**
   * ثبت نظر برای ایونت
   * POST /Doctors/{Doctor_id}/comment
   */
  async comment(
    DoctorId: number | string,
    payload: DoctorCommentPayloadDTO,
  ): Promise<{ comment: DoctorComment; message: string }> {
    const response = await apiRequest<DoctorCommentResponseDTO>({
      url: HEALTH_ENDPOINTS.createComment(DoctorId),
      method: "POST",
      data: payload,
    });
    return {
      comment: toDoctorComment(response.data),
      message: response.message,
    };
  },

  /**
   * لیست نظرات ایونت
   * GET /Doctors/{Doctor_id}/comments
   */
  async comments(DoctorId: number | string): Promise<DoctorCommentItem[]> {
    const response = await apiRequest<DoctorCommentsResponseDTO>({
      url: HEALTH_ENDPOINTS.getComment(DoctorId),
      method: "GET",
    });
    return toDoctorComments(response.data);
  },
};
