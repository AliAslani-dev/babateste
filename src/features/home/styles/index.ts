// src/features/home/styles/index.ts
import type { SxProps, Theme } from "@mui/material/styles";

export const homePageRootSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  pt: 2,
  width: "100%",
};
export const servicesGridSx: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "8px",
};

