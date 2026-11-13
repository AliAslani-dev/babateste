import type { SxProps, Theme } from "@mui/material";

export const containerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  direction: "rtl",
  gap: 1,
  // borderRadius: "24px",
  border: "1px solid",
  borderColor: "divider",
  bgcolor: "background.paper",
  p: "24px 14px",
  width: "100%",
  maxWidth: "480px",
  boxSizing: "border-box",
  boxShadow: "none",
};

export const iconWrapperStyles: SxProps<Theme> = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  bgcolor: "transparent",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

export const contentStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1.5, // 12px between title row and description
  flex: 1,
  minWidth: 0,
};

export const headerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1,
};

export const metaStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 0.75,
};

export const dotStyles: SxProps<Theme> = {
  width: 10,
  height: 10,
  borderRadius: "50%",
  bgcolor: "primary.main",
  flexShrink: 0,
};

export const titleStyles: SxProps<Theme> = {
  textAlign: "right",
};

export const descriptionStyles: SxProps<Theme> = {
  textAlign: "right",
  lineHeight: "24px",
};