import type { SxProps, Theme } from "@mui/material";

export const pageRootSx: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  pt: "16px",
  pb: 0,
  height: "100%",
  minHeight: "100%",
  boxSizing: "border-box",
};

export const stepperFillSx: SxProps<Theme> = {
  flex: 1,
  minHeight: 0,
};

export const stepperContentFillSx: SxProps<Theme> = {
  display: "flex",
  flex: 1,
  minHeight: 0,
  flexDirection: "column",
};
