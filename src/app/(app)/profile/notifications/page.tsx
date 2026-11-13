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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

type NotificationState = {
  // ایمیل
  emailMarketing: boolean;
  emailSecurity: boolean;
  emailWeeklyDigest: boolean;
  emailComments: boolean;
  // پوش
  pushMessages: boolean;
  pushMentions: boolean;
  pushReminders: boolean;
  pushPromotions: boolean;
  // پیامک
  smsSecurity: boolean;
  smsOrders: boolean;
  // عمومی
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  quietHours: boolean;
  digestFrequency: "daily" | "weekly" | "monthly" | "never";
};

const initialState: NotificationState = {
  emailMarketing: false,
  emailSecurity: true,
  emailWeeklyDigest: true,
  emailComments: true,
  pushMessages: true,
  pushMentions: true,
  pushReminders: false,
  pushPromotions: false,
  smsSecurity: true,
  smsOrders: false,
  soundEnabled: true,
  vibrationEnabled: true,
  quietHours: false,
  digestFrequency: "weekly",
};

export default function NotificationsPage() {
  const [state, setState] = useState<NotificationState>(initialState);
  const [saved, setSaved] = useState(false);

  const toggle = (key: keyof Omit<NotificationState, "digestFrequency">) => {
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
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box sx={{ maxWidth: 760, mx: "auto" }}>
        {/* هدر صفحه */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="h5"
    
          >
            تنظیمات اعلان‌ها
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

        {/* بخش ۱: اعلان‌های ایمیلی */}
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            mb: { xs: 2, md: 2.5 },
            borderRadius: 3,
          }}
        >
          <Typography variant="subtitle1" >
            اعلان‌های ایمیلی
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.emailSecurity}
                onChange={() => toggle("emailSecurity")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Box>
                <Typography variant="body2" >
                  هشدارهای امنیتی
                </Typography>
                <Typography
                  variant="caption"
       
                >
                  ورود از دستگاه جدید، تغییر رمز و فعالیت‌های مشکوک.
                </Typography>
              </Box>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.emailWeeklyDigest}
                onChange={() => toggle("emailWeeklyDigest")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2">
                خلاصه هفتگی فعالیت‌ها
              </Typography>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.emailComments}
                onChange={() => toggle("emailComments")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2">
                پاسخ به دیدگاه‌ها و منشن‌ها
              </Typography>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Checkbox
                checked={state.emailMarketing}
                onChange={() => toggle("emailMarketing")}
                sx={{ mt: 0.25 }}
              />
            }
            label={
              <Box>
                <Typography variant="body2" >
                  پیشنهادها و تخفیف‌های ویژه
                </Typography>
                <Typography
                  variant="caption"
            
                >
                  حداکثر ۲ ایمیل در ماه — بدون اسپم.
                </Typography>
              </Box>
            }
          />
        </Paper>

        {/* بخش ۲: اعلان‌های پوش */}
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            mb: { xs: 2, md: 2.5 },
            borderRadius: 3,
          }}
        >
          <Typography variant="subtitle1" >
            اعلان‌های پوش (Push)
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.pushMessages}
                onChange={() => toggle("pushMessages")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2">
                پیام‌های جدید
              </Typography>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.pushMentions}
                onChange={() => toggle("pushMentions")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2" >
                منشن‌ها و پاسخ‌ها
              </Typography>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.pushReminders}
                onChange={() => toggle("pushReminders")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2" >
                یادآوری رویدادها و دوره‌ها
              </Typography>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.pushPromotions}
                onChange={() => toggle("pushPromotions")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2" >
                پیشنهادهای ویژه
              </Typography>
            }
          />
        </Paper>

        {/* بخش ۳: پیامک */}
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            mb: { xs: 2, md: 2.5 },
            borderRadius: 3,
          }}
        >
          <Typography variant="subtitle1" >
            پیامک
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.smsSecurity}
                onChange={() => toggle("smsSecurity")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Box>
                <Typography variant="body2" >
                  کد تأیید و هشدارهای امنیتی
                </Typography>
                <Typography
                  variant="caption"
           
                >
                  پیشنهاد می‌شود همیشه فعال باشد.
                </Typography>
              </Box>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.smsOrders}
                onChange={() => toggle("smsOrders")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2" >
                وضعیت سفارش‌ها و پرداخت‌ها
              </Typography>
            }
          />
        </Paper>

        {/* بخش ۴: عمومی */}
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            mb: { xs: 2, md: 2.5 },
            borderRadius: 3,
          }}
        >
          <Typography variant="subtitle1">
            عمومی
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.soundEnabled}
                onChange={() => toggle("soundEnabled")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2" >
                صدای اعلان
              </Typography>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.vibrationEnabled}
                onChange={() => toggle("vibrationEnabled")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Typography variant="body2">
                لرزش هنگام دریافت اعلان
              </Typography>
            }
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            sx={{ m: 0, alignItems: "flex-start", gap: 1 }}
            control={
              <Switch
                checked={state.quietHours}
                onChange={() => toggle("quietHours")}
                sx={{ mt: 0.5 }}
              />
            }
            label={
              <Box>
                <Typography variant="body2" >
                  ساعات سکوت (۲۳ تا ۷ صبح)
                </Typography>
                <Typography
                  variant="caption"
               
                >
                  در این بازه اعلان‌های غیرضروری ارسال نمی‌شود.
                </Typography>
              </Box>
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