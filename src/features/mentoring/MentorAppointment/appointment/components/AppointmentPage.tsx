"use client";

import { useRouter } from "next/navigation";
import { Box, CircularProgress, Typography } from "@mui/material";

import AppointmentForm from "./AppointmentForm";
import type { AppointmentFormValues } from "../schema/appointment.schema";
import { APPOINTMENT_STORAGE_KEY } from "../../review/types/review.types";
import type { AppointmentReviewData } from "../../review/types/review.types";
import { pageRootSx } from "./Appointment.styles";
import { useMentorDetail } from "@/features/mentoring/api";

interface AppointmentPageProps {
  mentorId: number;
}

export default function AppointmentPage({ mentorId }: AppointmentPageProps) {
  const router = useRouter();
  const { data: mentor, isLoading, isError } = useMentorDetail(mentorId);

  const handleSubmit = (values: AppointmentFormValues) => {
    if (!mentor) return;

    const reviewData: AppointmentReviewData = {
      mentor: {
        mentorId,
        name: mentor.name,
        subtitle: mentor.areaOfExpertise,
        imageSrc: "/images/mentors/MentorProfile/mentor-profile.jpg",
      },
      appointment: values,
    };

    sessionStorage.setItem(APPOINTMENT_STORAGE_KEY, JSON.stringify(reviewData));

    router.push(
      `/mentoring/request-consultation/mentor-profile/${mentorId}/appointment/review`,
    );
  };

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50dvh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !mentor) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50dvh" }}>
        <Typography variant="regularSm" color="error">
          خطا در دریافت اطلاعات منتور
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={pageRootSx}>
      <AppointmentForm
        mentor={{
          mentorId,
          name: mentor.name,
          subtitle: mentor.areaOfExpertise,
          imageSrc: "/images/mentors/MentorProfile/mentor-profile.jpg",
        }}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}
