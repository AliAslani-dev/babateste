"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

import ToggleBars from "@/components/ui/common/cards/InfoCard/ToggleBars/ToggleBars";
import MentorAbout from "../MentorAbout/MentorAbout";
import MentorExperience from "../MentorExperience/MentorExperience";
import {
  mentorProfileBoxStyles,
  mentorProfileHeroStyles,
  mentorProfileContentStyles,
  mentorProfileToggleBarStyles,
  mentorProfileActiveContentStyles,
  mentorProfileNameBox,
  mentorRequestButtonWrapperStyles,
} from "./MentorDetail.styles";
import InfoBars from "@/components/ui/common/cards/InfoCard/InfoBars/InfoBar";
import UserCountIcont from "@/components/ui/icons/cards/event-card/UsersCountIcon";
import PackageIcon from "@/components/ui/icons/RequestConsultation/PackageIcon";
import StarIcon from "@/components/ui/icons/RequestConsultation/StarIcon";
import { semanticColors } from "@/theme";
import { toPersianNumber } from "@/lib/utils";
import { mentorTabs } from "../../data/Mentor.data";
import type { MentorProfileProps } from "./MentorDetail.types";
import { useMentorDetail } from "@/features/mentoring/api";

export default function MentorProfile({ mentorId }: MentorProfileProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("about");
  const { data: mentor, isLoading, isError } = useMentorDetail(mentorId);
  const DEFAULT_MENTOR_IMAGE = "/images/chat/useer.png";
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50dvh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !mentor) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50dvh",
        }}
      >
        <Typography variant="regularSm" color="error">
          خطا در دریافت اطلاعات منتور
        </Typography>
      </Box>
    );
  }

  const summaryItems = [
    {
      id: "consultation",
      icon: "consultation" as const,
      label: "نوع مشاوره",
      value: mentor.mentoringType,
    },
    {
      id: "location",
      icon: "location" as const,
      label: "محل فعالیت",
      value: mentor.city,
    },
    {
      id: "duration",
      icon: "duration" as const,
      label: "زمان جلسات",
      value: toPersianNumber(mentor.sessionsTime),
    },
  ];

  return (
    <Box sx={mentorProfileBoxStyles}>
      {/* تصویر هیرو */}
      <Box sx={mentorProfileHeroStyles}>
        <Image
          src={mentor.imageUrl ? mentor.imageUrl : DEFAULT_MENTOR_IMAGE}
          alt={`تصویر ${mentor.name}`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* باکس اصلی پروفایل */}
      <Box sx={mentorProfileContentStyles}>
        {/* نام و تخصص منتور */}
        <Box sx={mentorProfileNameBox}>
          <Typography variant="bold2xl">{mentor.name}</Typography>
          <Typography variant="mediumBase" sx={{ color: "text.secondary" }}>
            {mentor.areaOfExpertise}
          </Typography>
        </Box>

        <InfoBars
          dateIcon={<UserCountIcont size={20} />}
          dateText={`${toPersianNumber(mentor.experienceYears)} سال تجربه`}
          locationIcon={
            <PackageIcon color={semanticColors.background.primary} size={20} />
          }
          locationText={mentor.city}
          userIcon={<StarIcon size={20} />}
          userText={toPersianNumber(mentor.score)}
        />

        {/* تب‌ها */}
        <Box sx={mentorProfileToggleBarStyles}>
          <ToggleBars
            items={mentorTabs}
            value={activeTab}
            onChange={setActiveTab}
          />

          <Box sx={mentorProfileActiveContentStyles}>
            {activeTab === "about" && (
              <MentorAbout
                about={mentor.descriptions}
                summaryItems={summaryItems}
              />
            )}
            {activeTab === "experience" && (
              <MentorExperience experiences={mentor.experiences} />
            )}
          </Box>
        </Box>

        <Box sx={mentorRequestButtonWrapperStyles}>
          <Button
            color="primary"
            appearance="solid"
            size="md"
            shape="pill"
            fullWidth
            typographyVariant="mediumBase"
            onClick={() =>
              router.push(
                `/mentoring/request-consultation/mentor-profile/${mentor.id}/appointment`,
              )
            }
          >
            درخواست مشاوره
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
