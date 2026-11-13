
import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const CourseDetailBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  bgcolor: semanticColors.background.default,
};

export const CourseDetailHeroBox: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: 199,
  overflow: "hidden",
};

export const CourseDetailTextBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  minHeight: 655,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  px: "15px",
  py: "16px",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  bgcolor: "background.paper",
  position: "relative",
  mt: "-20px",
};

export const CourseHeadingBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

export const CourseTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  textAlign: "right",
  overflowWrap: "anywhere",
};

export const CourseSubtitleStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  textAlign: "right",
  lineHeight: 1.8,
  overflowWrap: "anywhere",
};

export const CourseToggleBarBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
};

export const CourseActiveToggleBarBox: SxProps<Theme> = {
  mt: 2,
  width: "100%",
  minWidth: 0,
};
