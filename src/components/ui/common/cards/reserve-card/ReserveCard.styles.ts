import type { SxProps, Theme } from "@mui/material";

export const cardStyles = (imageSrc: string): SxProps<Theme> => ({
  width: "100%",
  borderRadius: "20px",
  boxShadow: "none",
  overflow: "hidden",
  backgroundImage: `url(${imageSrc})`,
  backgroundSize: "cover",
  backgroundPosition: "left top", // keeps the head fully visible instead of center-cropping
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "row",
  direction: "rtl",
  minHeight: 160,
});

export const contentWrapperStyles: SxProps<Theme> = {
  width: "58%",
  marginLeft: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  p: "14px 10px 10px 0",
  gap: 1.25,
};

export const textSectionStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 0.75,
};

export const infoRowStyles: SxProps<Theme> = {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center", // centered over the button, as in Figma
  gap: 1.25,
  direction: "rtl",
  borderRadius: "12px",
  px: 1.5,
  py: 0.75,
  bgcolor: "#fff",
};

export const infoIconStyles: SxProps<Theme> = {
  fontSize: 16,
  color: "text.primary",
};

export const actionButtonStyles: SxProps<Theme> = {
  width: "100%",
  height: 38,
  borderRadius: "50px",
  py: 0,
};