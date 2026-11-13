"use client";

import { useQuery } from "@tanstack/react-query";
import { DoctorCommentKeys } from "../index";
import { DoctorCommentService } from "../../index";



export function useDoctorComments(DoctorId: number | string | undefined) {
  return useQuery({
    queryKey: DoctorCommentKeys.comments(DoctorId ?? ""),
    queryFn: () => DoctorCommentService.comments(DoctorId as number | string),
    enabled: !!DoctorId,
    staleTime: 5 * 60 * 1000,
  });
}


