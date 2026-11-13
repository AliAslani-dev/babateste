import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const watchPageWrapperStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: { xs: 2, md: 3 },
  p: { xs: 2, md: 3 },
};

export const watchPageMainStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  minWidth: 0,
  width: "100%",
};

export const watchPageHeaderStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  p: 2,
  borderRadius: "16px",
  bgcolor: semanticColors.background.secondary,
  border: "1px solid",
  borderColor: "divider",
};

export const watchPageCourseTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  textAlign: "right",
  lineHeight: 1.4,
};

export const watchPageMetaStyles: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1.5,
  color: semanticColors.text.secondary,
  textAlign: "right",
};

export const watchPageMetaItemStyles: SxProps<Theme> = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.5,
};

export const watchPageSidebarStyles: SxProps<Theme> = {
  minWidth: 0,
  width: "100%",
};

export const watchPageEmptyStyles: SxProps<Theme> = {
  textAlign: "center",
  py: 8,
  px: 2,
};