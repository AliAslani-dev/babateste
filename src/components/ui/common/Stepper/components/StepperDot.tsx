// src/components/ui/common/Stepper/components/StepperDot.tsx
import { Box } from "@mui/material";
import { stepDotOuterSx, stepDotInnerSx } from "../Stepper.styles";
import type { StepperDotProps } from "../Stepper.types";

// Checkmark SVG — shown only when completed
const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2.5 7L5.5 10L11.5 4"
      stroke="white"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function StepperDot({ status }: StepperDotProps) {
  return (
    <Box sx={stepDotOuterSx(status)}>
      {status === "completed" && <CheckIcon />}
      {status === "active" && <Box sx={stepDotInnerSx("active")} />}
      {status === "upcoming" && <Box sx={stepDotInnerSx("upcoming")} />}
    </Box>
  );
}
