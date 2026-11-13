import type { SxProps, Theme } from "@mui/material";

export const clubPageRootSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  pt: 2,
  width: "100%",
};

export const clubSectionTitleSx: SxProps<Theme> = {
  mb: 1.5,
  textAlign: "right",
};

export const clubTicketsSectionSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};
