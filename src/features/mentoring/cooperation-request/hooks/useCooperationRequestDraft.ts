"use client";

import { useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { cooperationKeys } from "@/features/mentoring/api";
import type { CooperationRequestInput } from "../../api";

type CooperationRequestDraft = Partial<CooperationRequestInput>;

export function useCooperationRequestDraft() {
  const { data } = useQuery<CooperationRequestDraft>({
    queryKey: cooperationKeys.draft(),
    queryFn: (): CooperationRequestDraft => ({}),
    initialData: {},
    enabled: false,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return data;
}

export function useSaveCooperationStep() {
  const queryClient = useQueryClient();

  return useCallback(
    <Step extends keyof CooperationRequestInput>(
      step: Step,
      values: CooperationRequestInput[Step],
    ) => {
      queryClient.setQueryData<CooperationRequestDraft>(
        cooperationKeys.draft(),
        (current) => (current ? { ...current, [step]: values } : undefined),
      );
    },
    [queryClient],
  );
}
