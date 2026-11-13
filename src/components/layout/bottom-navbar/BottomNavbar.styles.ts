import { semanticColors } from "@/theme";

export const BOTTOM_NAV_HEIGHT = 77;

export const bottomNavbarStyles = {
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: `calc(${BOTTOM_NAV_HEIGHT}px + var(--safe-bottom))`,
    display: "flex",
    alignItems: "center",
    borderTop: `1px solid ${semanticColors.border.default}`,
    backgroundColor:semanticColors.background.default,
    zIndex: 100,
    px: "16px",
    pb: "var(--safe-bottom)",
    boxSizing: "border-box",
    transform: "translateZ(0)",
    willChange: "transform",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",

  },

  list: {
    width: "100%",
    height: `${BOTTOM_NAV_HEIGHT}px`,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  item: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    textDecoration: "none",
    border: 0,
    padding: 0,
    margin: 0,
    background: "transparent",
    cursor: "pointer",
    // color: "#09090B",
    color:semanticColors.text.primary,
    WebkitTapHighlightColor: "transparent",
    touchAction: "manipulation",
    transition: "color 150ms ease",
    "& svg": {
      display: "block",
      flexShrink: 0,
      width: 22,
      height: 22,
    },
  },

  itemActive: {
    // color: "#0A8EA6",
    color: semanticColors.action.primary
  },

  title: {
    color: "inherit",
    fontSize: "12px",
    lineHeight: "16px",
  },

  activeTitle: {
    // color: "#0A8EA6",
     color: semanticColors.action.primary
  },
} as const;