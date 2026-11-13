"use client";

import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import { Form, FormSubmitButton } from "@/components/ui/common/Form";
import { toGregorianDate } from "@/lib/utils/toGregorianDate";
import { reviewSchema } from "../schema/review.schema";
import type { ReviewFormValues } from "../schema/review.schema";
import type { AppointmentFormValues } from "../../appointment/schema/appointment.schema";
import { APPOINTMENT_STORAGE_KEY } from "../types/review.types";
import type { AppointmentReviewData } from "../types/review.types";

import MentorMiniCard from "../../appointment/components/MentorMiniCard";
import SessionDetails from "./SessionDetails";
import DiscountCode from "./DiscountCode";
import PaymentDetails from "./PaymentDetails";
import PaymentMethod from "./PaymentMethod";
import { pageRootSx, submitWrapperSx } from "./Review.styles";
import { useCreateSession } from "@/features/mentoring/api";

export default function ReviewPage() {
  const router = useRouter();
  const [data, setData] = useState<AppointmentReviewData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const mentorId = data?.mentor.mentorId ?? 0;
  const { mutate: createSession, isPending: isCreatingSession } =
    useCreateSession(mentorId);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(APPOINTMENT_STORAGE_KEY);
      if (raw) setData(JSON.parse(raw) as AppointmentReviewData);
    } catch {
      // corrupted storage — will show the empty state below
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = (values: ReviewFormValues) => {
    if (!data) return;

    const sessionTypeMap: Record<
      AppointmentFormValues["consultationType"],
      "online" | "hozoori"
    > = {
      online: "online",
      "in-person": "hozoori",
    };

    // فرمِ تاریخ تقویم شمسی به فرمت YYYY/MM/DD ذخیره می‌شود؛ سرور تاریخ میلادی Y-m-d می‌خواهد
    const appointmentDate = toGregorianDate(data.appointment.date);

    createSession(
      {
        date: appointmentDate,
        // مقدار topic از فرم ثبت نام می‌آید (کلید رشته‌ای مثل "legal" یا "business")
        topic: data.appointment.topic,
        session_type:
          sessionTypeMap[data.appointment.consultationType],
        descriptions: data.appointment.description || null,
      },
      {
        onSuccess: () => {
          router.push(
            `/mentoring/request-consultation/mentor-profile/${data.mentor.mentorId}/appointment/success`
          );
        },
        onError: (error: Error) => {
          console.error("خطا در رزرو جلسه:", error.message);
        },
      }
    );
  };

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50dvh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!data) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, py: 6, px: 4 }}>
        <Typography variant="mediumSm" color="text.secondary" sx={{ textAlign: "center" }}>
          اطلاعات درخواست پیدا نشد. لطفاً از مرحله اول شروع کنید.
        </Typography>
        <Typography
          variant="demiboldSm"
          color="primary.main"
          sx={{ cursor: "pointer" }}
          onClick={() => router.back()}
        >
          بازگشت
        </Typography>
      </Box>
    );
  }

  return (
    <Form<ReviewFormValues>
      schema={reviewSchema}
      onSubmit={handleSubmit}
      defaultValues={{ discountCode: "", paymentMethod: "online" }}
      spacing={0}
      sx={pageRootSx}
    >
      <MentorMiniCard mentor={data.mentor} />

      <SessionDetails appointment={data.appointment} />

      <DiscountCode />

      <PaymentDetails />

      <PaymentMethod />

      <Box sx={submitWrapperSx}>
        <FormSubmitButton
          appearance="solid"
          color="primary"
          shape="pill"
          size="lg"
          fullWidth
          disabled={isCreatingSession}
        >
          {isCreatingSession ? "در حال رزرو جلسه..." : "ادامه و پرداخت"}
        </FormSubmitButton>
      </Box>
    </Form>
  );
}
