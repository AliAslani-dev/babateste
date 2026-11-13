"use client";
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { SimpleCard } from "@/components/ui/common/cards/activity-card";
import { TitleBar } from "@/components/ui/common/TitleBar";
import { useRouter } from "next/navigation";
export default function ServicesPage() {
  const router = useRouter();
  return (
    <>
      <Box sx={{ pt: 5, px: 2, maxWidth: 1152, mx: "auto" }}>
        <TitleBar title="همه خدمات " />
        <Stack spacing={2}>
          <Box>
            <SimpleCard
              image={"/images/cards/card-service/education.png"}
              title="آموزش و کارآفرینی"
              subtitle="از تجربه تا آینده ای بهتر"
              onButtonClick={() => {
                router.push("/education");
              }}
            />
          </Box>

          <Box>
            <SimpleCard
              image={"/images/cards/card-service/conversation.png"}
              title="منتورینگ"
              subtitle="مهارت های جدید و فرصت های تازه"
              onButtonClick={() => {
                router.push("/mentoring");
              }}
            />
          </Box>

          <Box>
            <SimpleCard
              image={"/images/cards/card-service/health.png"}
              title="سلامت و سبک زندگی"
              subtitle="زندگی سالم تر و شادتر"
              onButtonClick={() => {
                router.push("/health");
              }}
            />
          </Box>

          <Box>
            <SimpleCard
              image={"/images/cards/card-service/trip.png"}
              title="سفر و تجربه"
              subtitle="تجربه های خوب کنار همدیگر"
              onButtonClick={() => {
                router.push("/experience");
              }}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
