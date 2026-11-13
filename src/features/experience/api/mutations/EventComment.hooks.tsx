"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventCommentKeys } from "../queries/keys/EventComment.keys";
import type {  CommentEventPayload } from "../payloads/EventComment.payloads";
import { EventCommentService } from "../services/EventComment.service";


export function useCommentEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ eventId, comment_text }: CommentEventPayload) =>
      EventCommentService.comment(eventId, { comment_text }),
    onSuccess: (_, { eventId }) => {
      queryClient.invalidateQueries({
        queryKey: EventCommentKeys.comments(eventId),
      });
    },
  });
}