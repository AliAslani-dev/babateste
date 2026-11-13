import type { SxProps, Theme } from "@mui/material";

export const upcomingEventsSectionStyles: SxProps<Theme> = {
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

export const upcomingEventsHeaderStyles: SxProps<Theme> = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  margin: 0,
  padding: 0,

  boxSizing: "border-box",
};

export const upcomingEventsTitleStyles: SxProps<Theme> = {
  margin: 0,
  padding: 0,

  minWidth: 0,
};

export const upcomingEventsLinkStyles: SxProps<Theme> = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  gap: "2px",

  margin: 0,
  padding: 0,

  border: 0,
  background: "transparent",

  color: "inherit",
  font: "inherit",

  cursor: "pointer",
  whiteSpace: "nowrap",

  flexShrink: 0,

  "& svg": {
    width: "20px",
    height: "20px",
  },
};