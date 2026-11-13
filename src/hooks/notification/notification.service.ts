
import type {
  CreateNotificationPayload,
  NotificationItem,
} from "./notification.types";

const NOTIFICATION_STORAGE_KEY = "notification";

function getStoredNotifications(): NotificationItem[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(NOTIFICATION_STORAGE_KEY);

    if (!stored) return [];

    const parsed: unknown = JSON.parse(stored);

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("خطا در خواندن نوتیفیکیشن‌ها:", error);
    return [];
  }
}

export function getNotifications(): NotificationItem[] {
  return getStoredNotifications();
}

export function addNotification(
  payload: CreateNotificationPayload,
): void {
  if (typeof window === "undefined") return;

  try {
    const notifications = getStoredNotifications();

    // اگر شناسه‌ی مشخصی داده شده و قبلاً ثبت شده، دوباره اضافه نکن
    if (
      payload.id &&
      notifications.some((notification) => notification.id === payload.id)
    ) {
      return;
    }

    const notification: NotificationItem = {
      id: payload.id ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      title: payload.title,
      message: payload.message,
      createdAt: new Date().toISOString(),
      isRead: false,
    };

    localStorage.setItem(
      NOTIFICATION_STORAGE_KEY,
      JSON.stringify([notification, ...notifications]),
    );
  } catch (error) {
    console.error("خطا در ذخیره نوتیفیکیشن:", error);
  }
}
