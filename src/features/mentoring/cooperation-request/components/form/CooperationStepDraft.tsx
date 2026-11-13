"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import type { CooperationRequestInput } from "@/features/mentoring/api";
import { useSaveCooperationStep } from "../../hooks/useCooperationRequestDraft";

export default function CooperationStepDraft<
  Step extends keyof CooperationRequestInput,
>({ step }: { step: Step }) {
  const { getValues } = useFormContext<CooperationRequestInput[Step]>();
  const saveStep = useSaveCooperationStep();

  useEffect(() => {
    return () => saveStep(step, getValues());
  }, [getValues, saveStep, step]);

  return null;
}
