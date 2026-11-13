// src/features/profile/styles/profile.styles.ts
import { alpha, type SxProps, type Theme } from "@mui/material";

/* ---------- ProfileInfo Styles ---------- */
export const profileInfoContainerSx: SxProps<Theme> = (theme) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  borderRadius: "16px",
  padding: { xs: "16px 20px", sm: "16px 32px" },
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  direction: "rtl",
  width: "100%",
  boxSizing: "border-box",
  border: `1px solid ${alpha(theme.palette.primary.main, 0.16)}`,
});

export const profileAvatarSx: SxProps<Theme> = (theme) => ({
  width: { xs: 48, sm: 56 },
  height: { xs: 48, sm: 56 },
  border: `2px solid ${theme.palette.background.paper}`,
  flexShrink: 0,
});

export const profileTextWrapperSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginRight: { xs: 1.5, sm: 2 },
  overflow: "hidden",
};

/* ---------- SettingsMenu Styles ---------- */
export const settingsMenuContainerSx: SxProps<Theme> = (theme) => ({
  width: "100%",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "16px",
  overflow: "hidden",
  direction: "rtl",
  backgroundColor: "transparent",
  boxSizing: "border-box",
});

export const settingsMenuListSx: SxProps<Theme> = {
  width: "100%",
  height: "100%",
};

export const settingsMenuItemSx = (isLast: boolean): SxProps<Theme> => (theme) => ({
  width: "100%",
  position: "relative",
  "&::after": isLast
    ? {}
    : {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 20,
        right: 20,
        height: "1px",
        backgroundColor: theme.palette.divider,
      },
});

export const settingsMenuButtonSx: SxProps<Theme> = (theme) => ({
  width: "100%",
  minHeight: 56,
  px: "17px",
  py: 0,
  borderRadius: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:active": {
    backgroundColor: theme.palette.action.selected,
  },
});

export const settingsMenuIconWrapperSx: SxProps<Theme> = (theme) => ({
  minWidth: 16,
  width: 16,
  height: 18,
  margin: 0,
  marginLeft: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
});

export const settingsMenuIconSx: SxProps<Theme> = {
  width: 16,
  height: 16,
  fontSize: 16,
};

export const settingsMenuTextSx: SxProps<Theme> = {
  flex: 1,
  m: 0,
  textAlign: "right",
};

/* ---------- DeleteAccountButton Styles ---------- */
export const deleteAccountButtonSx: SxProps<Theme> = (theme) => ({
  width: "100%",
  height: 56,
  borderRadius: "16px",
  backgroundColor: alpha(theme.palette.error.main, 0.1),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  cursor: "pointer",
  border: "none",
  outline: "none",
  transition: "background-color 0.2s ease",

  "&:hover": {
    backgroundColor: alpha(theme.palette.error.main, 0.16),
  },

  "&:active": {
    backgroundColor: alpha(theme.palette.error.main, 0.22),
  },

  "&.Mui-disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
});

export const deleteAccountTextSx: SxProps<Theme> = (theme) => ({
  color: theme.palette.error.main,
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "20px",
  whiteSpace: "nowrap",
});

export const deleteAccountIconSx: SxProps<Theme> = (theme) => ({
  width: 18,
  height: 18,
  color: theme.palette.error.main,
  flexShrink: 0,
});