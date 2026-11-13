"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { markNotificationAsRead } from "@/features/notifications/useNotifications";

import {
  Avatar,
  Badge,
  Box,
  Popover,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useMe } from "@/features/auth";
import { useNotifications } from "@/features/notifications";
import { toPersianNumber } from "@/lib/utils";
import { NotificationeBell } from "@/components/ui/icons";
import { navbarHomeHeaderStyles } from "../styles/NavbarHomeHeader.styles";
import { semanticColors } from "@/theme";
import { IconButton } from "@/components/ui/Button";
import { Notification } from "@/components/ui/common/notification";

export default function NavbarHomeHeader() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { data: user } = useMe();
  const notifications = useNotifications();
  const unreadCount = notifications.filter((n) => !n.read).length;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSeeAll = () => {
    handleClose();
    router.push("/notifications");
  };

  return (
    <Box sx={navbarHomeHeaderStyles.root}>
      <Box sx={navbarHomeHeaderStyles.brand}>
        <Image
          src="/images/navbar-up/header-logo.svg"
          alt="شریف نوا"
          width={28}
          height={28}
        />
        <Typography variant="extraBoldXl">شریف نوا</Typography>
      </Box>

      <Box sx={navbarHomeHeaderStyles.profileActions}>
        <Avatar
          component="button"
          type="button"
          src={user?.profileImage || undefined}
          alt={user?.name ?? "تصویر پروفایل"}
          sx={navbarHomeHeaderStyles.avatar}
          aria-label="مشاهده اطلاعات شخصی"
          onClick={() => {
            router.push("/profile/personal-info");
          }}
        />

        <Badge
          badgeContent={toPersianNumber(unreadCount)}
          color="error"
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              fontSize: 10,
              minWidth: 16,
              height: 16,
              padding: "0 4px",
            },
          }}
        >
          <IconButton
            aria-label="اعلان‌ها"
            sx={navbarHomeHeaderStyles.iconButton}
            shape="circle"
            onClick={handleOpen}
          >
            <NotificationeBell
              style={{
                color: semanticColors.text.primary,
              }}
            />
          </IconButton>
        </Badge>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: isMobile ? "center" : "center",
          }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          slotProps={{
            paper: {
              sx: isMobile
                ? {
                    // موبایل: پاپ‌آور از بالا، عرض صفحه، ارتفاع دو نوتیفیکیشن
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    width: "100vw",
                    maxHeight: "50vh",
                    borderRadius: 0,
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 4,
                    zIndex: 1300,
                  }
                : {
                    // دسکتاپ: پاپ‌آور
                    mt: 1,
                    width: 340,
                    maxHeight: 420,
                    borderRadius: 3,
                    boxShadow: 4,
                    overflow: "hidden",
                  },
            },
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1.5,
              borderBottom: `1px solid ${
                semanticColors.border?.primary ?? "#eee"
              }`,
              flexShrink: 0,
            }}
          >
            <Typography variant="demiboldSm">اعلان‌ها</Typography>
            <Typography
              variant="light2xs"
              color="text.secondary"
              onClick={handleSeeAll}
              sx={{ cursor: "pointer" }}
            >
              مشاهده همه
            </Typography>
          </Box>

          {/* List */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              p: 1,
              overflowY: "auto",
              flex: 1,
            }}
          >
            {notifications.slice(0, 2).map((item) => (
              <Box
                key={item.id}
                onClick={() => {
                  handleClose();
                  markNotificationAsRead(item.id);
                  if (item.href) router.push(item.href);
                }}
                sx={{ cursor: "pointer" }}
              >
                <Notification
                  title={item.title}
                  description={item.description}
                  time={item.time}
                  icon={item.icon}
                />
              </Box>
            ))}
          </Box>
        </Popover>
      </Box>
    </Box>
  );
}
