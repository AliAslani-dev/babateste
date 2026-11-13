import type { SxProps, Theme } from "@mui/material";

export const userHealthSectionStyles: SxProps<Theme> = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,

  display: "flex",
  flexDirection: "column",

  gap: "12px",

  margin: "16px 0 0",
  padding: 0,

  boxSizing: "border-box",
};

export const userHealthTitleStyles: SxProps<Theme> = {
  margin: 0,
  padding: 0,
};

export const userHealthGridStyles: SxProps<Theme> = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,

  display: "grid",

  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",

  columnGap: "8px",
  rowGap: "8px",

  margin: 0,
  padding: 0,

  boxSizing: "border-box",

  "& > *": {
    width: "100%",
    minWidth: 0,
    maxWidth: "100%",
  },
};