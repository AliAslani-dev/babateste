"use client";

import { forwardRef } from "react";
import { Box, Portal, Snackbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import type { SlideProps } from "@mui/material/Slide";
import type { AppSnackbarProps } from "./AppSnackbar.types";

import {
  SnakBarStyles,
  SnackbarContentStyles,
  SnackbarCloseButtonStyles,
  SnackbarMessageStyles,
  SnackbarStatusIconStyles,
} from "./AppSnakBar.styles";

import { defaultSnackbarIcons } from "./AppSnackBar.icons";
import { IconButton } from "../Button";

const SnackbarSlide = forwardRef<unknown, SlideProps>(
  function SnackbarSlide(props, ref) {
    return <Slide {...props} ref={ref} direction="up" />;
  },
);

SnackbarSlide.displayName = "SnackbarSlide";

export default function AppSnackbar({
  open,
  message,
  type = "success",
  icon,
  onClose,
  autoHideDuration = 2500,
}: AppSnackbarProps) {
  return (
    <Portal>
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={(_, reason) => {
          if (reason !== "clickaway") {
            onClose();
          }
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        slots={{
          transition: SnackbarSlide,
        }}
        slotProps={{
          transition: {
            timeout: {
              enter: 350,
              exit: 250,
            },
          },
        }}
        sx={SnakBarStyles}
        message={
          <Box sx={SnackbarContentStyles}>
            <IconButton
              aria-label="بستن پیام"
              onClick={onClose}
              color="neutral"
              appearance="ghost"
              size="sm"
              shape="square"
              sx={SnackbarCloseButtonStyles}
            >
              <CloseIcon />
            </IconButton>
            
            <Typography variant="mediumSm" sx={SnackbarMessageStyles}>
              {message}
            </Typography>
            <Box sx={SnackbarStatusIconStyles(type)}>
              {icon ?? defaultSnackbarIcons[type]}
            </Box>
          </Box>
        }
      />
    </Portal>
  );
}
