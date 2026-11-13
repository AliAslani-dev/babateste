import type { SxProps, Theme } from "@mui/material";

export const formSx: SxProps<Theme> = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

export const headerWrapperSx: SxProps<Theme> = {
  mb: "24px",
};

export const headerTitleSx: SxProps<Theme> = {
  display: "block",
  mb: "6px",
  textAlign: "right",
};

export const headerSubtitleSx: SxProps<Theme> = {
  color: "text.secondary",
  textAlign: "right",
};

export const fieldsWrapperSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  flex: 1,
};

export const fieldLabelSx: SxProps<Theme> = {
  display: "block",
  mb: "8px",
  textAlign: "right",
};

export const submitWrapperSx: SxProps<Theme> = {
  mt: "auto",
  pt: "32px",
};
