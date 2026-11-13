import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const EventAboutStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "16px",
};

export const EventRegisterButtonWrapperStyles: SxProps<Theme> = {
  mt: "auto",
  pt: "16px",
  pb: "8px",
};

export const EventDetailTextStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  textAlign: "right",
  direction: "rtl",
  lineHeight: 1.8,
  overflowWrap: "anywhere",
};

export const EventImagesSectionStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

export const EventImagesTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  textAlign: "right",
};

export const EventImagesSliderStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  overflowX: "auto",
  overflowY: "hidden",
  direction: "rtl",
  pb: "4px",
  scrollbarWidth: "none",
  WebkitOverflowScrolling: "touch",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export const EventImageItemStyles: SxProps<Theme> = {
  position: "relative",
  width: "clamp(76px, 25vw, 90px)",
  aspectRatio: "1 / 1",
  height: "auto",
  flex: "0 0 clamp(76px, 25vw, 90px)",
  minWidth: 0,
  overflow: "hidden",
  borderRadius: "16px",
  cursor: "pointer",
};
export const EventImageItemClickableStyles: SxProps<Theme> = {
  ...(EventImageItemStyles as object),
  cursor: "pointer",
};

export const EventAboutDividerStyles: SxProps<Theme> = {
  width: "100%",
  height: "1px",
  flexShrink: 0,
  bgcolor: semanticColors.background.secondary,
};

// پنجره گالری
export const EventGalleryDialogStyles: SxProps<Theme> = {
  zIndex: 1600,

  "& .MuiDialog-paper": {
    m: 0,
    width: "100%",
    height: "100%",
    maxWidth: "none",
    maxHeight: "none",
    bgcolor: "#09090B",
    color: "#FFFFFF",
    overflow: "hidden",
  },
};

// نوار بالایی گالری
export const EventGalleryHeaderStyles: SxProps<Theme> = {
  position: "absolute",
  top: "env(safe-area-inset-top, 0px)",
  left: 0,
  right: 0,
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: 2,
  py: 1.5,
};

export const EventGalleryCounterStyles: SxProps<Theme> = {
  color: "#FFFFFF",
};

export const EventGalleryCloseButtonStyles: SxProps<Theme> = {
  color: "#FFFFFF",
  bgcolor: "rgba(255,255,255,0.12)",
  "&:hover": {
    bgcolor: "rgba(255,255,255,0.22)",
  },
};

// محل قرارگیری عکس
export const EventGalleryImageContainerStyles: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  p: 1,
  pt: "72px",
  pb: "calc(72px + env(safe-area-inset-bottom, 0px))",
};

// اندازه قاب عکس در تمام دستگاه‌ها
export const EventGalleryImageFrameStyles: SxProps<Theme> = {
  position: "relative",
  width: "min(100%, 360px)",
  height: "min(70dvh, 640px)",
  flex: "0 1 auto",
  overflow: "hidden",
};

// استایل مشترک دکمه‌های جابه‌جایی
export const EventGalleryNavigationButtonStyles: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#FFFFFF",
  bgcolor: "rgba(255,255,255,0.12)",
  zIndex: 2,
  "&:hover": {
    bgcolor: "rgba(255,255,255,0.22)",
  },
};

export const EventGalleryPreviousButtonStyles: SxProps<Theme> = {
  ...EventGalleryNavigationButtonStyles,
  left: { xs: 1, sm: 2 },
};

export const EventGalleryNextButtonStyles: SxProps<Theme> = {
  ...EventGalleryNavigationButtonStyles,
  right: { xs: 1, sm: 2 },
};
