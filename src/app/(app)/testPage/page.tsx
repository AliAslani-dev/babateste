"use client";
import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { AppSnackbarType } from "@/components/ui/AppSnackBar/AppSnackbar.types";
import { AppSnackbar } from "@/components/ui/AppSnackBar";
import { SmartReminder } from "@/components/ui/common/reminderBanner/SmartReminder";

const snackbarTests: {
  type: AppSnackbarType;
  title: string;
  message: string;
}[] = [
  {
    type: "success",
    title: "تست موفقیت",
    message: "اطلاعات شما با موفقیت ثبت شد",
  },
  {
    type: "error",
    title: "تست خطا",
    message: "ثبت اطلاعات با خطا مواجه شد",
  },
  {
    type: "warning",
    title: "تست هشدار",
    message: "اتصال اینترنت ناپایدار است",
  },
  {
    type: "info",
    title: "تست اطلاع‌رسانی",
    message: "یک نسخه جدید در دسترس است",
  },
  {
    type: "loading",
    title: "تست بارگذاری",
    message: "در حال بارگذاری اطلاعات...",
  },
];

export default function TestPage() {
  const [activeTest, setActiveTest] = useState<{
    type: AppSnackbarType;
    message: string;
  } | null>(null);

  const showSnackbar = (
    type: AppSnackbarType,
    message: string,
  ) => {
    setActiveTest({ type, message });
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        boxSizing: "border-box",
        p: 2,
        direction: "rtl",
      }}
    >
      <Stack spacing={1} sx={{ mb: 3 }}>
        {/* <Typography variant="body2" fontWeight={700}>
          تست اسنک‌بار
        </Typography> */}

        <Typography variant="body2" color="text.secondary">
          برای مشاهده هر حالت، روی دکمه مربوط به آن بزن.
        </Typography>
      </Stack>

      <Stack spacing={2}>
        {snackbarTests.map((test) => (
          <Button
            key={test.type}
            fullWidth
            variant="outlined"
            onClick={() => showSnackbar(test.type, test.message)}
            sx={{
              minHeight: 48,
              justifyContent: "flex-start",
              borderRadius: 2,
              textAlign: "right",
            }}
          >
            {test.title}
          </Button>
        ))}
      </Stack>

      <AppSnackbar
        key={activeTest?.type ?? "empty"}
        open={Boolean(activeTest)}
        message={activeTest?.message ?? ""}
        type={activeTest?.type ?? "success"}
        autoHideDuration={
          activeTest?.type === "loading" ? null : 2500
        }
        onClose={() => setActiveTest(null)}
      />

      <SmartReminder
        title="یادآوری هوشمند"
        description="با فعال کردن یادآوری، داروهای تان را فراموش نمی کنید."
      />

    </Box>
  );
}
