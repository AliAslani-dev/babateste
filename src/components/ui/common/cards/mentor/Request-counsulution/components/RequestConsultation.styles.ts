import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const RequestConsultaionCardStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "column",
  gap: "10px",

  padding: "12px 16px",

  direction: "rtl",
  backgroundColor: semanticColors.background.default,
  border: `1.5px solid ${semanticColors.border.default}`,
  borderRadius: "16px",
};

export const RequestConsultaionHeaderStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "10px",
  width: "100%",
  minWidth: 0,
};

export const RequestConsultaionImageStyles: SxProps<Theme> = {
  width: "72px",
  height: "72px",
  minWidth: "72px",
  flexShrink: 0,
  borderRadius: "50%",
  objectFit: "cover",
  position: "relative",
  overflow: "hidden",
};

export const RequestConsultaionInfoStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "4px",
  textAlign: "right",
  paddingTop: "4px",
};

export const RequestConsultaionNameStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
};

export const RequestConsultaionTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
};

export const RequestConsultaionSpecialtyStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
};

export const RequestConsultaionMetaStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "6px",
  direction: "rtl",
};

export const RequestConsultaionBadgeStyles: SxProps<Theme> = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",

  height: "32px",
  minWidth: 0,
  boxSizing: "border-box",
  padding: "4px 10px",

  border: `1px solid ${semanticColors.border.default}`,
  borderRadius: "20px",

  color: semanticColors.text.primary,

  whiteSpace: "nowrap",
  flexShrink: 1,
};

export const RequestConsultaionRatingStyles: SxProps<Theme> = {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",

  height: "32px",
  minWidth: "56px",
  boxSizing: "border-box",
  padding: "4px 8px",

  border: "none",
  borderRadius: "20px",
  backgroundColor: "#FFEDD4",
  color: "#262626",
  flexShrink: 0,
};

export const RequestConsultaionRatingIconStyles: SxProps<Theme> = {
  width: "24px",
  height: "24px",
  minWidth: "24px",
  borderRadius: "50%",
  backgroundColor: semanticColors.background.primary,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  flexShrink: 0,

  "& svg": {
    width: "14px",
    height: "14px",
    flexShrink: 0,
  },
};
export const RequestConsultaionButtonStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  height: "44px",
  minHeight: "44px",
  flexShrink: 0,

  padding: "8px 12px",
  border: "none",
  borderRadius: "20px",

  backgroundColor: semanticColors.background.primary,
  color: semanticColors.background.default,

  cursor: "pointer",
  whiteSpace: "nowrap",
};
