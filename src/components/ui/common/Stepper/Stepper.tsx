// src/components/ui/common/Stepper/Stepper.tsx
"use client";

import { Box } from "@mui/material";
import { StepperHeader } from "./components/StepperHeader";
import { StepperContent } from "./components/StepperContent";
import { stepperRootSx } from "./Stepper.styles";
import type { StepperProps } from "./Stepper.types";

/**
 * Stepper
 *
 * A fully dynamic, RTL-friendly step tracker.
 *
 * @example
 * ```tsx
 * const steps: StepConfig[] = [
 *   { label: "اطلاعات پایه", content: <StepOne /> },
 *   { label: "تجربه و تخصص", content: <StepTwo /> },
 *   { label: "نحوه همکاری",  content: <StepThree /> },
 * ];
 *
 * const { activeStep, goNext, goPrev, goTo } = useStepper(steps.length);
 *
 * <Stepper steps={steps} activeStep={activeStep} />
 * ```
 */
export function Stepper({
  steps,
  activeStep,
  sx,
  headerSx,
  contentSx,
}: StepperProps) {
  return (
    <Box sx={[stepperRootSx, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}>
      <StepperHeader steps={steps} activeStep={activeStep} sx={headerSx} />
      <StepperContent steps={steps} activeStep={activeStep} sx={contentSx} />
    </Box>
  );
}

export default Stepper;
