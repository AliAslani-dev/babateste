"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useMemo, useSyncExternalStore } from "react";
import { useMe } from "@/features/auth/api";
import { showInAppNotification } from "./inApp";

export const notificationIcons = {
  calendar: "/images/notifications/calendar.svg",
  education: "/images/notifications/edu.svg",
  health: "/images/notifications/health.svg",
  users: "/images/notifications/users.svg",
} as const;

export interface AppNotification {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: ReactNode;
  read: boolean;
  href?: string;
}

const HEALTH_KEY = "nova_health_notification";
const TOURS_KEY = "nova_tours_notification";
const READ_KEY = "nova_read_notifications";
const CHANGE_EVENT = "nova-notifications-change";

export function notifyNotificationsChanged() {
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function markNotificationAsRead(id: string) {
  if (typeof window === "undefined") return;
  const current: string[] = JSON.parse(
    sessionStorage.getItem(READ_KEY) || "[]"
  );
  if (!current.includes(id)) {
    current.push(id);
    sessionStorage.setItem(READ_KEY, JSON.stringify(current));
    notifyNotificationsChanged();
  }
}

const ONCE_KEYS = new Set<string>([HEALTH_KEY, TOURS_KEY]);

export function triggerNotification(key: string) {
  // بعضی اعلان‌ها فقط یک‌بار (اولین ورود) ارسال می‌شن
  if (ONCE_KEYS.has(key)) {
    const onceKey = `${key}_sent`;
    if (localStorage.getItem(onceKey) === "true") return;
    localStorage.setItem(onceKey, "true");
  }

  sessionStorage.setItem(key, "true");
  const time = new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
  sessionStorage.setItem(`${key}_time`, time);
  notifyNotificationsChanged();

  // ✅ In-App همون لحظه
  if (key === TOURS_KEY) {
    showInAppNotification({
      id: "tours-reminder",
      title: "حواست به تورها باشه",
      description:
        "از تاریخ تورهای نوا باخبر شو و توی سفرهای بعدی همراه ما باش",
      href: "/experience",
      icon:(
          <Image src={notificationIcons.users} alt="" width={30} height={30} />
        )
    });
  }
  if (key === HEALTH_KEY) {
    showInAppNotification({
      id: "health-medicine-reminder",
      title: "داروهات رو ثبت کردی؟",
      description: "برای ثبت داروهات کلیک کن",
      href: "/health/my-medicine",
      icon:(
          <Image src={notificationIcons.users} alt="" width={30} height={30} />
        )
    });
  }
}

const formatNow = () =>
  new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function readSnapshot() {
  return [HEALTH_KEY, TOURS_KEY, READ_KEY]
    .map((key) => sessionStorage.getItem(key) ?? "")
    .join("|");
}

const getServerSnapshot = () => "";

export function useNotifications(): AppNotification[] {
  const { data: user } = useMe();
  const snapshot = useSyncExternalStore(
    subscribe,
    readSnapshot,
    getServerSnapshot
  );

  return useMemo(() => {
    const currentTime = formatNow();
    const [healthActive, toursActive, readRaw] = snapshot.split("|");
    const [healthTime] = (sessionStorage.getItem(`${HEALTH_KEY}_time`) ?? "").split(">");
    const [toursTime] = (sessionStorage.getItem(`${TOURS_KEY}_time`) ?? "").split(">");

    let readIds = new Set<string>();
    try {
      readIds = new Set<string>(JSON.parse(readRaw || "[]"));
    } catch {}

    const items: AppNotification[] = [];

    if (healthActive === "true") {
      items.push({
        id: "health-medicine-reminder",
        title: "داروهات رو ثبت کردی؟",
        description: "برای ثبت داروهات کلیک کن",
        time: healthTime || currentTime,
        icon: (
          <Image src={notificationIcons.health} alt="" width={28} height={28} />
        ),
        read: readIds.has("health-medicine-reminder"),
        href: "/health/my-medicine",
      });
    }

    if (toursActive === "true") {
      items.push({
        id: "tours-reminder",
        title: "حواست به تورها باشه",
        description:
          "از تاریخ تورهای نوا باخبر شو و توی سفرهای بعدی همراه ما باش",
        time: toursTime || currentTime,
        icon: (
          <Image
            src={notificationIcons.calendar}
            alt=""
            width={28}
            height={28}
          />
        ),
        read: readIds.has("tours-reminder"),
      });
    }

    if (user) {
      items.push({
        id: "welcome",
        title: "به پلتفرم نوا خوش آمدید",
        description: "به پلتفرم بازنشستگان نوا خوش آمدید",
        time: currentTime,
        icon: (
          <Image
            src={notificationIcons.education}
            alt=""
            width={28}
            height={28}
          />
        ),
        read: readIds.has("welcome"),
      });
    }

    if (user?.nationalCode === null) {
      items.push({
        id: "complete-profile",
        title: "حساب خود را تکمیل کنید",
        description:
          "اطلاعات وارد شده در حساب شما کامل نیست. لطفاً برای تکمیل آن اقدام کنید",
        time: currentTime,
        icon: (
          <Image
            src={notificationIcons.users}
            alt=""
            width={28}
            height={28}
          />
        ),
        read: readIds.has("complete-profile"),
      });
    }

    return items;
  }, [snapshot, user]);
}