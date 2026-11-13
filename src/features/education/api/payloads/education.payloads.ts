export interface EnrollCoursePayload {
  courseId: number | string;
}

export interface CommentCoursePayload {
  courseId: number | string;
  comment_text: string;
}
