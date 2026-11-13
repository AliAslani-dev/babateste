export interface TourCommentPayloadDTO {
  comment_text: string;
}

export interface TourCommentResponseDTO {
  comment_text: string;
}

export interface TourCommenterDTO {
  name: string | null;
  profile_picture: string | null;
  phone_number: string;
}

export interface TourCommentItemDTO {
  comment_text: string;
  commenter: TourCommenterDTO;
}

export interface TourCommentsResponseDTO {
  items: TourCommentItemDTO[];
}
