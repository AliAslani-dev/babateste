export interface DoctorCommentPayloadDTO {
  comment_text: string;
}

export interface DoctorCommentResponseDTO {
  comment_text: string;
}

export interface DoctorCommenterDTO {
  name: string | null;
  profile_picture: string | null;
  phone_number: string;
}

export interface DoctorCommentItemDTO {
  comment_text: string;
  commenter: DoctorCommenterDTO;
}

export interface DoctorCommentsResponseDTO {
  items: DoctorCommentItemDTO[];
}