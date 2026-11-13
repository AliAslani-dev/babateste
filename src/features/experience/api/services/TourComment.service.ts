import { apiRequest } from "@/lib/api";
import { TOUR_COMMENT_ENDPOINTS } from "../endpoints/TourComment.endpoint";
import { toTourComment, toTourComments } from "../mappers/TourComment.mapper";
import type {
  TourCommentPayloadDTO,
  TourCommentResponseDTO,
  TourCommentsResponseDTO,
} from "../dto/TourComment.dto";
import type { TourComment, TourCommentItem } from "../model/TourComment.model";

export const TourCommentService = {
  /**
   * ثبت نظر برای ایونت
   * POST /tours/{tour_id}/comment
   */
  async comment(
    tourId: number | string,
    payload: TourCommentPayloadDTO,
  ): Promise<{ comment: TourComment; message: string }> {
    const response = await apiRequest<TourCommentResponseDTO>({
      url: TOUR_COMMENT_ENDPOINTS.comment(tourId),
      method: "POST",
      data: payload,
    });
    return {
      comment: toTourComment(response.data),
      message: response.message,
    };
  },

  /**
   * لیست نظرات ایونت
   * GET /tours/{tour_id}/comments
   */
  async comments(tourId: number | string): Promise<TourCommentItem[]> {
    const response = await apiRequest<TourCommentsResponseDTO>({
      url: TOUR_COMMENT_ENDPOINTS.comments(tourId),
      method: "GET",
    });
    return toTourComments(response.data);
  },
};
