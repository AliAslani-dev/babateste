"use client";

import { Box } from "@mui/material";

import {
  activitySectionStyles,
  activitySectionCardStyles,
} from "./ActivitySection.styles";
import { ProgressCard } from "@/components/ui/common/cards/activity-card";
import { TitleBar } from "@/components/ui/common/TitleBar";

export default function ActivitySection() {
  return (
    <Box sx={activitySectionStyles}>
      <TitleBar
        title="ادامه فعالیت های من"
        // onActionClick={handleViewAll}
      />

      <Box sx={activitySectionCardStyles}>
        <ProgressCard
          image="/images/cards/activity-card/progress-card.png"
          title="مدیریت زمان و سرمایه"
          percentage={60}
          buttonLabel="ادامه یادگیری"
        />
      </Box>
    </Box>
  );
}
