import { createMapper } from "@/lib/api";
import type {
  DoctorCommentResponseDTO,
  DoctorCommentItemDTO,
  DoctorCommenterDTO,
  DoctorCommentsResponseDTO,
} from "../dto";
import type {
  DoctorComment,
  DoctorCommentItem,
  DoctorCommenter,
} from "../model"

export const toDoctorComment = createMapper<
  DoctorCommentResponseDTO,
  DoctorComment
>((dto) => ({
  commentText: dto.comment_text,
}));

export const toDoctorCommenter = createMapper<
  DoctorCommenterDTO,
  DoctorCommenter
>((dto) => ({
  name: dto.name,
  profileImage: dto.profile_picture,
  phoneNumber: dto.phone_number,
}));

export const toDoctorCommentItem = createMapper<
  DoctorCommentItemDTO,
  DoctorCommentItem
>((dto) => ({
  commentText: dto.comment_text,
  commenter: toDoctorCommenter(dto.commenter),
}));

export function toDoctorComments(
  dto: DoctorCommentsResponseDTO,
): DoctorCommentItem[] {
  return dto.items.map((item) => toDoctorCommentItem(item));
}