"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Switch,
  FormControlLabel,
  Divider,
  Paper,
  Button,
} from "@mui/material";

type PrivacyState = {
  analytics: boolean;
  personalizedAds: boolean;
  newsletter: boolean;
  shareWithPartners: boolean;
  cookies: boolean;
  locationAccess: boolean;
  crashReports: boolean;
  profilePublic: boolean;
};

const initialState: PrivacyState = {
  analytics: true,
  personalizedAds: false,
  newsletter: true,
  shareWithPartners: false,
  cookies: true,
  locationAccess: false,
  crashReports: true,
  profilePublic: false,
};

export default function PrivacyPage() {
  const [state, setState] = useState<PrivacyState>(initialState);
  const [saved, setSaved] = useState(false);

  const toggle = (key: keyof PrivacyState) => {
    setState((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  const handleSave = () => {
    // فقط ماک — هیچ API ای صدا زده نمی‌شود
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Box
      dir="rtl"
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        py: { xs: 3, sm: 5, md: 7 },

      }}
    >
      <Box sx={{ maxWidth: 760, mx: "auto" }}>
        {/* هدر صفحه */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="h5"
          >
            حریم خصوصی
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.9, maxWidth: 600 }}
          >
            کنترل کن چه اطلاعاتی از تو جمع‌آوری می‌شود. این تنظیمات فقط روی
            همین دستگاه ذخیره می‌شود.
          </Typography>
        </Box>

        {/* بخش ۱: داده و تحلیل */}
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            mb: { xs: 2, md: 2.5 },
            borderRadius: 3,
          }}
        >
          <Typography variant="subtitle1" >
            داده و تحلیل
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <FormControlLabel
              sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
              control={
                <Switch
                  checked={state.analytics}
                  onChange={() => toggle("analytics")}
                  sx={{ mt: 0.5 }}
                />
              }
              label={
                <Box>
                  <Typography variant="body2" >
                    ارسال داده‌های ناشناس برای بهبود سرویس
                  </Typography>
                  <Typography
                    variant="caption"
             
                  
                  >
                    شامل بازدید صفحات، زمان حضور و کلیک‌ها — بدون اطلاعات
                    شخصی.
                  </Typography>
                </Box>
              }
            />
          </Box>

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.crashReports}
                onChange={() => toggle("crashReports")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2" >
                ارسال گزارش خطا هنگام کرش
              </Typography>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.cookies}
                onChange={() => toggle("cookies")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2" >
                اجازه ذخیره کوکی‌های ضروری
              </Typography>
            }
          />
        </Paper>

        {/* بخش ۲: تبلیغات */}
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            mb: { xs: 2, md: 2.5 },
            borderRadius: 3,
          }}
        >
          <Typography variant="subtitle1" >
            تبلیغات
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.personalizedAds}
                onChange={() => toggle("personalizedAds")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2" >
                نمایش تبلیغات شخصی‌سازی‌شده بر اساس علاقه‌مندی
              </Typography>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.shareWithPartners}
                onChange={() => toggle("shareWithPartners")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Box>
                <Typography variant="body2" >
                  اشتراک‌گذاری داده با شرکای تجاری
                </Typography>
                <Typography
                  variant="caption"
                
                >
                  در صورت فعال بودن، داده‌های آماری با شرکای تبلیغاتی به
                  اشتراک گذاشته می‌شود.
                </Typography>
              </Box>
            }
          />
        </Paper>

        {/* بخش ۳: حساب کاربری */}
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            mb: { xs: 2, md: 2.5 },
            borderRadius: 3,
          }}
        >
          <Typography variant="subtitle1">
            حساب کاربری
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.profilePublic}
                onChange={() => toggle("profilePublic")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2">
                نمایش عمومی پروفایل من
              </Typography>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Checkbox
                checked={state.newsletter}
                onChange={() => toggle("newsletter")}
                sx={{ mt: 0.25 }}
              />
            }
            label={
              <Typography variant="body2">
                دریافت خبرنامه ایمیلی (حداکثر ۱ بار در هفته)
              </Typography>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Checkbox
                checked={state.locationAccess}
                onChange={() => toggle("locationAccess")}
                sx={{ mt: 0.25 }}
              />
            }
            label={
              <Typography variant="body2" >
                اجازه دسترسی به موقعیت مکانی تقریبی
              </Typography>
            }
          />
        </Paper>

        {/* دکمه‌ها */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            justifyContent: "flex-start",
            gap: 1.5,
            mt: { xs: 3, md: 4 },
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setState(initialState)}
    
          >
            بازگردانی پیش‌فرض
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSave}
         
          >
            {saved ? "ذخیره شد ✓" : "ذخیره تنظیمات"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}