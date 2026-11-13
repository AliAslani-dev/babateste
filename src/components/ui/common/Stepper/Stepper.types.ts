// src/components/ui/common/Stepper/Stepper.types.ts
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

// ─── A single step definition ────────────────────────────────────────────────
export interface StepConfig {
  /** Label shown below the dot */
  label: string;
  /** Content rendered when this step is active */
  content: ReactNode;
}

// ─── Step status ─────────────────────────────────────────────────────────────
export type StepStatus = "completed" | "active" | "upcoming";

// ─── StepperDot props ─────────────────────────────────────────────────────────
export interface StepperDotProps {
  status: StepStatus;
  /** 1-based step number shown inside upcoming dots */
  stepNumber: number;
}

// ─── StepperConnector props ───────────────────────────────────────────────────
export interface StepperConnectorProps {
  /** Whether the step to the left of this connector is completed */
  completed: boolean;
}

// ─── StepperHeader props ──────────────────────────────────────────────────────
export interface StepperHeaderProps {
  steps: StepConfig[];
  activeStep: number;
  sx?: SxProps<Theme>;
}

// ─── StepperContent props ─────────────────────────────────────────────────────
export interface StepperContentProps {
  steps: StepConfig[];
  activeStep: number;
  sx?: SxProps<Theme>;
}

// ─── Main Stepper props ───────────────────────────────────────────────────────
export interface StepperProps {
  steps: StepConfig[];
  activeStep: number;
  /** Override styles on the root wrapper */
  sx?: SxProps<Theme>;
  /** Override styles on just the header track */
  headerSx?: SxProps<Theme>;
  /** Override styles on the content area */
  contentSx?: SxProps<Theme>;
}
