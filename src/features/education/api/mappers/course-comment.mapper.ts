import { createMapper } from "@/lib/api";
import type {
  CourseCommentResponseDTO,
  CourseCommentItemDTO,
  CourseCommenterDTO,
  CourseCommentsResponseDTO,
} from "../dto";
import type {
  CourseComment,
  CourseCommentItem,
  CourseCommenter,
} from "../model";

export const toCourseComment = createMapper<
  CourseCommentResponseDTO,
  CourseComment
>((dto) => ({
  commentText: dto.comment_text,
}));

export const toCourseCommenter = createMapper<
  CourseCommenterDTO,
  CourseCommenter
>((dto) => ({
  name: dto.name,
  profileImage: dto.profile_picture,
  phoneNumber: dto.phone_number,
}));

export const toCourseCommentItem = createMapper<
  CourseCommentItemDTO,
  CourseCommentItem
>((dto) => ({
  commentText: dto.comment_text,
  commenter: toCourseCommenter(dto.commenter),
}));

export function toCourseComments(
  dto: CourseCommentsResponseDTO,
): CourseCommentItem[] {
  return dto.items.map((item) => toCourseCommentItem(item));
}