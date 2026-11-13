"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { mentorsService } from "../../services/mentoring.service";
import { mentorsKeys } from "../keys/mentoring.keys";
import type { CreateSessionRequestDTO } from "../../dto/mentoring.dto";

export function useMentors() {
  return useQuery({
    queryKey: mentorsKeys.all,
    queryFn: () => mentorsService.getMentors(),
    staleTime: 5 * 60 * 1000,
  });
}

export function useMentorDetail(mentorId: number) {
  return useQuery({
    queryKey: mentorsKeys.detail(mentorId),
    queryFn: () => mentorsService.getMentorDetail(mentorId),
    staleTime: 5 * 60 * 1000,
    enabled: mentorId > 0,
  });
}

/**
 * ایجاد رزرو جلسه مشاوره جدید برای یک منتور
 * POST /mentors/{mentorId}/session/new
 */
export function useCreateSession(mentorId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: mentorsKeys.session(mentorId),
    mutationFn: (payload: CreateSessionRequestDTO) =>
      mentorsService.createSession(mentorId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: mentorsKeys.paginate(1) });
    },
  });
}
