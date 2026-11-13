import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";
import type { StepStatus } from "./Stepper.types";

export const STEP_DOT_SIZE = 24;
export const STEP_DOT_INNER_SIZE = 6;
export const STEP_BORDER_WIDTH = 2;
export const CONNECTOR_HEIGHT = 2;
export const LABEL_GAP = 10;
export const LABEL_AREA_HEIGHT = 40;

export const stepperRootSx: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const stepperHeaderSx: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "flex-start",
  position: "relative",
  paddingInline: `${STEP_DOT_SIZE / 2}px`,
  paddingBottom: `${LABEL_AREA_HEIGHT}px`,
  boxSizing: "border-box",
};

export const stepColSx: SxProps<Theme> = {
  position: "relative",
  width: STEP_DOT_SIZE,
  height: STEP_DOT_SIZE,
  flexShrink: 0,
  zIndex: 1,
};

export const stepLabelSx = (_status: StepStatus): SxProps<Theme> => ({
  position: "absolute",
  top: `${STEP_DOT_SIZE + LABEL_GAP}px`,
  left: "50%",
  transform: "translateX(-50%)",
  color: semanticColors.text.secondary,
  whiteSpace: "nowrap",
  textAlign: "center",
});

export const stepDotOuterSx = (status: StepStatus): SxProps<Theme> => ({
  width: STEP_DOT_SIZE,
  height: STEP_DOT_SIZE,
  boxSizing: "border-box",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  backgroundColor:
    status === "completed"
      ? semanticColors.action.primary
      : semanticColors.background.default,
  border: `${STEP_BORDER_WIDTH}px solid ${
    status === "completed" || status === "active"
      ? semanticColors.action.primary
      : semanticColors.border.secondary
  }`,
  color: "#fff",
  "& svg": {
    width: 18,
    height: 18,
  },
  transition: "background-color 0.25s ease, border-color 0.25s ease",
});

export const stepDotInnerSx = (status: StepStatus): SxProps<Theme> => ({
  width: STEP_DOT_INNER_SIZE,
  height: STEP_DOT_INNER_SIZE,
  borderRadius: "50%",
  backgroundColor:
    status === "active"
      ? semanticColors.action.primary
      : semanticColors.border.secondary,
  transition: "background-color 0.25s ease",
});

export const connectorWrapperSx: SxProps<Theme> = {
  flex: 1,
  alignSelf: "flex-start",
  marginTop: `${STEP_DOT_SIZE / 2 - CONNECTOR_HEIGHT / 2}px`,
};

export const connectorLineSx = (filled: boolean): SxProps<Theme> => ({
  height: CONNECTOR_HEIGHT,
  width: "100%",
  backgroundColor: filled
    ? semanticColors.action.primary
    : semanticColors.border.secondary,
  transition: "background-color 0.25s ease",
});

export const stepperContentSx: SxProps<Theme> = {
  width: "100%",
};
