import { apiRequest } from "@/lib/api";
import { COURSES_ENDPOINTS } from "../endpoints";
import {
  toCoursesList,
  toCourseDetail,
  toCourseEnroll,
  toCourseEpisodes,
  toCourseComment,
  toCourseComments,
  toCourseMyList,
} from "../mappers";
import type {
  CoursesListResponseDTO,
  CourseDetailResponseDTO,
  CourseEnrollDTO,
  CourseEpisodesResponseDTO,
  CourseCommentPayloadDTO,
  CourseCommentResponseDTO,
  CourseCommentsResponseDTO,
  CourseMyResponseDTO,
} from "../dto";
import type {
  CourseListItem,
  CourseDetail,
  CourseEnroll,
  CourseEpisode,
  CourseComment,
  CourseCommentItem,
  CourseMyItem,
} from "../model";

export const coursesService = {
  /**
   * لیست دوره‌ها
   * GET /courses
   */
  async list(): Promise<CourseListItem[]> {
    const response = await apiRequest<CoursesListResponseDTO>({
      url: COURSES_ENDPOINTS.list,
      method: "GET",
    });
    return toCoursesList(response.data);
  },

  /**
   * دوره‌های من
   * GET /courses/my
   */
  async myCourses(): Promise<CourseMyItem[]> {
    const response = await apiRequest<CourseMyResponseDTO>({
      url: COURSES_ENDPOINTS.myCourses,
      method: "GET",
    });
    return toCourseMyList(response.data);
  },

  /**
   * جزئیات یک دوره
   * GET /courses/{course_id}/detail
   */
  async detail(courseId: number | string): Promise<CourseDetail> {
    const response = await apiRequest<CourseDetailResponseDTO>({
      url: COURSES_ENDPOINTS.detail(courseId),
      method: "GET",
    });
    return toCourseDetail(response.data.course);
  },

  /**
   * ثبت‌نام در دوره
   * POST /courses/{course_id}/enroll
   */
  async enroll(courseId: number | string): Promise<CourseEnroll> {
    const response = await apiRequest<CourseEnrollDTO>({
      url: COURSES_ENDPOINTS.enroll(courseId),
      method: "POST",
    });
    return toCourseEnroll(response.data);
  },

  /**
   * لیست اپیزودهای دوره
   * GET /courses/{course_id}/episodes
   */
  async episodes(courseId: number | string): Promise<CourseEpisode[]> {
    const response = await apiRequest<CourseEpisodesResponseDTO>({
      url: COURSES_ENDPOINTS.episodes(courseId),
      method: "GET",
    });
    return toCourseEpisodes(response.data.episodes);
  },

  /**
   * ثبت نظر برای دوره
   * POST /courses/{course_id}/comment
   */
  async comment(
    courseId: number | string,
    payload: CourseCommentPayloadDTO,
  ): Promise<{ comment: CourseComment; message: string }> {
    const response = await apiRequest<CourseCommentResponseDTO>({
      url: COURSES_ENDPOINTS.comment(courseId),
      method: "POST",
      data: payload,
    });
    return {
      comment: toCourseComment(response.data),
      message: response.message,
    };
  },

  /**
   * لیست نظرات دوره
   * GET /courses/{course_id}/comments
   */
  async comments(courseId: number | string): Promise<CourseCommentItem[]> {
    const response = await apiRequest<CourseCommentsResponseDTO>({
      url: COURSES_ENDPOINTS.comments(courseId),
      method: "GET",
    });
    return toCourseComments(response.data);
  },
};
