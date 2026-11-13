"use client";

import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import { mentorSectionStyles } from "./MentorSection.styles";
import { MentorCard } from "@/components/ui/common/cards/mentor/mentor-card/MentorCard";

export default function MentorSection() {

  const router = useRouter();

  return (
    <Box sx={mentorSectionStyles}>
      <MentorCard
        imageSrc="/images/cards/mentor-card/be-mentor.svg"
        imageAlt="منتورینگ"
        title="منتورینگ"
        description={"همکاری به عنوان منتور\nدر شریف نوا"}
        buttonText="درخواست همکاری"
        onButtonClick={() => router.push("/mentoring/cooperation-request")}
      />

      <MentorCard
        imageSrc="/images/cards/mentor-card/find-mentor.svg"
        imageAlt="منتور"
        title="منتور"
        description={"یافتن منتور متناسب\nبا نیاز شما"}
        buttonText="درخواست مشاوره"
        onButtonClick={() => {
          router.push("/mentoring/request-consultation");
        }}
      />
    </Box>
  );
}
