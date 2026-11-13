import { createMapper } from "@/lib/api";
import type {
  TourCommentResponseDTO,
  TourCommentItemDTO,
  TourCommenterDTO,
  TourCommentsResponseDTO,
} from "../dto/TourComment.dto";
import type {
  TourComment,
  TourCommentItem,
  TourCommenter,
} from "../model/TourComment.model";

export const toTourComment = createMapper<
  TourCommentResponseDTO,
  TourComment
>((dto) => ({
  commentText: dto.comment_text,
}));


export const toTourCommenter = createMapper<
  TourCommenterDTO,
  TourCommenter
>((dto) => ({
  name: dto.name,
  profileImage: dto.profile_picture,
  phoneNumber: dto.phone_number,
}));

export const toTourCommentItem = createMapper<
  TourCommentItemDTO,
  TourCommentItem
>((dto) => ({
  commentText: dto.comment_text,
  commenter: toTourCommenter(dto.commenter),
}));

export function toTourComments(
  dto: TourCommentsResponseDTO,
): TourCommentItem[] {
  return dto.items.map((item) => toTourCommentItem(item));
}