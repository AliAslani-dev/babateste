import { apiRequest } from "@/lib/api";
import { EVENT_COMMENT_ENDPOINTS } from "../endpoints/EventComment.endpoint";
import { toEventComment, toEventComments } from "../mappers/EventComment.mapper";
import type {
  EventCommentPayloadDTO,
  EventCommentResponseDTO,
  EventCommentsResponseDTO,
} from "../dto/EventComment.dto";
import type { EventComment, EventCommentItem } from "../model/EventComment.model";

export const EventCommentService = {
  /**
   * ثبت نظر برای ایونت
   * POST /Events/{Event_id}/comment
   */
  async comment(
    eventId: number | string,
    payload: EventCommentPayloadDTO,
  ): Promise<{ comment: EventComment; message: string }> {
    const response = await apiRequest<EventCommentResponseDTO>({
      url: EVENT_COMMENT_ENDPOINTS.comment(eventId),
      method: "POST",
      data: payload,
    });
    return {
      comment: toEventComment(response.data),
      message: response.message,
    };
  },

  /**
   * لیست نظرات ایونت
   * GET /Events/{Event_id}/comments
   */
  async comments(eventId: number | string): Promise<EventCommentItem[]> {
    const response = await apiRequest<EventCommentsResponseDTO>({
      url: EVENT_COMMENT_ENDPOINTS.comments(eventId),
      method: "GET",
    });
    return toEventComments(response.data);
  },
};
