import type { SxProps, Theme } from "@mui/material";
import type { AppSnackbarType } from "./AppSnackbar.types";
import { semanticColors } from "@/theme";

const backgroundColors: Record<AppSnackbarType, string> = {
  success: semanticColors.status.success,
  error: semanticColors.status.error,
  warning: "transparent",
  info: "transparent",
  loading: semanticColors.background.primary,
};

export const SnakBarStyles: SxProps<Theme> = {
  width: "auto",
  maxWidth: "none",
  minWidth: 0,
  zIndex: 99999,
  left: "8px !important",
  right: "8px !important",
  justifyContent: "center !important",

  // رعایت فضای امن پایین صفحه در موبایل و PWA
  bottom: "calc(24px + env(safe-area-inset-bottom)) !important",

  "& .MuiSnackbarContent-root": {
    width: "100%",
    maxWidth: "328px",
    minHeight: "56px",
    boxSizing: "border-box",
    padding: "14px 12px",
    borderRadius: "18px",
    fontFamily: "inherit",
    // ظاهر شیشه‌ای و تیره
    backgroundColor: "rgba(38, 38, 38, 0.94)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",

    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 8px 28px rgba(0, 0, 0, 0.22)",

    color: semanticColors.background.default,
    direction: "rtl",
  },

  "& .MuiSnackbarContent-message": {
    width: "100%",
    minWidth: 0,
    padding: 0,
  },
};

export const SnackbarContentStyles: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
  width: "100%",
  minWidth: 0,
};

export const SnackbarCloseButtonStyles: SxProps<Theme> = {
  flex: "0 0 20px",
  width: "20px",
  height: "20px",
  padding: 0,
  color: semanticColors.text.secondary,

  "&:hover": {
    backgroundColor: "transparent",
    color: semanticColors.background.default,
  },

  "& .MuiSvgIcon-root": {
    fontSize: "18px",
  },
};

export const SnackbarMessageStyles: SxProps<Theme> = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  width: "calc(100% - 72px)",
  minWidth: 0,
  color: semanticColors.background.default,
  textAlign: "center",
  overflowWrap: "anywhere",
  lineHeight: 1.6,
};

export const SnackbarStatusIconStyles = (
  type: AppSnackbarType,
): SxProps<Theme> => {
  const isWarning = type === "warning";

  return {
    width: "20px",
    height: "20px",
    flex: "0 0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    borderRadius: isWarning ? 0 : "50%",
    backgroundColor: backgroundColors[type],
    overflow: "visible",

    "& .MuiSvgIcon-root": {
      display: "block",
      fontSize: isWarning ? "22px" : "14px",
    },
  };
};

export const SnackbarDefaultIconStyles: SxProps<Theme> = {
  fontSize: "14px",
  color: semanticColors.text.primary,
};
