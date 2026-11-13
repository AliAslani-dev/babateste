// ─── Service ───
export { coursesService, CourseFavoriteService } from "./services";

// ─── Queries ───
export {
  useCourses,
  useMyCourses,
  useCourseDetail,
  useCourseEpisodes,
  useCourseComments,
  useIsEnrolled,
  useCourseFavorites,
} from "./queries";

// ─── Mutations ───
export {
  useEnrollCourse,
  useCommentCourse,
  useAddCourseFavorite,
  useRemoveCourseFavorite,
} from "./mutations";

// ─── Keys ───
export { coursesKeys, CourseFavoriteKeys } from "./queries";

// ─── Types ───
export type {
  Teacher,
  CourseListItem,
  CourseDetail,
  CourseEnroll,
  CourseEpisode,
  CourseComment,
  CourseCommenter,
  CourseCommentItem,
  CourseMyItem,
  CourseFavorite,
} from "./model";

export type {
  EnrollCoursePayload,
  CommentCoursePayload,
  AddCourseFavoritePayload,
  RemoveCourseFavoritePayload,
} from "./payloads";

export type {
  CourseListItemDTO,
  CoursesListResponseDTO,
  TeacherDTO,
  CourseDetailDTO,
  CourseDetailResponseDTO,
  CourseEnrollDTO,
  CourseEnrollResponseDTO,
  CourseEpisodeDTO,
  CourseEpisodesResponseDTO,
  CourseCommentPayloadDTO,
  CourseCommentResponseDTO,
  CourseCommenterDTO,
  CourseCommentItemDTO,
  CourseCommentsResponseDTO,
  CourseMyItemDTO,
  CourseMyResponseDTO,
  CourseFavoriteActionResponseDto,
  CourseFavoritesResponseDto,
  CourseFavoriteDto,
  CourseFavoriteImageDto,
} from "./dto";
