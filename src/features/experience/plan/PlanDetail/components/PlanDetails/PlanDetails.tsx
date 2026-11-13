"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { PlanTabs, type PlanDetailsData } from "../../data/plan.data";

import UserCountIcont from "@/components/ui/icons/cards/event-card/UsersCountIcon";
import ToggleBars from "@/components/ui/common/cards/InfoCard/ToggleBars/ToggleBars";

import PlanAbout from "../PlanAbout/PlanAbout";
import {
  PlanActiveToggleBarBox,
  PlanDetailBox,
  PlanDetailHeroBox,
  PlanDetailTextBox,
  PlanToggleBarBox,
} from "./PlanDetails.styles";
import InfoBars from "@/components/ui/common/cards/InfoCard/InfoBars/InfoBar";
import { useRouter } from "next/navigation";

interface PlanDetailsProps {
  plan: PlanDetailsData;
}

export default function PlanDetails({ plan }: PlanDetailsProps) {
  const [activeTab, setActiveTab] = useState("about");
  const router = useRouter();
  return (
    <Box sx={PlanDetailBox}>
      {/* تصویر هیرو */}
      <Box sx={PlanDetailHeroBox}>
        <Image
          src={plan.heroImage}
          alt={`تصویر تور ${plan.location}`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* باکس اصلی جزئیات */}
      <Box sx={PlanDetailTextBox}>
        <Typography variant="bold2xl">{plan.title}</Typography>
        <InfoBars
          dateIcon={<CalendarMonthOutlinedIcon />}
          dateText={plan.date}
          locationIcon={<LocationOnOutlinedIcon />}
          locationText={plan.location}
          userIcon={<UserCountIcont />}
          userText={plan.remaining}
        />

        <Box sx={PlanToggleBarBox}>
          <ToggleBars
            gap={5}
            items={PlanTabs}
            value={activeTab}
            onChange={setActiveTab}
          />

          <Box sx={PlanActiveToggleBarBox}>
            {activeTab === "about" && (
              <PlanAbout
                detail={plan.detail}
                images={plan.images}
                summaryItems={plan.summaryItems}
               
              />
            )}

            {activeTab === "schedule" && <Box>برنامه سفر</Box>}

            {activeTab === "services" && <Box>خدمات تور</Box>}

            {activeTab === "comments" && <Box>نظرات کاربران</Box>}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
