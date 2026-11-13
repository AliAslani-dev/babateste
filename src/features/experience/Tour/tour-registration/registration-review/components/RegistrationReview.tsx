"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";

import OrderSummary from "./OrderSummary";
import PriceDetails from "./PriceDetails";
import {
  REGISTRATION_STORAGE_KEY,
  RegistrationReviewData,
} from "../types/RegistrationReview.types";
import { registrationReviewStyles } from "./RegistrationReview.styles";
import PassengerReview from "./PassangerReview";

import type { Tour } from "@/features/experience/api";
import { useSignupForTour } from "@/features/experience/api";
interface RegistrationReviewProps {
  tour: Tour;
}
type RegistrationSuccessTour = {
  id: number;
  title: string;
  thumbnail: string;
  startTime: string;
  capacity: number;
  usedCapacity: number;
  priceText: string;
};

const REGISTRATION_SUCCESS_STORAGE_KEY = "nova-tour-registration-success";
export default function RegistrationReview({ tour }: RegistrationReviewProps) {
  const router = useRouter();
  const [data, setData] = useState<RegistrationReviewData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams<{ id: string }>();
  const eventId = Number(params.id);
  const {
    mutateAsync: signup,
    isPending: isSubmitting,
    snackbarElement,
  } = useSignupForTour();
  useEffect(() => {
    const storedData = sessionStorage.getItem(REGISTRATION_STORAGE_KEY);

    if (!storedData) {
      setIsLoading(false);
      return;
    }

    try {
      setData(JSON.parse(storedData) as RegistrationReviewData);
    } catch {
      sessionStorage.removeItem(REGISTRATION_STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <Stack
        sx={{
          py: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress size={24} />
      </Stack>
    );
  }

  if (!data) {
    return (
      <Stack spacing={2} sx={registrationReviewStyles.page}>
        <Typography variant="mediumSm">
          اطلاعات ثبت‌نام پیدا نشد. لطفاً ابتدا اطلاعات مسافران را وارد کنید.
        </Typography>

        <Button variant="contained" onClick={() => router.back()}>
          بازگشت به ثبت‌نام
        </Button>
      </Stack>
    );
  }

  const handleSignup = async () => {
    if (!Number.isInteger(eventId) || eventId <= 0) {
      console.error("شناسه رویداد معتبر نیست");
      return;
    }

    const companions = data.passengers.slice(1);

    try {
      const response = await signup({
        eventId,
        payload: {
          tickets_count: data.passengers.length,
          participators: companions.map((passenger) => ({
            name: passenger.fullName,
            phone_number: passenger.phoneNumber,
          })),
        },
      });

      const paymentUrl = response.paymentUrl;

      if (!paymentUrl) {
        console.error("آدرس درگاه پرداخت دریافت نشد:", response);
        return;
      }
      const additionalServicesPrice =
        (data.travelInsurance100 ? 100_000 : 0) +
        (data.travelInsurance80 ? 80_000 : 0);

      const DISCOUNT = 0;

      const totalPrice =
        tour.priceInIrt * data.passengers.length +
        additionalServicesPrice -
        DISCOUNT;
      sessionStorage.removeItem(REGISTRATION_SUCCESS_STORAGE_KEY);
      // ذخیره اطلاعات تور قبل از انتقال به درگاه پرداخت
      const successTour: RegistrationSuccessTour = {
        id: tour.id,
        title: tour.title,
        thumbnail: tour.thumbnail || tour.images?.[0]?.imageUrl || "",
        startTime: tour.startTime,
        capacity: tour.capacity,
        usedCapacity: tour.usedCapacity,
        priceText: totalPrice.toLocaleString("fa-IR") + " تومان",
      };

      sessionStorage.setItem(
        REGISTRATION_SUCCESS_STORAGE_KEY,
        JSON.stringify(successTour),
      );

      // پاک کردن اطلاعات فرم ثبت‌نام
      sessionStorage.removeItem(REGISTRATION_STORAGE_KEY);

      // انتقال کاربر به درگاه پرداخت
      window.location.assign(paymentUrl);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <Stack sx={registrationReviewStyles.page} spacing={0}>
      <OrderSummary data={data} />

      <PassengerReview data={data} />

      <PriceDetails data={data} tourPrice={tour.priceInIrt} />

      <Box sx={registrationReviewStyles.submitWrapper}>
        <Button
          fullWidth
          color="primary"
          size="large"
          variant="contained"
          onClick={handleSignup}
          disabled={isSubmitting}
        >
          {isSubmitting ? "در حال ثبت‌نام..." : "ادامه و پرداخت"}
        </Button>
      </Box>

      {snackbarElement}
    </Stack>
  );
}
