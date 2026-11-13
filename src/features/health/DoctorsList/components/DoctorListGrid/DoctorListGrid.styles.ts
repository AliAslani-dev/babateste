import type { SxProps, Theme } from "@mui/material";

export const doctorsListGridWrapperStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  width: "100%",
  minWidth: 0,
  alignItems: "stretch",
  marginTop:"20px"
};

export const doctorsListGridEmptyStyles: SxProps<Theme> = {
  width: "100%",
  py: 4,
  display: "flex",
  justifyContent: "center",
};