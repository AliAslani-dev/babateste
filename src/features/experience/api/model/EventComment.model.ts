export interface EventComment {
  commentText: string;
}

export interface EventCommenter {
  name: string | null;
  profileImage: string | null;
  phoneNumber: string;
}

export interface EventCommentItem {
  commentText: string;
  commenter: EventCommenter;
}
