import { createMapper } from "@/lib/api";
import type {
  EventCommentResponseDTO,
  EventCommentItemDTO,
  EventCommenterDTO,
  EventCommentsResponseDTO,
} from "../dto/EventComment.dto";
import type {
  EventComment,
  EventCommentItem,
  EventCommenter,
} from "../model/EventComment.model";

export const toEventComment = createMapper<
  EventCommentResponseDTO,
  EventComment
>((dto) => ({
  commentText: dto.comment_text,
}));

export const toEventCommenter = createMapper<
  EventCommenterDTO,
  EventCommenter
>((dto) => ({
  name: dto.name,
  profileImage: dto.profile_picture,
  phoneNumber: dto.phone_number,
}));

export const toEventCommentItem = createMapper<
  EventCommentItemDTO,
  EventCommentItem
>((dto) => ({
  commentText: dto.comment_text,
  commenter: toEventCommenter(dto.commenter),
}));

export function toEventComments(
  dto: EventCommentsResponseDTO,
): EventCommentItem[] {
  return dto.items.map((item) => toEventCommentItem(item));
}
