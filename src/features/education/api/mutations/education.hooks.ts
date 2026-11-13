"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { coursesService } from "../services/education.service";
import { coursesKeys } from "../queries";
import type {
  EnrollCoursePayload,
  CommentCoursePayload,
} from "../payloads/education.payloads";

export function useEnrollCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ courseId }: EnrollCoursePayload) =>
      coursesService.enroll(courseId),
    onSuccess: (_, { courseId }) => {
      queryClient.invalidateQueries({
        queryKey: coursesKeys.detail(courseId),
      });
      queryClient.invalidateQueries({
        queryKey: coursesKeys.my(),
      });
    },
  });
}

export function useCommentCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ courseId, comment_text }: CommentCoursePayload) =>
      coursesService.comment(courseId, { comment_text }),
    onSuccess: (_, { courseId }) => {
      queryClient.invalidateQueries({
        queryKey: coursesKeys.comments(courseId),
      });
    },
  });
}
