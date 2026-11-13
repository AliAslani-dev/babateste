// src/components/ui/common/Stepper/useStepper.ts
"use client";

import { useState, useCallback } from "react";

export interface UseStepperReturn {
  /** 0-based index of the currently active step */
  activeStep: number;
  /** True when the first step is active */
  isFirstStep: boolean;
  /** True when the last step is active */
  isLastStep: boolean;
  /** Move to the next step (no-op if already on the last) */
  goNext: () => void;
  /** Move to the previous step (no-op if already on the first) */
  goPrev: () => void;
  /** Jump directly to a specific step index */
  goTo: (step: number) => void;
  /** Reset back to the first step */
  reset: () => void;
}

/**
 * useStepper
 *
 * Manages the active-step state for a `<Stepper>` component.
 *
 * @param totalSteps - total number of steps (must be ≥ 1)
 * @param initialStep - optional starting step index (default 0)
 */
export function useStepper(
  totalSteps: number,
  initialStep = 0
): UseStepperReturn {
  const [activeStep, setActiveStep] = useState<number>(initialStep);

  const goNext = useCallback(() => {
    setActiveStep((prev) => Math.min(prev + 1, totalSteps - 1));
  }, [totalSteps]);

  const goPrev = useCallback(() => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const goTo = useCallback(
    (step: number) => {
      if (step >= 0 && step < totalSteps) {
        setActiveStep(step);
      }
    },
    [totalSteps]
  );

  const reset = useCallback(() => {
    setActiveStep(0);
  }, []);

  return {
    activeStep,
    isFirstStep: activeStep === 0,
    isLastStep: activeStep === totalSteps - 1,
    goNext,
    goPrev,
    goTo,
    reset,
  };
}
