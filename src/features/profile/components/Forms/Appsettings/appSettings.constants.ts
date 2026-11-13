import type { AppSettingsFormValues } from "./appSettings.schema";

export type AppSettingsItemName = keyof AppSettingsFormValues;

export type AppSettingsItem = {
  name: AppSettingsItemName;
  label: string;
  description?: string;
};

export type AppSettingsGroup = {
  title: string;
  items: AppSettingsItem[];
};

export const APP_SETTINGS_GROUPS: AppSettingsGroup[] = [
  {
    title: "روش‌های ارتباطی",
    items: [
      {
        name: "emailNotifications",
        label: "دریافت ایمیل اطلاع‌رسانی",
        description: "خلاصه فعالیت‌ها و هشدارهای مهم به ایمیلت ارسال می‌شود.",
      },
      {
        name: "smsNotifications",
        label: "اعلان‌های پیامکی",
        description: "فقط برای موارد ضروری مثل کد تأیید و تغییرات امنیتی.",
      },
    ],
  },
  {
    title: "موضوع اعلان‌ها",
    items: [
      {
        name: "courseUpdates",
        label: "به‌روزرسانی دوره‌ها",
        description: "وقتی درس یا محتوای جدیدی به دوره‌ات اضافه شود.",
      },
      {
        name: "mentoringReminders",
        label: "یادآوری جلسات منتورینگ",
        description: "یادآوری قبل از شروع جلسه، حداکثر ۱ ساعت قبل.",
      },
      {
        name: "promotions",
        label: "تخفیف‌ها و پیشنهادات ویژه",
        description: "حداکثر ۲ بار در ماه — بدون اسپم.",
      },
    ],
  },
];

// برای سازگاری با کدهای قبلی
export const APP_SETTINGS_ITEMS: AppSettingsItem[] =
  APP_SETTINGS_GROUPS.flatMap((g) => g.items);