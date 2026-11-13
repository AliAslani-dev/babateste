// src/components/ui/common/Stepper/components/StepperHeader.tsx
"use client";

import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

import { StepperDot } from "./StepperDot";
import { StepperConnector } from "./StepperConnector";
import {
  stepperHeaderSx,
  stepColSx,
  stepLabelSx,
} from "../Stepper.styles";
import type { StepperHeaderProps, StepStatus } from "../Stepper.types";

function resolveStatus(stepIndex: number, activeStep: number): StepStatus {
  if (stepIndex < activeStep) return "completed";
  if (stepIndex === activeStep) return "active";
  return "upcoming";
}

export function StepperHeader({ steps, activeStep, sx }: StepperHeaderProps) {
  return (
    <Box sx={[stepperHeaderSx, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}>
      {steps.map((step, index) => {
        const status = resolveStatus(index, activeStep);
        // connector sits between two step columns — rendered BEFORE the step
        // column (row-reverse makes right-to-left naturally, so connector
        // between step[0] and step[1] renders between them visually)
        const isLastStep = index === steps.length - 1;

        return (
          <Fragment key={index}>
            {/* Step column: dot + label */}
            <Box sx={stepColSx}>
              <StepperDot status={status} stepNumber={index + 1} />
              <Typography variant="regularXs" sx={stepLabelSx(status)}>
                {step.label}
              </Typography>
            </Box>

            {/* Connector to the next step (not after the last step) */}
            {!isLastStep && (
              <StepperConnector completed={status === "completed"} />
            )}
          </Fragment>
        );
      })}
    </Box>
  );
}
