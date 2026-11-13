"use client";

import { Box, Typography } from "@mui/material";

import {
  userHealthSectionStyles,
  userHealthTitleStyles,
  userHealthGridStyles,
} from "./UserHealthSection.styles";
import UserHealth from "@/components/ui/common/cards/health/user-health";
import { TitleBar } from "@/components/ui/common/TitleBar";

export default function UserHealthSection() {
  return (
    <Box sx={userHealthSectionStyles}>
      {/* <Typography variant="boldBase" component="h2" sx={userHealthTitleStyles}>
        سلامت من
      </Typography> */}
      <TitleBar
        title="سلامت من"
        // onActionClick={handleViewAll}
      />
      <Box sx={userHealthGridStyles}>
        <UserHealth
          image="/images/cards/user-health/medication-reminder.png"
          title="یادآور دارو"
          subtitle="قرص فشار خون"
          text="لیست دارو ها"
          textColor="#0092B8"
          textHref="/health/my-medicine"
        />
        <UserHealth
          image="/images/cards/user-health/physical-activity.png"
          title="فعالیت بدنی"
          subtitle="۶,۳۲۰"
          subtitleSuffix="قدم"
          text="هدف : ۸،۰۰۰ قدم"
          disabled={true}
        />
        <UserHealth
          image="/images/cards/user-health/today-status.png"
          title="وضعیت امروز"
          subtitle="خوب"
          text="امروز انرژی خوبی دارم"
          disabled={true}
        />

        <UserHealth
          image="/images/cards/user-health/blood-pressure.png"
          title="فشار خون"
          subtitle="۱۲۰/۸۰"
          textColor="#0092B8"
          text="ثبت فشار خون"
          textHref="/health/blood-pressure"
        />
      </Box>
    </Box>
  );
}
