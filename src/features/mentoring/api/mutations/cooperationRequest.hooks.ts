"use client";

import { useMutation } from "@tanstack/react-query";
import { cooperationRequestService } from "../services/cooperationRequest.service";
import type { CooperationRequestPayload } from "../payloads/cooperationRequest.payloads";
import type { BasicInfoFormValues } from "../../cooperation-request/components/form/step1/basicInfo.schema";
import type { ExpertiseStepFormValues } from "../../cooperation-request/components/form/step2/expertiseStep.schema";
import type { CooperationStepFormValues } from "../../cooperation-request/components/form/step3/cooperationStep.schema";
import {
  COOPERATION_TYPES,
  AVAILABLE_DAYS,
} from "../../cooperation-request/components/form/step3/cooperationStep.constants";

const COOPERATION_FORMAT_LABEL: Record<string, string> = Object.fromEntries(
  COOPERATION_TYPES.map((t) => [t.value, t.label]),
);

/** Form day string (e.g. "saturday") → API numeric string (e.g. "0") */
const DAY_TO_NUMBER: Record<string, string> = Object.fromEntries(
  AVAILABLE_DAYS.map((d, index) => [d.value, String(index)]),
);

// ─── Input type for the mutation ──────────────────────────────────────────────

export interface CooperationRequestInput {
  step1: BasicInfoFormValues;
  step2: ExpertiseStepFormValues;
  step3: CooperationStepFormValues;
}

// ─── Helper: build API payload from the three form steps ─────────────────────

function buildPayload(
  input: CooperationRequestInput,
): CooperationRequestPayload {
  const { step1, step2, step3 } = input;

  // expertise and skills now store the server tag title directly — no mapping needed
  const daysOfWeek = step3.availableDays
    .map((day) => DAY_TO_NUMBER[day] ?? day)
    .join(",");

  const cooperationFormat = step3.cooperationType
    .map((type) => COOPERATION_FORMAT_LABEL[type] ?? type)
    .join(",");

  return {
    job_title: step1.jobTitle,
    city: step1.city,
    work_experience: step2.yearsOfExperience,
    area_of_expertise: step2.expertise,
    descriptions: step2.bio,
    cooperation_format: cooperationFormat,
    days_of_week: daysOfWeek,
    mentoring_categories: step2.skills.join(","),
  };
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useSubmitCooperationRequest() {
  return useMutation({
    mutationFn: (input: CooperationRequestInput) =>
      cooperationRequestService.submit(buildPayload(input)),
  });
}
