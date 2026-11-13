import { semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

export const navbarHomeStyles: Record<
  string,
  SxProps<Theme>
> = {
  root: {
    width: "100%",
    minHeight: 96,
    px: 2,
    py: 1.5,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap:2,
    backgroundColor:"#FCFDFF"
  },
};