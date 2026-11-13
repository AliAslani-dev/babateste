import { semanticColors } from "@/theme";
import { SxProps, Theme } from "@mui/material";

export const cardStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,
  width: "100%",       
  maxWidth: "none",     
  height: 265,
  borderRadius: "16px",
  border: `2px solid  ${semanticColors.border.default}`,
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  p: 2,
  position: "relative",
  overflow: "hidden",
  fontFamily: "sans-serif",
};
export const topSectionStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 1.5,
  mb: 2,
  width: "100%",
};

export const imageWrapperStyles: SxProps<Theme> = {
  width: 90,
  height: 90,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const titleStyles: SxProps<Theme> = {
  textAlign: "center",
  lineHeight: 1.4,
  letterSpacing: "0.2px",
  mb: 0.5,
};

export const descriptionStyles: SxProps<Theme> = {
  textAlign: "center",
  letterSpacing: "0.3px",
  fontSize: "12px",   
  px: 0.5,             
};