import { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

const NOTCH_RADIUS = 16;
const PADDING_X = 24;
const CARD_RADIUS = 24;

// Coupon-style cut-outs on both side edges of one corner row
const notchMask = (y: "0" | "100%") => {
  const stop = `transparent ${NOTCH_RADIUS}px, #000 ${NOTCH_RADIUS + 0.5}px`;
  return [
    `radial-gradient(circle at 0 ${y}, ${stop}) left / 51% 100% no-repeat`,
    `radial-gradient(circle at 100% ${y}, ${stop}) right / 51% 100% no-repeat`,
  ].join(", ");
};

// drop-shadow follows the notched alpha shape (box-shadow wouldn't)
export const ticketWrapperStyles: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  filter: "drop-shadow(0 2px 12px rgba(0, 0, 0, 0.08))",
};

export const ticketCardStyles: SxProps<Theme> = {
  width: "100%",
  boxSizing: "border-box",
  background: "transparent",
  border: "none",
  boxShadow: "none",
  overflow: "visible",
  display: "flex",
  flexDirection: "column",
};

export const topSectionStyles: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  flexDirection: "row-reverse", // RTL: first child (image) goes to the left
  alignItems: "flex-start",
  gap: "16px",
  padding: `16px ${PADDING_X}px`,
  direction: "rtl",
  background: semanticColors.background.default,
  borderRadius: `${CARD_RADIUS}px ${CARD_RADIUS}px 0 0`,
  WebkitMask: notchMask("100%"),
  mask: notchMask("100%"),
  // dashed divider sits on the seam, between the notches
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: NOTCH_RADIUS,
    right: NOTCH_RADIUS,
    height: "2px",
    backgroundImage: `repeating-linear-gradient(to right, ${semanticColors.border.secondary} 0 12px, transparent 12px 22px)`,
  },
};

export const imageWrapperStyles: SxProps<Theme> = {
  flexShrink: 0,
  width: 124,
  height: 98,
  borderRadius: "16px",
  overflow: "hidden",
  position: "relative",
};

export const contentStyles: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // RTL: flex-start = right edge
  gap: "8px",
  paddingTop: "4px",
};

export const bottomSectionStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `26px ${PADDING_X}px 18px`,
  direction: "rtl",
  background: semanticColors.background.default,
  borderRadius: `0 0 ${CARD_RADIUS}px ${CARD_RADIUS}px`,
  WebkitMask: notchMask("0"),
  mask: notchMask("0"),
};

export const pointContainerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "6px",
};

export const detailsLinkStyles: SxProps<Theme> = {
  color: semanticColors.text.primaryColor, // should be the teal-blue from the design
  cursor: "pointer",
  background: "none",
  border: "none",
  padding: 0,
  lineHeight: 1.6,
  fontFamily: "inherit",
};