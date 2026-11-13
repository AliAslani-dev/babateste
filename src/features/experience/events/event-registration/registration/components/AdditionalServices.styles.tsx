import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const additionalServicesStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  boxSizing: "border-box",

  p: 0,
  m: 0,

  "& .additional-services-divider": {
    borderColor: semanticColors.border.default,
  },
};