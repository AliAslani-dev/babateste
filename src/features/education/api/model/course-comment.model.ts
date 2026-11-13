export interface CourseComment {
  commentText: string;
}

export interface CourseCommenter {
  name: string | null;
  profileImage: string | null;
  phoneNumber: string;
}

export interface CourseCommentItem {
  commentText: string;
  commenter: CourseCommenter;
}