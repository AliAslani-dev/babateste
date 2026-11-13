"use client";

import { useQuery } from "@tanstack/react-query";
import { coursesService } from "../../services";
import { coursesKeys } from "../keys/Education.keys";

export function useCourses() {
  return useQuery({
    queryKey: coursesKeys.list(),
    queryFn: () => coursesService.list(),
    staleTime: 5 * 60 * 1000,
  });
}

export function useMyCourses() {
  return useQuery({
    queryKey: coursesKeys.my(),
    queryFn: () => coursesService.myCourses(),
    staleTime: 5 * 60 * 1000,
  });
}

export function useCourseDetail(courseId: number | string | undefined) {
  return useQuery({
    queryKey: coursesKeys.detail(courseId ?? ""),
    queryFn: () => coursesService.detail(courseId as number | string),
    enabled: !!courseId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCourseEpisodes(courseId: number | string | undefined) {
  return useQuery({
    queryKey: coursesKeys.episodes(courseId ?? ""),
    queryFn: () => coursesService.episodes(courseId as number | string),
    enabled: !!courseId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCourseComments(courseId: number | string | undefined) {
  return useQuery({
    queryKey: coursesKeys.comments(courseId ?? ""),
    queryFn: () => coursesService.comments(courseId as number | string),
    enabled: !!courseId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useIsEnrolled(courseId: number | string | undefined) {
  const { data, isLoading } = useMyCourses();

  const isEnrolled = Boolean(
    courseId && data?.some((c) => c.id === Number(courseId)),
  );

  return { isEnrolled, isLoading };
}
