
import type { SxProps, Theme } from "@mui/material";

export const mentorsListWrapperStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "12px",
  boxSizing: "border-box",
};

export const mentorsListEmptyStyles: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  py: 6,
  boxSizing: "border-box",
};
