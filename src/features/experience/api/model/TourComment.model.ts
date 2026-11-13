export interface TourComment {
  commentText: string;
}

export interface TourCommenter {
  name: string | null;
  profileImage: string | null;
  phoneNumber: string;
}

export interface TourCommentItem {
  commentText: string;
  commenter: TourCommenter;
}