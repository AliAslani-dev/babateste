export interface CourseCommentPayloadDTO {
  comment_text: string;
}

export interface CourseCommentResponseDTO {
  comment_text: string;
}

export interface CourseCommenterDTO {
  name: string | null;
  profile_picture: string | null;
  phone_number: string;
}

export interface CourseCommentItemDTO {
  comment_text: string;
  commenter: CourseCommenterDTO;
}

export interface CourseCommentsResponseDTO {
  items: CourseCommentItemDTO[];
}