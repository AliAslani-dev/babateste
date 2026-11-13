import { SxProps, Theme } from "@mui/material";

export const FavoritesLoadingStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  py: 6,
};

export const FavoritesErrorContainerStyles: SxProps<Theme> = {
  px: 2,
  py: 4,
};

export const FavoritesRetryStyles: SxProps<Theme> = {
  cursor: "pointer",
  mt: 1,
};

export const FavoritesContainerStyles: SxProps<Theme> = {
  width: "100%",
  mx: "auto",
  px: 0,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const FavoritesEmptyTextStyles: SxProps<Theme> = {
  color: "text.secondary",
};