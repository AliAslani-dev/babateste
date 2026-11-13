import { colors, semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

export const navbarHomeHeaderStyles: Record<
  string,
  SxProps<Theme>
> = {
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor:"#FFFFFF"
    height:74,
    backgroundColor:semanticColors.background.default
  },

  brand: {
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    gap: 0.5,
  },

  logo: {
    flexShrink: 0,
  },

  profileActions: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 1,
    direction: "ltr",
  },
  avatar: {
    width: 32,
    height: 32,
    p: 0,
    border: 0,
    cursor: "pointer",
    // bgcolor: "#E4E4E7",
    backgroundColor: colors.neutral[100]
  },
};
