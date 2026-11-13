import { colors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

export const hamdamCardStyles: SxProps<Theme> = {
  boxSizing: "border-box",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1%",
  padding: "2%",
  borderRadius: "16px",
  background: colors.cyan[300],
  overflow: "visible",
};

export const hamdamCardContentStyles: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "2%",
  position: "relative",
  zIndex: 1,
  
};

export const hamdamCardButtonStyles: SxProps<Theme> = {
  marginTop: "4%",
  marginLeft: "auto",  
  marginRight: "20%",
};
export const hamdamCardImageWrapperStyles: SxProps<Theme> = {
  position: "absolute",
  left: "-15%",
  top: "50%",
  transform: "translateY(-50%)",
  width: "65%",
  height: "120%",
  zIndex: 10,
  overflow: "visible",
  pointerEvents: "none",
};