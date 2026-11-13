"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Typography,
} from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

interface LogoutButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export function LogoutButton({ onClick, isLoading = false }: LogoutButtonProps) {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
    onClick();
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        disabled={isLoading}
        fullWidth
        variant="outlined"
        color="error"
        startIcon={<LogoutRoundedIcon />}
        sx={{
          py: 1.25,
          borderRadius: 3,
          fontWeight: 700,
          textTransform: "none",
        }}
      >
        {isLoading ? "در حال خروج..." : "خروج از حساب"}
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
        fullWidth
        slotProps={{
          paper: { sx: { borderRadius: 4, p: 1 } },
        }}
      >
        <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              width: 36,
              height: 36,
              borderRadius: 2,
              bgcolor: "error.50",
              color: "error.main",
            }}
          >
            <WarningAmberRoundedIcon fontSize="small" />
          </Box>
          <Typography variant="boldBase">خروج از حساب</Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            آیا مطمئنی می‌خوای از حساب کاربری خارج بشی؟
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={() => setOpen(false)}
            sx={{ borderRadius: 2, textTransform: "none" }}
          >
            انصراف
          </Button>
          <Button
            onClick={handleConfirm}
            color="error"
            variant="contained"
            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 700 }}
          >
            خروج
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}