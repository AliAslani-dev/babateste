"use client";

import { useQuery } from "@tanstack/react-query";
import { EventCommentKeys } from "../keys/EventComment.keys";
import { EventCommentService } from "../../services/EventComment.service";



export function useEventComments(eventId: number | string | undefined) {
  return useQuery({
    queryKey: EventCommentKeys.comments(eventId ?? ""),
    queryFn: () => EventCommentService.comments(eventId as number | string),
    enabled: !!eventId,
    staleTime: 5 * 60 * 1000,
  });
}


