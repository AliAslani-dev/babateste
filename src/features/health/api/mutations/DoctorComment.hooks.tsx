"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DoctorCommentKeys } from "../index";
import type {  CommentDoctorPayload } from "../index";
import { DoctorCommentService } from "../index";


export function useCommentDoctor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ doctorId, comment_text }: CommentDoctorPayload) =>
      DoctorCommentService.comment(doctorId, { comment_text }),
    onSuccess: (_, { doctorId }) => {
      queryClient.invalidateQueries({
        queryKey: DoctorCommentKeys.comments(doctorId),
      });
    },
  });
}