import type { SxProps, Theme } from "@mui/material";

export const sliderStyles: SxProps<Theme> = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  position: "relative",
  boxSizing: "border-box",
  overflow: "visible",
};

export const sliderViewportStyles: SxProps<Theme> = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  position: "relative",
  boxSizing: "border-box",
};

export const sliderTrackWrapperStyles: SxProps<Theme> = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  overflow: "hidden",
  position: "relative",
  boxSizing: "border-box",
  userSelect: "none",
  touchAction: "pan-y",
};

export const sliderTrackStyles: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  transition: "transform 300ms ease",
  willChange: "transform",
  direction: "rtl",
};


export const sliderItemStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: "100%",
  maxWidth: "100%",
  flex: "0 0 100%",
  boxSizing: "border-box",
  overflow: "hidden",
  direction: "ltr",
  padding: "0 6px",
};

export const sliderControlsStyles: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "-12px",
  right: "-12px",
  transform: "translateY(-50%)",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: 0,
  pointerEvents: "none",

  zIndex: 20,
  boxSizing: "border-box",

  "& > button": {
    pointerEvents: "auto",
    position: "relative",
    zIndex: 21,
  },
};

export const sliderPaginationInsideStyles: SxProps<Theme> = {
  position: "absolute",
  left: "50%",
  bottom: "8px",
  transform: "translateX(-50%)",
  zIndex: 3,
};

export const sliderPaginationOutsideStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "8px",
};
