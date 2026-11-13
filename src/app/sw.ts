// src/app/sw.ts
import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }

  // ✅ گسترش تایپ برای پشتیبانی از vibrate
  interface NotificationOptions {
    vibrate?: number[];
  }
}

declare const self: ServiceWorkerGlobalScope;

// ── Push Notification: دریافت ───────────────────────────
self.addEventListener("push", (event: PushEvent) => {
  if (!event.data) return;

  let data: {
    title?: string;
    body?: string;
    url?: string;
    icon?: string;
    badge?: string;
    tag?: string;
  };

  try {
    data = event.data.json();
  } catch {
    data = { title: "شریف نوا", body: event.data.text() };
  }

  event.waitUntil(
    self.registration.showNotification(data.title || "شریف نوا", {
      body: data.body || "",
      icon: data.icon || "/icons/icon-192x192.png",
      badge: data.badge || "/icons/badge-72x72.png",
      vibrate: [100, 50, 100],
      tag: data.tag,
      data: { url: data.url || "/" },
    })
  );
});

// ── Push Notification: کلیک ────────────────────────────
self.addEventListener("notificationclick", (event: NotificationEvent) => {
  event.notification.close();
  const targetUrl = (event.notification.data as { url?: string })?.url || "/";

  event.waitUntil(
    self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url.includes(targetUrl) && "focus" in client) {
            return client.focus();
          }
        }
        if (self.clients.openWindow) {
          return self.clients.openWindow(targetUrl);
        }
      })
  );
});

// ── Push Notification: تغییر subscription ─────────────
self.addEventListener("pushsubscriptionchange", (event: Event) => {
  const e = event as any;
  if (!e.oldSubscription) return;

  e.waitUntil(
    self.registration.pushManager
      .subscribe(e.oldSubscription.options)
      .then((subscription: PushSubscription) =>
        fetch("/api/push/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(subscription.toJSON()),
        })
      )
      .catch((err: unknown) => {
        console.error("[SW] pushsubscriptionchange failed:", err);
      })
  );
});

// ── Serwist ─────────────────────────────────────────────
const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  fallbacks: {
    entries: [
      {
        url: "/offline",
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
});

serwist.addEventListeners();