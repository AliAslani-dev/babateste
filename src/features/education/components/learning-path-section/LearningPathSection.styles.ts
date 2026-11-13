import type { SxProps, Theme } from "@mui/material";

export const learningPathsStyles: SxProps<Theme> = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,

  display: "flex",
  flexDirection: "column",

  gap: "12px",
  padding: "16px 0 0",
  margin: 0,

  boxSizing: "border-box",
};

export const learningPathsGridStyles: SxProps<Theme> = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,

  display: "grid",

  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",

  columnGap: "4px",
  rowGap: "8px",

  margin: 0,
  padding: 0,

  boxSizing: "border-box",

  overflow: "hidden",

  "& > *": {
    width: "100%",
    minWidth: 0,
    maxWidth: "100%",
    margin: 0,
  },
};
