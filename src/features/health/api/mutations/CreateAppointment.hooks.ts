"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { healthService } from "../index";
import { healthKeys } from "../index";
import type {
  CreateCommentPayload,
  CreateAppointmentPayload,
} from "../index";

interface CreateCommentVars {
  doctorId: number | string;
  payload: CreateCommentPayload;
}

export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ doctorId, payload }: CreateCommentVars) =>
      healthService.createComment(doctorId, payload),
    onSuccess: (_, { doctorId }) => {
      /* بعد از ثبت نظر، جزئیات پزشک دوباره fetch بشه (اگه نظرها بخشی از detail باشن) */
      queryClient.invalidateQueries({
        queryKey: healthKeys.doctorDetail(doctorId),
      });
    },
  });
}

interface CreateAppointmentVars {
  doctorId: number | string;
  payload: CreateAppointmentPayload;
}

export function useCreateAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ doctorId, payload }: CreateAppointmentVars) =>
      healthService.createAppointment(doctorId, payload),
    onSuccess: (_, { doctorId }) => {
      /* بعد از رزرو، زمان‌های آزاد احتمالاً تغییر کردن */
      queryClient.invalidateQueries({
        queryKey: healthKeys.doctorFreeTimes(doctorId),
      });
    },
  });
}
