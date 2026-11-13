export interface DoctorComment {
  commentText: string;
}

export interface DoctorCommenter {
  name: string | null;
  profileImage: string | null;
  phoneNumber: string;
}

export interface DoctorCommentItem {
  commentText: string;
  commenter: DoctorCommenter;
}