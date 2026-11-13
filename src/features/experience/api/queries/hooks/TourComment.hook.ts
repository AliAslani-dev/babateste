"use client";

import { useQuery } from "@tanstack/react-query";
import { TourCommentKeys } from "../keys/TourComment.keys";
import { TourCommentService } from "../../services/TourComment.service";



export function useTourComments(tourId: number | string | undefined) {
  return useQuery({
    queryKey: TourCommentKeys.comments(tourId ?? ""),
    queryFn: () => TourCommentService.comments(tourId as number | string),
    enabled: !!tourId,
    staleTime: 5 * 60 * 1000,
  });
}



