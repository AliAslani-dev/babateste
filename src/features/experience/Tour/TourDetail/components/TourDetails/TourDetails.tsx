
"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { tourTabs, type TourDetailsData } from "../../data/tours.data";

import UserCountIcont from "@/components/ui/icons/cards/event-card/UsersCountIcon";
import ToggleBars from "@/components/ui/common/cards/InfoCard/ToggleBars/ToggleBars";
import InfoBars from "@/components/ui/common/cards/InfoCard/InfoBars/InfoBar";
import { Comments } from "@/components/ui/common/Comments";
import type { CommentItem } from "@/components/ui/common/Comments";

import TourAbout from "../TourAbout/TourAbout";

import {
  TourActiveToggleBarBox,
  TourDetailBox,
  TourDetailHeroBox,
  TourDetailTextBox,
  TourToggleBarBox,
} from "./TourDetails.styles";



import { useSnackbar } from "@/providers/SnackbarProvider/SnackbarProvider";
import { useTourComments ,useCommentTour} from "@/features/experience/api";

interface TourDetailsProps {
  tour: TourDetailsData;
}

const resolveImageUrl = (
  url: string | null | undefined,
): string | null => {
  if (!url) return null;

  if (/^(https?:|data:|blob:)/i.test(url)) {
    return url;
  }

  const base = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

  if (!base) return url;

  return `${base.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
};

export default function TourDetails({ tour }: TourDetailsProps) {
  const [activeTab, setActiveTab] = useState("about");

  const router = useRouter();
  const snackbar = useSnackbar();

  // دریافت نظرات از API تور
  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useTourComments(tour.id);

  // ثبت نظر از طریق mutation مربوط به تور
  const commentMutation = useCommentTour();

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
          tourId: tour.id,
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
    <Box sx={TourDetailBox}>
      <Box sx={TourDetailHeroBox}>
        <Image
          src={tour.heroImage}
          alt={`تصویر تور ${tour.location}`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box sx={TourDetailTextBox}>
        <Typography variant="bold2xl">{tour.title}</Typography>

        <InfoBars
          dateIcon={<CalendarMonthOutlinedIcon />}
          dateText={tour.date}
          locationIcon={<LocationOnOutlinedIcon />}
          locationText={tour.location}
          userIcon={<UserCountIcont />}
          userText={tour.remaining}
        />

        <Box sx={TourToggleBarBox}>
          <ToggleBars
            gap={5}
            items={tourTabs}
            value={activeTab}
            onChange={setActiveTab}
          />

          <Box sx={TourActiveToggleBarBox}>
            {activeTab === "about" && (
              <TourAbout
                detail={tour.detail}
                images={tour.images}
                summaryItems={tour.summaryItems}
                onRegister={() => {
                  router.push(
                    `/experience/tours-list/tour-detail/${tour.id}/registration`,
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
