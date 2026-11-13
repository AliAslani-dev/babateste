// src/features/profile/components/PersonalInfoFields/PersonalInfoFields.styles.ts
import type { SxProps, Theme } from "@mui/material";

const PAGE_OFFSET = "96px";

export const personalInfoFieldsStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  minHeight: `calc(100dvh - ${PAGE_OFFSET})`,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const personalInfoSubmitWrapperStyles: SxProps<Theme> = (theme) => ({
  width: "100%",
  marginTop: "auto",
  position: "sticky",
  bottom: 0,
  zIndex: 1,
  paddingTop: "16px",
  paddingBottom: 0,
  backgroundColor: theme.palette.background.default,
  "& .MuiButton-root, & button": {
    width: "100%",
  },
});

export const profileAvatarWrapperStyles: SxProps<Theme> = {
  position: "relative",
  width: 100,
  height: 100,
  mb: 2,
  alignSelf: "center",
};

export const profileAvatarEditButtonStyles: SxProps<Theme> = (theme) => ({
  position: "absolute",
  bottom: 0,
  left: -10,
  width: 32,
  height: 32,
  borderColor: theme.palette.divider,
});

export const profileAvatarStyles: SxProps<Theme> = (theme) => ({
  width: 100,
  height: 100,
  border: "2px solid",
  borderColor: theme.palette.divider,
});

export const profileImageInputStyles: SxProps<Theme> = {
  display: "none",
};

export const retiredSectionStyles: SxProps<Theme> = (theme) => ({
  width: "100%",
  minWidth: 0,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "8px",
  border: "1px solid",
  borderColor: theme.palette.divider,
  borderRadius: "16px",
});

export const retiredSwitchWrapperStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
};

export const retiredDescriptionStyles: SxProps<Theme> = {
  color: "text.secondary",
  width: "100%",
};

export const retiredLedgerInputStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
};