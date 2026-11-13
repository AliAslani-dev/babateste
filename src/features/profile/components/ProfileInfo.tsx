// src/features/profile/components/ProfileInfo.tsx
"use client";

import { AppSnackbar } from "@/components/ui/AppSnackBar";
import { useMe } from "@/features/auth";
import { Box, Typography, Avatar, alpha } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

export default function ProfileInfo() {
  const { data: profile, isLoading, isError } = useMe();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isError) {
      setMessage("دریافت اطلاعات پروفایل ناموفق بود. لطفاً دوباره تلاش کنید.");
      setSnackbarOpen(true);
    }
  }, [isError]);

  if (isLoading) {
    return (
      <CircularProgress
        thickness={4}
        sx={{ color: "inherit", display: "block" }}
      />
    );
  }

  if (isError || !profile) {
    return (
      <AppSnackbar
        open={snackbarOpen}
        message={message}
        type="error"
        onClose={() => setSnackbarOpen(false)}
      />
    );
  }

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.16)}`,
        borderRadius: "16px",
        padding: { xs: "16px 20px", sm: "16px 32px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        direction: "rtl",
        width: "100%",
        boxSizing: "border-box",
        marginTop: "20px",
      })}
    >
      {/* عکس پروفایل */}
      <Avatar
        alt={profile.name ?? "تصویر پروفایل"}
        src={profile.profileImage || undefined}
        sx={(theme) => ({
          width: { xs: 48, sm: 56 },
          height: { xs: 48, sm: 56 },
          border: `2px solid ${theme.palette.background.paper}`,
          flexShrink: 0,
        })}
      >
        {!profile.profileImage && (profile.name?.trim()?.charAt(0) || "؟")}
      </Avatar>

      {/* بخش متن‌ها */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginRight: { xs: 1.5, sm: 2 },
          overflow: "hidden",
        }}
      >
        <Typography variant="demiboldBase" component="div">
          {profile.name ?? "نام ثبت نشده"}
        </Typography>

        <Typography variant="regularXs" color="text.secondary">
          {profile.phoneNumber}
        </Typography>
      </Box>
    </Box>
  );
}