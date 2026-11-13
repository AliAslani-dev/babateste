import { semanticColors } from "@/theme";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const EventDetailBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  bgcolor: semanticColors.background.default,
};
export const EventDetailHeroBox: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: 199,
  overflow: "hidden",
};
export const EventDetailTextBox: SxProps<Theme> = {
  width: "100%",
  flex: 1,
  minHeight: 655,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  px: "20px",
  py: "16px",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  bgcolor: "background.paper",
  position: "relative",
  mt: "-20px",
};
export const EventToggleBarBox: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  flex: 1,
};
export const EventActiveToggleBarBox: SxProps<Theme> = {
  mt: 2,
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  flex: 1,
};
