// src/components/ui/common/Stepper/components/StepperContent.tsx
"use client";

import { Box } from "@mui/material";
import { stepperContentSx } from "../Stepper.styles";
import type { StepperContentProps } from "../Stepper.types";

export function StepperContent({ steps, activeStep, sx }: StepperContentProps) {
  const currentStep = steps[activeStep];
  if (!currentStep) return null;

  return (
    <Box sx={[stepperContentSx, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}>
      {currentStep.content}
    </Box>
  );
}
