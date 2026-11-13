"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import ToggleBars from "@/components/ui/common/cards/InfoCard/ToggleBars/ToggleBars";
import InfoBars from "@/components/ui/common/cards/InfoCard/InfoBars/InfoBar";
import { Comments } from "@/components/ui/common/Comments";
import type { CommentItem } from "@/components/ui/common/Comments";

import { useEventComments } from "@/features/experience/api";

import { useSnackbar } from "@/providers/SnackbarProvider/SnackbarProvider";

import { EventTabs, type EventDetailsData } from "../../data/Events.data";
import UserCountIcont from "@/components/ui/icons/cards/event-card/UsersCountIcon";
import EventAbout from "../EventAbout/EventAbout";

import {
  EventActiveToggleBarBox,
  EventDetailBox,
  EventDetailHeroBox,
  EventDetailTextBox,
  EventToggleBarBox,
} from "./EventDetails.styles";
import { useCommentEvent } from "@/features/experience/api";
import { useNavbarDetail } from "@/components/layout/navbar-up/components/NavbarDetail/NavbarDetailContext";

interface EventDetailsProps {
  Event: EventDetailsData;
}

const resolveImageUrl = (url: string | null | undefined): string | null => {
  if (!url) return null;

  if (/^(https?:|data:|blob:)/i.test(url)) {
    return url;
  }

  const base = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

  if (!base) return url;

  return `${base.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
};

export default function EventDetails({ Event }: EventDetailsProps) {
  const [activeTab, setActiveTab] = useState("about");
  const { isSaved, onSave } = useNavbarDetail();
  const router = useRouter();
  const snackbar = useSnackbar();

  // دریافت کامنت‌های همین ایونت از API ایونت‌ها
  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useEventComments(Event.id);

  // ثبت کامنت با mutation مربوط به ایونت‌ها
  const commentMutation = useCommentEvent();

  // تبدیل پاسخ API به مدل مورد نیاز کامپوننت Comments
  const mappedComments: CommentItem[] | undefined = comments?.map((c) => {
    const rawCommenter = c.commenter as unknown as {
      name: string | null;
      phoneNumber: string;
      profileImage?: string | null;
      profile_image?: string | null;
      avatar?: string | null;
      imageUrl?: string | null;
    };

    const rawImage =
      rawCommenter.profileImage ??
      rawCommenter.profile_image ??
      rawCommenter.avatar ??
      rawCommenter.imageUrl ??
      null;

    return {
      commentText: c.commentText,
      commenter: {
        name: c.commenter.name,
        phoneNumber: c.commenter.phoneNumber,
        profileImage: resolveImageUrl(rawImage),
      },
    };
  });

  const handleSubmitComment = (text: string) =>
    new Promise<void>((resolve, reject) => {
      commentMutation.mutate(
        {
          eventId: Event.id,
          comment_text: text,
        },
        {
          onSuccess: (data) => {
            snackbar.showSuccess(data.message);
            resolve();
          },
          onError: (error) => {
            snackbar.showError(error);
            reject(error);
          },
        },
      );
    });

  return (
    <Box sx={EventDetailBox}>
      <Box sx={EventDetailHeroBox}>
        <Image
          src={Event.heroImage}
          alt={`تصویر تور ${Event.location}`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box sx={EventDetailTextBox}>
        <Typography variant="bold2xl">{Event.title}</Typography>

        <InfoBars
          dateIcon={<CalendarMonthOutlinedIcon />}
          dateText={Event.date}
          locationIcon={<LocationOnOutlinedIcon />}
          locationText={Event.location}
          userIcon={<UserCountIcont />}
          userText={Event.remaining}
        />

        <Box sx={EventToggleBarBox}>
          <ToggleBars
            gap={5}
            items={EventTabs}
            value={activeTab}
            onChange={setActiveTab}
          />

          <Box sx={EventActiveToggleBarBox}>
            {activeTab === "about" && (
              <EventAbout
                detail={Event.detail}
                images={Event.images}
                summaryItems={Event.summaryItems}
                onRegister={() => {
                  router.push(
                    `/experience/events-list/event-detail/${Event.id}/registration`,
                  );
                }}
              />
            )}

            {activeTab === "schedule" && <Box>برنامه سفر</Box>}

            {activeTab === "services" && <Box>خدمات تور</Box>}

            {activeTab === "comments" && (
              <Comments
                comments={mappedComments}
                isLoading={isCommentsLoading}
                isError={isCommentsError}
                isSubmitting={commentMutation.isPending}
                onSubmit={handleSubmitComment}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
