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
  type RegistrationReviewData,
} from "../types/RegistrationReview.types";
import { registrationReviewStyles } from "./RegistrationReview.styles";
import PassengerReview from "./PassangerReview";

import { useSignupForTour } from "@/features/experience/api";
import type { Event } from "@/features/experience/api";

interface RegistrationReviewProps {
  event: Event;
}

export interface RegistrationSuccessTour {
  id: number;
  title: string;
  thumbnail: string;
  startTime: string;
  endTime?: string;
  location?: string;
  capacity: number;
  usedCapacity: number;
  priceText: string;
}

const REGISTRATION_EVENT_SUCCESS_STORAGE_KEY =
  "nova-event-registration-success-pay";

// تبدیل قیمت متنی به عدد؛ ارقام فارسی و انگلیسی پشتیبانی می‌شوند.
const parsePrice = (value: string | number | null | undefined): number => {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  const normalized = String(value ?? "").replace(/[۰-۹]/g, (digit) =>
    String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)),
  );

  const digits = normalized.replace(/[^\d]/g, "");

  return digits ? Number(digits) : 0;
};

export default function RegistrationReview({ event }: RegistrationReviewProps) {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const eventId = Number(params.id);

  const [data, setData] = useState<RegistrationReviewData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    mutateAsync: signup,
    isPending: isSubmitting,
    snackbarElement,
  } = useSignupForTour();

  const eventPrice = parsePrice(event.priceInIrt);

  useEffect(() => {
    const storedData = sessionStorage.getItem(REGISTRATION_STORAGE_KEY);

    if (!storedData) {
      setIsLoading(false);
      return;
    }

    try {
      setData(JSON.parse(storedData) as RegistrationReviewData);
    } catch (error) {
      console.error("خطا در دریافت اطلاعات ثبت‌نام:", error);
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
      console.error("شناسه ایونت معتبر نیست:", eventId);
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

      const paymentUrl = response?.paymentUrl;

      if (!paymentUrl) {
        console.error("آدرس درگاه پرداخت دریافت نشد:", response);
        return;
      }
      const eventPrice = parsePrice(event.priceText);
      const additionalServicesPrice =
        (data.travelInsurance100 ? 100_000 : 0) +
        (data.travelInsurance80 ? 80_000 : 0);

      const DISCOUNT = 0;

      const totalPrice =
        eventPrice * data.passengers.length +
        additionalServicesPrice -
        DISCOUNT;

      sessionStorage.removeItem(REGISTRATION_EVENT_SUCCESS_STORAGE_KEY);
      const successEvent = {
        type: "event" as const,
        id: event.id,
        title: event.title,
        thumbnail: event.thumbnail ?? "",
        startTime: event.startTime,
        endTime: event.endTime,
        location: event.location,
        capacity: event.capacity,
        usedCapacity: event.usedCapacity,
        priceText: totalPrice.toLocaleString("fa-IR") + " تومان",
        totalPrice,
      };

      sessionStorage.setItem(
        REGISTRATION_EVENT_SUCCESS_STORAGE_KEY,
        JSON.stringify(successEvent),
      );

  

      sessionStorage.removeItem(REGISTRATION_STORAGE_KEY);

      window.location.assign(paymentUrl);
    } catch (error) {
      console.error("خطا در ثبت‌نام ایونت:", error);
    }
  };

  return (
    <Stack sx={registrationReviewStyles.page} spacing={0}>
      <OrderSummary data={data} />

      <PassengerReview data={data} />

      <PriceDetails data={data} eventPrice={eventPrice} />

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
