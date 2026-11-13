export interface EventCommentPayloadDTO {
  comment_text: string;
}

export interface EventCommentResponseDTO {
  comment_text: string;
}

export interface EventCommenterDTO {
  name: string | null;
  profile_picture: string | null;
  phone_number: string;
}

export interface EventCommentItemDTO {
  comment_text: string;
  commenter: EventCommenterDTO;
}

export interface EventCommentsResponseDTO {
  items: EventCommentItemDTO[];
}

