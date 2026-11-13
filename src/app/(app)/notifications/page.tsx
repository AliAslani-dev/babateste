"use client";

import React, { useMemo, useState } from "react";
import { Box } from "@mui/material";
import { Notification } from "@/components/ui/common/notification";
import { showInAppNotification } from "@/features/notifications/inApp";
import { Button } from "@mui/material";
import { useNotifications } from "@/features/notifications";
import { markNotificationAsRead } from "@/features/notifications/useNotifications";
import { ToggleBars } from "@/components/ui/common/cards/InfoCard";

type FilterValue = "all" | "read";

const toggleItems = [
  { label: "همه", value: "all" },
  { label: "پیام‌های خوانده شده", value: "read" },
];

export default function Page() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const notifications = useNotifications();

  const filtered = useMemo(() => {
    if (filter === "read") return notifications.filter((n) => n.read);
    return notifications;
  }, [filter, notifications]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, p: 2 }}>
      <ToggleBars
        items={toggleItems}
        value={filter}
        onChange={(v) => setFilter(v as FilterValue)}
        gap={16}
      />
{/* 
      <Button
        variant="outlined"
        onClick={() =>
          showInAppNotification({
            id: "demo-" + Date.now(),
            
            title: "یه نوتیفیکیشن تستی",
            description: "این یه نمونه از نوتیفیکیشن درون‌برنامه‌ایه",
            href: "/notifications",
          })
        }
      >
        تست نوتیفیکیشن
      </Button> */}

      {filtered.map((item) => (
        <Box
          key={item.id}
          onClick={() => markNotificationAsRead(item.id)}
          sx={{ cursor: "pointer" }}
        >
          <Notification
            title={item.title}
            description={item.description}
            time={item.time}
            icon={item.icon}
            href={item.href}
          />
        </Box>
      ))}

      {filtered.length === 0 && (
        <Box sx={{ textAlign: "center", py: 4, color: "text.secondary" }}>
          نوتیفیکیشنی برای نمایش وجود ندارد.
        </Box>
      )}
    </Box>
  );
}
