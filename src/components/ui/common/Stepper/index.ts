// src/components/ui/common/Stepper/index.ts

// ─── Main component ───────────────────────────────────────────────────────────
export { Stepper } from "./Stepper";
export { default as StepperDefault } from "./Stepper";

// ─── Sub-components (for advanced custom layouts) ─────────────────────────────
export { StepperHeader } from "./components/StepperHeader";
export { StepperContent } from "./components/StepperContent";
export { StepperDot } from "./components/StepperDot";
export { StepperConnector } from "./components/StepperConnector";

// ─── Hook ─────────────────────────────────────────────────────────────────────
export { useStepper } from "./useStepper";
export type { UseStepperReturn } from "./useStepper";

// ─── Types ────────────────────────────────────────────────────────────────────
export type {
  StepConfig,
  StepStatus,
  StepperProps,
  StepperHeaderProps,
  StepperContentProps,
  StepperDotProps,
  StepperConnectorProps,
} from "./Stepper.types";
