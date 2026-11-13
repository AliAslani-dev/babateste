// src/components/ui/CardService/styles.ts
import { semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material/styles";

// ───────────────────────────────────────────────────────────
//  🎨 Colors
// ───────────────────────────────────────────────────────────
const colors = {
  border: "#C8E6F5",
  buttonIcon: "#0A8EA6",
  buttonBorder: "#C8E6F5",
  titleColor: "#09090B",
  subtitleColor: "#71717B",
} as const;

// ───────────────────────────────────────────────────────────
//  📐 Dimensions
// ───────────────────────────────────────────────────────────
const dimensions = {
  borderRadius: "12%",
  buttonBorderRadius: "50%",
} as const;

// ───────────────────────────────────────────────────────────
//  🎨 Styles
// styling
// ───────────────────────────────────────────────────────────
export const cardServiceStyles = {
  // reserves space below card for the overflowing image
  outerWrapper: {
    pb: "10%",
  } as SxProps<Theme>,

  // card: overflow visible so image can bleed below
  card: {
    borderRadius: dimensions.borderRadius,
    bgcolor: "background.paper",
    boxShadow: "none",
    border: "1.5px solid",
    borderColor: semanticColors.border.default,
    overflow: "visible",
    width: "100%",
    containerType: "inline-size",
    display: "flex",
    flexDirection: "column",
    // landscape card: height ~ 75% of width
    aspectRatio: "4 / 3",
  } as SxProps<Theme>,

  // title + subtitle — top section, grows to fill space
  textBlock: {
    pt: "10%",
    px: "8%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "3%",
    flex: 1,
  } as SxProps<Theme>,

  title: {
    color: colors.titleColor,
  } as SxProps<Theme>,

  subtitle: {
    color: colors.subtitleColor,
  } as SxProps<Theme>,

  // button (left) + image (right) — pinned to bottom
  bottomRow: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    pl: "8%",
    pr: "0",
    overflow: "visible",
  } as SxProps<Theme>,

  // image wrapper — sized box so next/image fill has a reference; bleeds below card
  imageWrapper: {
    position: "relative",
    width: "70%",
    // height driven by aspect ratio so the image has a known intrinsic size
    aspectRatio: "1 / 1",
    mb: "-11%",
    flexShrink: 0,
  } as SxProps<Theme>,

  button: {
    border: "1.5px solid",
    borderColor: semanticColors.border.default,
    color: colors.buttonIcon,
    borderRadius: "45%",
    width: "26%",
    height: "auto",
    aspectRatio: "1 / 1",
    bgcolor: "background.paper",
    flexShrink: 0,
    alignSelf: "center",
    mb: "8%",
    p: 0,
    fontSize: "clamp(16px, 8cqw, 28px)",
    "& svg": { fontSize: "inherit" },
    "&:hover": { bgcolor: "background.paper" },
  } as SxProps<Theme>,
};
