"use client";

import { Box, Typography, Stack, Button, alpha, useTheme } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Link from "next/link";

import ProfileInfo from "./ProfileInfo";
import { SettingsMenu } from "./SettingsMenu";
import { DeleteAccountButton } from "./DeleteAccountButton";

import { LogoutButton } from "./LogoutButton";
import { SimpleCard } from "@/components/ui/common/cards/activity-card";
import { useMe,useLogout } from "@/features/auth/api";

export default function ProfilePage() {
  const theme = useTheme();
  const logout = useLogout();
  const { data: user, isLoading } = useMe();

  const handleLogout = () => logout.mutate();

  const needsCompletion =
    !isLoading &&
    user &&
    (user.nationalCode === null || user.nationalCode.trim() === "");

  return (
    <>
      {needsCompletion && (
        <Box
          component={Link}
          href="/profile/personal-info"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            p: 2,
            mb: 3,
            mt: 2,
            borderRadius: 3,
            textDecoration: "none",
            color: "text.primary",
            bgcolor: alpha(theme.palette.warning.main, 0.08),
            border: `1px solid ${alpha(theme.palette.warning.main, 0.24)}`,
            transition: theme.transitions.create(
              ["background-color", "border-color", "transform"],
              { duration: theme.transitions.duration.shorter },
            ),
            "&:hover": {
              bgcolor: alpha(theme.palette.warning.main, 0.14),
              borderColor: alpha(theme.palette.warning.main, 0.4),
            },
            "&:active": { transform: "scale(0.995)" },
          }}
        >
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              width: 40,
              height: 40,
              flexShrink: 0,
              borderRadius: 2,
              bgcolor: alpha(theme.palette.warning.main, 0.16),
              color: "warning.main",
            }}
          >
            <InfoOutlinedIcon fontSize="small" />
          </Box>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body1" noWrap>
              پروفایل شما تکمیل نشده است
            </Typography>
            <Typography variant="caption" color="text.secondary" noWrap>
              برای استفاده از تمام امکانات، کد ملی خود را وارد کنید
            </Typography>
          </Box>

          <Button
            size="small"
            endIcon={<ArrowBackRoundedIcon fontSize="small" />}
            sx={{
              flexShrink: 0,
              borderRadius: 2,
              fontWeight: 700,
              color: "warning.dark",
              px: 1.5,
              pointerEvents: "none",
              "& .MuiButton-endIcon": { ml: 0.5 },
            }}
          >
            تکمیل
          </Button>
        </Box>
      )}

      <ProfileInfo />

      <Box sx={{ mt: 4 }}>
        <Typography variant="boldBase">فعالیت های من</Typography>
      </Box>

      <Stack spacing={1.5} sx={{ mt: 2 }}>
  
          <SimpleCard
            image="/images/cards/activity-card/favorites.png"
            title="مورد علاقه ها"
            subtitle=""
            href="/profile/favorites"
          />
        

        <SimpleCard
          image="/images/cards/activity-card/my-course.png"
          title="دوره های من"
          subtitle="۲ دوره در حال یادگیری"
          disabled
        />
        <SimpleCard
          image="/images/cards/activity-card/calendar.png"
          title="برنامه های من"
          subtitle="۲ برنامه پیش رو"
          disabled
        />
        <SimpleCard
          image="/images/cards/activity-card/meeting.png"
          title="جلسات منتورینگ"
          subtitle="۳ جلسه برگذاشته شده"
          href="/"
          disabled
        />

        <SettingsMenu />

        <DeleteAccountButton
          onClick={handleLogout}
          isLoading={logout.isPending}
        />

        <LogoutButton onClick={handleLogout} isLoading={logout.isPending} />
      </Stack>
    </>
  );
}
