"use client";

import { ButtonBase, Typography, CircularProgress } from "@mui/material";

import DeleteAccountIcon from "./DeleteAccountIcon";
import { DELETE_ACCOUNT_LABEL } from "./deleteAccountButton.constants";
import {
  deleteAccountButtonSx,
  deleteAccountTextSx,
  deleteAccountIconSx,
} from "../../styles/profile.styles";

interface DeleteAccountButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
}

export default function DeleteAccountButton({
  onClick,
  isLoading = false,
}: DeleteAccountButtonProps) {
  return (
    <ButtonBase
      onClick={onClick}
      disabled={isLoading}
      sx={deleteAccountButtonSx}
      aria-label={DELETE_ACCOUNT_LABEL}
    >
      <Typography component="span" sx={deleteAccountTextSx}>
        {DELETE_ACCOUNT_LABEL}
      </Typography>

      {isLoading ? (
        <CircularProgress size={20} sx={deleteAccountIconSx} />
      ) : (
        <DeleteAccountIcon sx={deleteAccountIconSx} />
      )}
    </ButtonBase>
  );
}