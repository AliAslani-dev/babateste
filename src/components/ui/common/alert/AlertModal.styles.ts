import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const AlertModalDialogStyles: SxProps<Theme> = {
  "& .MuiDialog-paper": {
    width: "100%",
    maxWidth: "480px",
    borderRadius: "24px",
    padding: "24px 32px",
    margin: "24px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0, // spacing is controlled per element below
    direction: "rtl",
    overflow: "visible",
    boxShadow: "none",
    border: "1px solid #E8E8E8", // swap for your border token if you have one
  },

  "& .MuiBackdrop-root": {
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
};

export const AlertModalCloseButtonStyles: SxProps<Theme> = {
  position: "absolute",
  top: "30px",
  insetInlineEnd: "auto",
  left: "16px", // design has the close button on the left
  right: "auto",
  width: "28px",
  height: "28px",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: semanticColors.text.secondary,
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: semanticColors.secondary.hover,
  },
};

export const AlertModalCloseIconStyles: SxProps<Theme> = {
  fontSize: "18px",
};

export const AlertModalIconWrapperStyles: SxProps<Theme> = {
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: semanticColors.status.warning,
  flexShrink: 0,
  m: 0,
  mb: "16px",
};

export const AlertModalDefaultIconStyles: SxProps<Theme> = {
  fontSize: "32px",
  color: semanticColors.background.default,
};

export const AlertModalTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  textAlign: "center",
  m: 0,
  mb: "8px",
};

export const AlertModalDescriptionStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  textAlign: "center",
  m: 0,
  mb: "16px",
};

export const AlertModalButtonsRowStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  width: "100%",
  m: 0,
};

const buttonBase = {
  flex: 1,
  height: "48px",
  borderRadius: "100px",
  border: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:active": {
    opacity: 0.85,
  },
} as const;

export const AlertModalConfirmButtonStyles: SxProps<Theme> = {
  ...buttonBase,
  backgroundColor: semanticColors.background.primary,
  color: semanticColors.text.inverse,
};

export const AlertModalCancelButtonStyles: SxProps<Theme> = {
  ...buttonBase,
  backgroundColor: semanticColors.secondary.default,
  color: semanticColors.text.primary,
};