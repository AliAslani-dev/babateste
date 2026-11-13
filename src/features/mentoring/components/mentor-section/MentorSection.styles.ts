import type { SxProps, Theme } from "@mui/material";

export const mentorSectionStyles: SxProps<Theme> = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,

  display: "flex",
  flexDirection: "row",

  gap: "8px",

  margin: "16px 0 0",
  padding: 0,

  boxSizing: "border-box",

  "& > *": {
    flex: "1 1 0",
    minWidth: 0,
    width: "100%",
  },
};