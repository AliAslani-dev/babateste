import { semanticColors } from "@/theme";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const PlanDetailBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  bgcolor: semanticColors.background.default,
};
export const PlanDetailHeroBox: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: 199,
  overflow: "hidden",
};
export const PlanDetailTextBox: SxProps<Theme> = {
  width: "100%",
  minHeight: 655,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  px: "8px",
  py: "16px",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  bgcolor: "background.paper",
  position: "relative",
  mt: "-20px",
};
export const PlanToggleBarBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
};
export const PlanActiveToggleBarBox: SxProps<Theme> = {
  mt: 2,
  width: "100%",
  minWidth: 0,
};
