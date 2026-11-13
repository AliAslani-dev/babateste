// src/components/ui/common/Stepper/components/StepperConnector.tsx
import { Box } from "@mui/material";
import { connectorWrapperSx, connectorLineSx } from "../Stepper.styles";
import type { StepperConnectorProps } from "../Stepper.types";

export function StepperConnector({ completed }: StepperConnectorProps) {
  return (
    <Box sx={connectorWrapperSx}>
      <Box sx={connectorLineSx(completed)} />
    </Box>
  );
}
