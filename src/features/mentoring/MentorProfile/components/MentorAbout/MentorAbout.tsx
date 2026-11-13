"use client";

import { Box, Typography } from "@mui/material";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import type { ReactNode } from "react";

import type { MentorAboutProps } from "./MentorAbout.types";
import {
  mentorAboutStyles,
  mentorAboutTextStyles,
  mentorAboutDividerStyles,
  mentorPricingStyles,
  mentorPricingTitleStyles,
  mentorPricingRowStyles,
  mentorPricingValueStyles,
} from "./MentorAbout.styles";
import Summary from "@/components/ui/common/cards/InfoCard/summary/Summary";
import { MapIcon } from "@/components/ui/icons";
import ChatBubbleDotsIcon from "@/components/ui/icons/MentorProfile/ChatBubbleDotsIcon";

type SummaryIconKey = "consultation" | "location" | "duration";

const sessionPrices = [
  { duration: "۳۰ دقیقه", price: "۱,۵۰۰,۰۰۰ تومان" },
  { duration: "۶۰ دقیقه", price: "۳,۰۰۰,۰۰۰ تومان" },
] as const;

const summaryIconMap: Record<SummaryIconKey, ReactNode> = {
  consultation: <ChatBubbleDotsIcon />,
  location: <MapIcon />,
  duration: <AccessTimeOutlinedIcon />,
};

export default function MentorAbout({
  about,
  summaryItems,
}: MentorAboutProps) {
  return (
    <Box sx={mentorAboutStyles}>
      <Typography variant="mediumSm" sx={mentorAboutTextStyles}>
        {about}
      </Typography>

      <Box sx={mentorAboutDividerStyles} />

      <Summary
        items={summaryItems.map((item) => ({
          id: item.id,
          label: item.label,
          value: item.value,
          icon: summaryIconMap[item.icon],
        }))}
      />

      <Box sx={mentorPricingStyles}>
        <Typography variant="demiboldSm" sx={mentorPricingTitleStyles}>
          هزینه مشاوره:
        </Typography>
        {sessionPrices.map(({ duration, price }) => (
          <Box key={duration} sx={mentorPricingRowStyles}>
            <Typography variant="mediumSm">{duration}</Typography>
            <Typography variant="mediumSm" sx={mentorPricingValueStyles}>
              {price}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
