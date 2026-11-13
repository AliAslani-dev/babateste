"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TourCommentKeys } from "../queries/keys/TourComment.keys";
import type {  CommentTourPayload } from "../payloads/TourComment.payloads";
import { TourCommentService } from "../services/TourComment.service";


export function useCommentTour() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ tourId, comment_text }: CommentTourPayload) =>
      TourCommentService.comment(tourId, { comment_text }),
    onSuccess: (_, { tourId }) => {
      queryClient.invalidateQueries({
        queryKey: TourCommentKeys.comments(tourId),
      });
    },
  });
}