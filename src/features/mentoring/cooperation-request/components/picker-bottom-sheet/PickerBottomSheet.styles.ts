import type { SxProps, Theme } from "@mui/material";

export const backdropSx: SxProps<Theme> = {
  position: "fixed",
  inset: 0,
  zIndex: 1200,
  bgcolor: "rgba(0,0,0,0.4)",
};

export const sheetSx = (open: boolean): SxProps<Theme> => ({
  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: open
    ? "translateX(-50%) translateY(0)"
    : "translateX(-50%) translateY(100%)",
  width: "100%",
  maxWidth: "var(--app-max-width, 480px)",
  zIndex: 1300,
  bgcolor: "background.paper",
  borderRadius: "20px 20px 0 0",
  overflow: "hidden",
  transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
  display: "flex",
  flexDirection: "column",
  maxHeight: "80vh",
  pb: "calc(16px + var(--safe-bottom, 0px))",
});

export const handleWrapperSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  pt: "12px",
  pb: "4px",
  flexShrink: 0,
};

export const handleBarSx: SxProps<Theme> = {
  width: 36,
  height: 4,
  borderRadius: 2,
  bgcolor: "divider",
};

export const headerRowSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  direction: "rtl",
  px: "16px",
  pb: "12px",
  flexShrink: 0,
};

export const headerTitleSx: SxProps<Theme> = {
  fontSize: "16px",
  fontWeight: 700,
  color: "text.primary",
};

export const closeButtonSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: "text.secondary",
  p: "4px",
  "&:active": { opacity: 0.7 },
};

export const searchOuterSx: SxProps<Theme> = {
  px: "16px",
  pb: "12px",
  flexShrink: 0,
};

export const searchRowSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  direction: "rtl",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "20px",
  px: "12px",
  height: 36,
  backgroundColor: "background.default",
};

export const searchIconWrapperSx: SxProps<Theme> = {
  color: "text.secondary",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  "& svg": { width: 18, height: 18 },
};

export const searchInputSx: SxProps<Theme> = {
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  fontFamily: "inherit",
  fontSize: "12px",
  color: "text.primary",
  textAlign: "right",
  "::placeholder": { color: "text.secondary" },
};

export const scrollableContentSx: SxProps<Theme> = {
  overflowY: "auto",
  px: "16px",
  flex: 1,
};

export const popularSectionWrapperSx: SxProps<Theme> = {
  mb: "16px",
};

export const sectionTitleSx: SxProps<Theme> = {
  display: "block",
  mb: "8px",
  textAlign: "right",
  fontSize: "15px",
  fontWeight: 700,
  color: "text.primary",
};

export const allSectionTitleSx: SxProps<Theme> = {
  display: "block",
  mb: "4px",
  textAlign: "right",
  fontSize: "15px",
  fontWeight: 700,
  color: "text.primary",
};

export const popularChipsGridSx: SxProps<Theme> = {
  display: "grid",
  direction: "rtl",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "6px 8px",
};

export const popularChipSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  border: "2px solid",
  borderColor: "divider",
  borderRadius: "18px",
  px: "8px",
  height: 36,
  backgroundColor: "background.paper",
  fontFamily: "inherit",
  fontSize: "11px",
  color: "text.primary",
  cursor: "pointer",
  whiteSpace: "nowrap",
  "&:active": { opacity: 0.7 },
};

export const listSx: SxProps<Theme> = {
  listStyle: "none",
  m: 0,
  p: 0,
};

export const listRowSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  direction: "rtl",
  gap: "6px",
  height: 39,
  cursor: "pointer",
  borderBottom: "1px solid",
  borderColor: "divider",
  "&:active": { backgroundColor: "action.hover" },
};

export const rowIconWrapperSx: SxProps<Theme> = {
  order: -1,
  color: "text.primary",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  "& svg": { width: 16, height: 16 },
};

export const rowLabelSx: SxProps<Theme> = {
  color: "text.primary",
  fontSize: "12px",
};

export const emptyStateSx: SxProps<Theme> = {
  color: "text.secondary",
  textAlign: "center",
  py: "24px",
  display: "block",
};
