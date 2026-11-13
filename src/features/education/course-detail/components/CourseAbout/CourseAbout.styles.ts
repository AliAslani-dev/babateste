import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const CourseAboutStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding:"10px"
};

export const CourseDetailTextStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  direction: "rtl",
  lineHeight: 1.8,
  overflowWrap: "anywhere",
  textAlign: "justify",
};

export const LearningOutcomesSectionStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const LearningOutcomesTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  textAlign: "right",
};

export const LearningOutcomesListStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
  minWidth: 0,
};

export const LearningOutcomeItemStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  width: "100%",
  minWidth: 0,
};

export const LearningOutcomeCheckStyles: SxProps<Theme> = {
  width: 22,
  height: 22,
  flex: "0 0 22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${semanticColors.action.primary}`,
  borderRadius: "50%",
  color: semanticColors.action.primary,
};

export const LearningOutcomeTextStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  textAlign: "justify",
  lineHeight: 1.8,
  overflowWrap: "anywhere",
};

export const RequestButtonStyles: SxProps<Theme> = {
  width: "100%",
  height: 40,
  minHeight: 40,
  boxSizing: "border-box",

  px: "16px",
  py: "8px",

  borderRadius: "16px",
  bgcolor: semanticColors.action.primary,
  color: semanticColors.background.default,
};
