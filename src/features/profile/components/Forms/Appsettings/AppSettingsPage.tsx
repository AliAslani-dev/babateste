"use client";

import { useState } from "react";
import Link from "next/link";
import { Box, Stack, Typography, Paper, Divider, Button } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Form,
  FormSwitch,
  FormSubmitButton,
} from "@/components/ui/common/Form";

import {
  appSettingsSchema,
  type AppSettingsFormValues,
} from "./appSettings.schema";
import { APP_SETTINGS_GROUPS } from "./appSettings.constants";

const DEFAULT_VALUES: AppSettingsFormValues = {
  courseUpdates: true,
  mentoringReminders: true,
  promotions: false,
  emailNotifications: true,
  smsNotifications: false,
};

export default function AppSettingsPage() {
  // با تغییر key، Form از نو با defaultValues ساخته می‌شود
  const [formKey, setFormKey] = useState(0);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (data: AppSettingsFormValues) => {
    console.log("App Settings:", data);
    // TODO: ارسال به سرور
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = () => {
    setFormKey((k) => k + 1);
    setSaved(false);
  };

  return (
    <Box
      dir="rtl"
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        py: { xs: 3, sm: 5, md: 7 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box sx={{ maxWidth: 760, mx: "auto" }}>
        {/* هدر */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="h5"
     
          >
            تنظیمات برنامه
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.9, maxWidth: 600 }}
          >
            انتخاب کن از چه راهی و برای چه موضوعی بهت اطلاع بدیم. هر زمان
            می‌تونی این تنظیمات رو تغییر بدی.
          </Typography>
        </Box>

        {/* لینک به تنظیمات اعلان‌ها */}
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2, sm: 2.5 },
            mb: { xs: 2, md: 2.5 },
            borderRadius: 3,
          }}
        >
          <Box
            component={Link}
            href="/profile/notifications"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: "inherit",
              "&:hover .notif-title": { color: "primary.main" },
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <NotificationsNoneIcon fontSize="small" />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography
                className="notif-title"
           
              >
                تنظیمات اعلان‌ها
              </Typography>
              <Typography
                variant="caption"
          
              >
                کنترل کامل اعلان‌های ایمیل، پوش و پیامک.
              </Typography>
            </Box>

            <ChevronLeftIcon sx={{ color: "text.secondary" }} />
          </Box>
        </Paper>

        {/* فرم */}
        <Form<AppSettingsFormValues>
          key={formKey}
          schema={appSettingsSchema}
          onSubmit={handleSubmit}
          defaultValues={DEFAULT_VALUES}
        >
          <Stack spacing={{ xs: 2, md: 2.5 }}>
            {APP_SETTINGS_GROUPS.map((group) => (
              <Paper
                key={group.title}
                variant="outlined"
                sx={{ p: { xs: 2, sm: 2.5, md: 3 }, borderRadius: 3 }}
              >
                <Typography variant="subtitle1" >
                  {group.title}
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <Stack spacing={0.5}>
                  {group.items.map((item, index) => (
                    <Box key={item.name}>
                      <FormSwitch<AppSettingsFormValues>
                        name={item.name}
                        label={item.label}
               
                      />
                      {index < group.items.length - 1 && (
                        <Divider sx={{ my: 1.5 }} />
                      )}
                    </Box>
                  ))}
                </Stack>
              </Paper>
            ))}
          </Stack>

          {/* دکمه‌ها — دقیقاً مثل صفحه Privacy */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
              justifyContent: "flex-start",
              gap: 1.5,
              mt: { xs: 3, md: 4 },
            }}
          >
        
            <FormSubmitButton size="lg" sx={{ height: 45, fontWeight: 500, px: 4 }}>
              {saved ? "ذخیره شد ✓" : "ذخیره تنظیمات"}
            </FormSubmitButton>
                <Button
              variant="outlined"
              fullWidth
              onClick={handleReset}
              sx={{ height: 44, fontWeight: 500 }}
            >
              بازگردانی پیش‌فرض
            </Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
}