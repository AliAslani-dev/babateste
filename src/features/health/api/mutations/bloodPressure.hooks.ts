"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bloodPressureService } from "../index";
import type { CreateBloodPressureRecordPayload } from "../index";

export function useCreateBloodPressureRecord() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateBloodPressureRecordPayload) =>
      bloodPressureService.createRecord(payload),
  });
}
