import { semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

export const cardStyles: SxProps<Theme> = {
  width: "200px",
  borderRadius: "20px",
  border: `2px solid ${semanticColors.border.default}`,
  boxShadow: "none",
  overflow: "hidden",
  bgcolor: semanticColors.background.default
};

export const imageWrapperStyles: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: 110, // ⬅️ کمتر شد (قبلاً 145~185 بود)
  overflow: "hidden",
};

export const contentStyles: SxProps<Theme> = {
  px: 1.25,
  pt: 1,
  pb: 1.25,
  
display: "flex",
flexDirection: "column",
};

export const titleStyles: SxProps<Theme> = {
  textAlign: "center", // ⬅️ وسط‌چین
  fontSize: 15,        // ⬅️ فیکس شد
  fontWeight: 700,
  color: "#111",
  lineHeight: 1.7,
  mb: 0.75,
  
height: "51px",
overflow: "hidden",
display: "-webkit-box",
WebkitBoxOrient: "vertical",
WebkitLineClamp: 2,
  
};

export const infoRowStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop : 1,
  gap: 0.5,
  direction: "rtl",
};
export const infoIconStyles: SxProps<Theme> = {
  fontSize: 17,
  color: "#757575",
};

export const infoTextStyles: SxProps<Theme> = {
  fontSize: 11,
  color: "#757575",
  whiteSpace: "nowrap",
};

export const dateRowStyles: SxProps<Theme> = {
  ...infoRowStyles,
  mb: 0.75,
};

export const locationRowStyles: SxProps<Theme> = {
  ...infoRowStyles,
  mb: 1.25,
};

export const actionButtonStyles: SxProps<Theme> = {
  width: "100%",
};