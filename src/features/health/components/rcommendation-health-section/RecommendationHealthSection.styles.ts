import type { SxProps, Theme } from "@mui/material";

export const recommendationSectionStyles: SxProps<Theme> = {
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




export const recommendationGridStyles: SxProps<Theme> = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,

  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",

  columnGap: "4px",
  rowGap: "8px",

  margin: 0,
  padding: 0,

  boxSizing: "border-box",

  "& > *": {
    width: "100%",
    minWidth: 0,
    maxWidth: "100%",
    margin: 0,
  },
};