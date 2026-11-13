"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

import {
  pageRootSx,
  stepperContentFillSx,
  stepperFillSx,
} from "./CooperationRequestPage.styles";

import { Stepper, useStepper } from "@/components/ui/common";
import type { StepConfig } from "@/components/ui/common";

import BasicInfoStep from "./components/form/step1/BasicInfoStep";
import ExpertiseStep from "./components/form/step2/ExpertiseStep";
import CooperationStep from "./components/form/step3/CooperationStep";
import SubmitSuccessPage from "./components/success/SubmitSuccessPage";

import type { BasicInfoFormValues } from "./components/form/step1/basicInfo.schema";
import type { ExpertiseStepFormValues } from "./components/form/step2/expertiseStep.schema";
import type { CooperationStepFormValues } from "./components/form/step3/cooperationStep.schema";
import { useSubmitCooperationRequest } from "@/features/mentoring/api";
import {
  useCooperationRequestDraft,
  useSaveCooperationStep,
} from "./hooks/useCooperationRequestDraft";

const STEP_KEY = "cooperationRequest.activeStep";

function loadStep(): number {
  try {
    const raw = sessionStorage.getItem(STEP_KEY);
    if (raw !== null) {
      const parsed = parseInt(raw, 10);
      return isNaN(parsed) ? 0 : parsed;
    }
  } catch {}
  return 0;
}

function clearStep() {
  try { sessionStorage.removeItem(STEP_KEY); } catch {}
}

export default function CooperationRequestPage() {
  const router = useRouter();
  const { activeStep, goNext, goPrev, goTo } = useStepper(3);
  const activeStepRef = useRef(activeStep);
  activeStepRef.current = activeStep;

  const submitCooperationRequest = useSubmitCooperationRequest();
  const draft = useCooperationRequestDraft();
  const saveStep = useSaveCooperationStep();
  const step1Data = draft.step1 ?? null;
  const step2Data = draft.step2 ?? null;

  const [submitted, setSubmitted] = useState(false);
  const submittedRef = useRef(submitted);
  submittedRef.current = submitted;

  useEffect(() => {
    // Always push a sentinel entry so the back button has something to pop.
    window.history.pushState({ cooperationStep: 0 }, "");

    const saved = loadStep();
    if (saved > 0) {
      goTo(saved);
      for (let i = 0; i < saved; i++) {
        window.history.pushState({ cooperationStep: i + 1 }, "");
      }
    }

    const handlePopState = (e: PopStateEvent) => {
      e.stopImmediatePropagation();
      if (submittedRef.current || activeStepRef.current === 0) {
        // Back from step 0 or success → go to the mentoring page
        clearStep();
        // router.push("/mentoring");
        router.back()
      } else {
        clearStep();
        goPrev();
        if (activeStepRef.current - 1 > 0) {
          window.history.pushState({ cooperationStep: activeStepRef.current - 1 }, "");
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStep1Submit = useCallback(
    (data: BasicInfoFormValues) => {
      saveStep("step1", data);
      window.history.pushState({ cooperationStep: 1 }, "");
      goNext();
    },
    [goNext, saveStep]
  );

  const handleStep2Submit = useCallback(
    (data: ExpertiseStepFormValues) => {
      saveStep("step2", data);
      window.history.pushState({ cooperationStep: 2 }, "");
      goNext();
    },
    [goNext, saveStep]
  );

  const handleStep3Submit = useCallback(
    async (data: CooperationStepFormValues) => {
      if (!step1Data || !step2Data) return;
      saveStep("step3", data);
      try {
        await submitCooperationRequest.mutateAsync({
          step1: step1Data,
          step2: step2Data,
          step3: data,
        });
        clearStep();
        setSubmitted(true);
      } catch {
        // خطا توسط ApiException پرتاب می‌شه؛ کامپوننت فرم از isPending استفاده می‌کنه
      }
    },
    [step1Data, step2Data, submitCooperationRequest, saveStep]
  );

  const handleEdit = useCallback(() => {
    clearStep();
    submitCooperationRequest.reset();
    setSubmitted(false);
    goTo(0);
  }, [goTo, submitCooperationRequest]);

  const steps: StepConfig[] = [
    {
      label: "اطلاعات پایه",
      content: <BasicInfoStep onNext={handleStep1Submit} defaultValues={draft.step1} />,
    },
    {
      label: "تجربه و تخصص",
      content: <ExpertiseStep onNext={handleStep2Submit} defaultValues={draft.step2} />,
    },
    {
      label: "نحوه همکاری",
      content: (
        <CooperationStep
          onNext={handleStep3Submit}
          defaultValues={draft.step3}
          isSubmitting={submitCooperationRequest.isPending}
        />
      ),
    },
  ];

  if (submitted) {
    return (
      <SubmitSuccessPage
        step1Data={step1Data}
        step2Data={step2Data}
        onEdit={handleEdit}
      />
    );
  }

  return (
    <Box sx={pageRootSx}>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        sx={stepperFillSx}
        contentSx={stepperContentFillSx}
      />
    </Box>
  );
}
