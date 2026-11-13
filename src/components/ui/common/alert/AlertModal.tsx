"use client";

import { Box, Dialog, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import type { AlertModalProps } from "./AlertModal.types";
import {
  AlertModalDialogStyles,
  AlertModalCloseButtonStyles,
  AlertModalCloseIconStyles,
  AlertModalIconWrapperStyles,
  AlertModalDefaultIconStyles,
  AlertModalTitleStyles,
  AlertModalDescriptionStyles,
  AlertModalButtonsRowStyles,
  AlertModalConfirmButtonStyles,
  AlertModalCancelButtonStyles,
} from "./AlertModal.styles";

export default function AlertModal({
  open,
  onClose,
  icon,
  title,
  description,
  confirmButton,
  cancelButton,
  children,
}: AlertModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-modal-title"
      aria-describedby="alert-modal-description"
      sx={AlertModalDialogStyles}
    >
      {/* Close button */}
      <Box
        component="button"
        type="button"
        aria-label="بستن"
        onClick={onClose}
        sx={AlertModalCloseButtonStyles}
      >
        <CloseRoundedIcon sx={AlertModalCloseIconStyles} />
      </Box>

      {/* Icon */}
      <Box sx={AlertModalIconWrapperStyles}>
        {icon ?? <WarningAmberRoundedIcon sx={AlertModalDefaultIconStyles} />}
      </Box>

      {/* Title */}
      <Typography
        id="alert-modal-title"
        variant="demiboldSm"
        component="h2"
        sx={AlertModalTitleStyles}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        id="alert-modal-description"
        variant="regularXs"
        component="p"
        sx={AlertModalDescriptionStyles}
      >
        {description}
      </Typography>
      {children}
      {/* Buttons */}
      <Box sx={AlertModalButtonsRowStyles}>
        {/* Confirm — active/primary (right side in RTL) */}
        <Box
          component="button"
          type="button"
          onClick={confirmButton.onClick}
          sx={AlertModalConfirmButtonStyles}
        >
          <Typography
            variant="mediumXs"
            component="span"
            sx={{ color: "inherit", lineHeight: "inherit" }}
          >
            {confirmButton.label}
          </Typography>
        </Box>

        {/* Cancel — inactive/secondary */}
        <Box
          component="button"
          type="button"
          onClick={cancelButton.onClick}
          sx={AlertModalCancelButtonStyles}
        >
          <Typography
            variant="mediumXs"
            component="span"
            sx={{ color: "inherit", lineHeight: "inherit" }}
          >
            {cancelButton.label}
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
}
